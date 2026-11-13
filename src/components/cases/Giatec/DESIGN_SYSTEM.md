# Giatec Ecosystem Portal design system, guide for AI assistants

Read this file before generating or editing any UI in this folder. It tells you where the decisions live, what you may use, and how to check your work.

## Source of truth

1. Figma file Giatec Hackathon, file key nMgAAd6myrFpu6ZuTKdJ8N. Variables live in two collections, Giatec / Primitives and Giatec / Semantic. Components live in frame 2019:3216 (Native component library).
2. tokens.json is the exported copy of those variables. Edit it only to mirror a change made in Figma.
3. tokens.css is generated from tokens.json by build-tokens.mjs. Never edit it by hand. Run node build-tokens.mjs after any change to tokens.json.
4. component-map.json maps each Figma component to its code component, props and tokens.
5. portal.css and Prototype.tsx consume the tokens.

## Token rules

1. Use semantic tokens, written as var(--gt-name), for every color, radius and spacing value. Examples: var(--gt-brand-action), var(--gt-text-secondary), var(--gt-radius-card).
2. Never write a hex value in CSS. If the value you need has no token, use the closest semantic token and list the missing one in your reply. Do not invent a hex.
3. Never use a primitive token (for example --gt-green-600) in a component. Primitives exist so semantic tokens can be re-pointed.
4. Tokens under the proposed section of tokens.json are allowed in code but have no Figma variable yet. Flag any new use.
5. Spacing follows an 8 px rhythm: 4, 8, 12, 16, 20, 24, 32, 48. Page inset 32, card inset 24, component gap 16, section gap 24.
6. Type is Nunito Sans. Sizes: 36 display, 26 page title, 20 section, 16 panel, 14 body, 12 and 11 metadata, 10 caption.
7. Color never carries meaning alone. Pair status color with words or icons.

## Component rules

1. Check component-map.json before writing markup. If a component exists, use it. Do not rebuild a button, badge, table or tab with new markup.
2. Use the Figma vocabulary for props. Status badges take tone success, warning, critical, information or neutral, not color names. Buttons take variant primary, secondary, cancel or destructive.
3. One primary button per region. Loading keeps the button size and replaces the icon with a spinner. Disabled uses surface-disabled and text-muted.
4. Every number shows the product it came from, using SourceChip, and keeps its unit and time window.
5. Lead with the verdict, then the evidence. Link out to the product record for deep work.

## Workflow for a new component

1. Read the Figma node: get_design_context for structure, get_variable_defs for the tokens it uses.
2. Check component-map.json and portal.css for an existing match.
3. Build from tokens and existing components. Convert any Tailwind or hex in generated code to var(--gt-*).
4. Add every Figma variant as a prop value. Name props after the variant property and its options.
5. Update component-map.json with the new entry and its coverage.
6. Verify: no hex values in the diff, every Figma state reachable, keyboard focus visible, screenshot matches the frame.

## Prompt template

Build the [component] from Figma node [id]. Read DESIGN_SYSTEM.md, tokens.json and component-map.json first. Use only var(--gt-*) tokens and existing components. Implement every variant of the Figma component set. List any value you needed that has no token.

## Known gaps

See figmaGaps in component-map.json and the proposed section of tokens.json.
