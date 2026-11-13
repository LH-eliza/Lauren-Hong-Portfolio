'use client';

import React from 'react';
import tokens from './tokens.json';
import componentMap from './component-map.json';

const GREEN = '#32863F';

type TokenNode = { $value: string };

function flatten(node: Record<string, unknown>, path: string[] = []): Array<[string, string]> {
  const out: Array<[string, string]> = [];
  for (const [key, val] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    const child = val as Record<string, unknown>;
    if (child && typeof child === 'object' && '$value' in child) {
      out.push([[...path, key].join('.'), (child as unknown as TokenNode).$value]);
    } else if (child && typeof child === 'object') {
      out.push(...flatten(child, [...path, key]));
    }
  }
  return out;
}

const primitives = new Map(flatten(tokens.primitive as Record<string, unknown>, ['primitive']));

function resolve(value: string): string {
  const m = value.match(/^\{(.+)\}$/);
  return m ? (primitives.get(m[1]) ?? value) : value;
}

const semanticColors = flatten(tokens.semantic.color as Record<string, unknown>, ['color']).map(
  ([name, value]) => ({
    name: name.replace(/^color\./, ''),
    alias: value.replace(/^\{primitive\.color\./, '').replace(/\}$/, ''),
    hex: resolve(value),
  }),
);

const proposedCount = flatten(tokens.proposed as Record<string, unknown>).length;
const primitiveCount = primitives.size;
const semanticCount = flatten(tokens.semantic as Record<string, unknown>).length;

const P: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <p className={`text-gray-700 font-vietnam leading-relaxed ${className}`}>{children}</p>;

const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="mt-10 mb-3 font-castoro text-2xl leading-snug text-gray-900">{children}</h3>
);

const Code: React.FC<{ label: string; children: string }> = ({ label, children }) => (
  <div className="my-4 overflow-hidden rounded-xl border border-[rgb(229,229,229)]">
    <div className="bg-[#F4F6F5] px-4 py-2 text-xs font-vietnam uppercase tracking-wider text-gray-600">
      {label}
    </div>
    <pre className="overflow-x-auto bg-[#182C25] p-4 text-[13px] leading-relaxed text-[#DFE6E1]">
      <code>{children}</code>
    </pre>
  </div>
);

const Card: React.FC<{ eyebrow: string; title: string; children: React.ReactNode }> = ({
  eyebrow,
  title,
  children,
}) => (
  <div className="rounded-2xl border border-[rgb(229,229,229)] bg-white p-5">
    <p className="text-xs font-vietnam uppercase tracking-wider" style={{ color: GREEN }}>
      {eyebrow}
    </p>
    <h4 className="mt-1 font-castoro text-lg leading-snug text-gray-900">{title}</h4>
    <p className="mt-2 text-sm font-vietnam leading-relaxed text-gray-700">{children}</p>
  </div>
);

const coverageStyle: Record<string, string> = {
  complete: 'bg-[#B3EFBD] text-gray-900',
  partial: 'bg-[#FFE299] text-gray-900',
};

const DesignSystem: React.FC = () => {
  const components = componentMap.components;
  const complete = components.filter((c) => c.coverage === 'complete').length;

  return (
    <div className="space-y-2">
      <P>
        The portal had to read as one product, even though it is assembled from three. I used the
        prototype to prove a small system, not only a set of screens. Color, radius, and components
        all point back to a named decision in Figma, so a change in one place reaches every screen,
        and a new screen starts from that vocabulary instead of a blank frame.
      </P>

      <H3>Two tiers of tokens</H3>
      <P>
        The Figma file holds {primitiveCount} primitives and {semanticCount} semantic tokens in
        two collections. Primitives are the raw values, such as green 600. Semantic tokens are the
        roles, such as brand action, and each one aliases a primitive. Components only use roles,
        so a brand change updates one primitive and every role follows. The role name also says
        what the color is for.
      </P>

      <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {semanticColors.map((c) => (
          <div key={c.name} className="rounded-xl border border-[rgb(229,229,229)] bg-white p-3">
            <div
              className="h-12 rounded-lg border border-black/10"
              style={{ background: c.hex }}
              aria-hidden="true"
            />
            <p className="mt-2 text-xs font-semibold font-vietnam text-gray-900">{c.name}</p>
            <p className="text-xs font-vietnam text-gray-500">
              {c.alias} {c.hex}
            </p>
          </div>
        ))}
      </div>

      <H3>From Figma variable to running code</H3>
      <P>
        The path has four steps and each one is a file. Figma variables are read with the Figma MCP
        and saved as tokens.json in the W3C design token format. A small build script turns that
        file into tokens.css, where each token is a CSS custom property with the gt prefix and each
        semantic token is a var() alias of a primitive. The portal stylesheet and the React
        components then consume only those properties.
      </P>
      <Code label="tokens.json (excerpt)">{`"semantic": {
  "color": {
    "brand": { "action": { "$value": "{primitive.color.green.600}", "$type": "color" } }
  },
  "radius": { "card": { "$value": "10px", "$type": "dimension" } }
}`}</Code>
      <Code label="tokens.css (generated, never edited by hand)">{`.giatec-portal {
  --gt-green-600: #32863f;
  --gt-brand-action: var(--gt-green-600);
  --gt-radius-card: 10px;
}`}</Code>
      <Code label="portal.css (consumes roles only)">{`.btn { background: var(--gt-brand-action); border-radius: var(--gt-radius-control); }
.btn:focus-visible { outline: 3px solid var(--gt-border-focus); outline-offset: 2px; }`}</Code>
      <P>
        The CSS is generated, so a hand edit cannot pull it away from the Figma source. The
        properties sit on the portal wrapper, which keeps them out of the rest of this portfolio.
      </P>

      <H3>An audit before the refactor</H3>
      <P>
        Before swapping values I compared the code to Figma. I replaced 181 hard-coded hex values
        with tokens, and I found {proposedCount} values that lived in code with no Figma variable.
        Those stayed in a proposed group. A token file that quietly absorbs every stray hex is
        just a renamed pile of colors. Three differences were deliberate: hover green moved to the
        darker Figma hover, muted text moved darker for legibility, and card radius moved to 10
        pixels to match the component library.
      </P>
      <P>
        To prove the refactor changed nothing it should not, I rendered ten prototype pages before
        and after and compared them pixel by pixel. The largest difference was 0.01 percent of a
        page, from the intended hover and radius corrections.
      </P>

      <H3>Components, not screenshots</H3>
      <P>
        The Native library in Figma defines {components.length} component sets. All{' '}
        {components.length} map to a code component, and {complete} are complete, meaning every
        Figma variant is reachable from a prop. Button now carries default, hover, focus, disabled,
        loading, secondary, cancel, and delete, matching the Figma set. Status badges were colors
        in code and meanings in Figma. They now take success, warning, critical, information, and
        neutral, so the word on the component is the word in the prop.
      </P>
      <div className="my-5 overflow-x-auto rounded-xl border border-[rgb(229,229,229)]">
        <table className="w-full text-left text-sm font-vietnam">
          <thead className="bg-[#F4F6F5] text-xs uppercase tracking-wider text-gray-600">
            <tr>
              <th className="px-4 py-3">Figma component</th>
              <th className="px-4 py-3">Variants</th>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Coverage</th>
            </tr>
          </thead>
          <tbody>
            {components.map((c) => (
              <tr key={c.figma} className="border-t border-[rgb(229,229,229)] align-top">
                <td className="px-4 py-3 font-semibold text-gray-900">{c.figma}</td>
                <td className="px-4 py-3 text-gray-700">
                  {c.variants.length ? c.variants.join(', ') : 'Single'}
                </td>
                <td className="px-4 py-3 text-gray-700">{c.code.component}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${coverageStyle[c.coverage] ?? ''}`}
                  >
                    {c.coverage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Written so it can be reused</H3>
      <P>
        A generated screen usually looks plausible and still uses values that were never in the
        system. I wrote the decisions down in four layers so a new screen, whether I build it or
        an assistant does, has a closed list to work from. A reviewer can check the result against
        a file instead of against memory.
      </P>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card eyebrow="Layer 1" title="Only named values">
          tokens.json and tokens.css are the allowed list. The rules file says never write a hex,
          so a value outside the list gets flagged instead of invented.
        </Card>
        <Card eyebrow="Layer 2" title="Reuse before you draw">
          Each Figma node points to a code component, its props, and the tokens it may use. A
          button gets reused instead of redrawn.
        </Card>
        <Card eyebrow="Layer 3" title="The working rules">
          Token rules, spacing, type, accessibility, and a six-step path for a new component,
          written so they can be followed and checked.
        </Card>
        <Card eyebrow="Layer 4" title="The current frame">
          The Figma connection reads the live frame and its variables, so the code starts from the
          design as it is now, not from a stale screenshot.
        </Card>
      </div>
      <Code label="Prompt template">{`Build the [component] from Figma node [id].
Read DESIGN_SYSTEM.md, tokens.json and component-map.json first.
Use only var(--gt-*) tokens and existing components.
Implement every variant of the Figma component set.
List any value you needed that has no token.`}</Code>

      <H3>What is still open</H3>
      <P>
        Three gaps keep this from being a full system. Figma text styles are still named Text 1 to
        Text 12, so they need role names before they can map to props. Code Connect is not
        published yet, so a Figma node cannot return its code component. And the {proposedCount}{' '}
        proposed values still need variables, scoped so a picker only offers valid choices. Naming
        those gaps is what turns the map into something both sides can enforce.
      </P>
    </div>
  );
};

export default DesignSystem;
