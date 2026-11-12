import React, { useEffect, useMemo, useState } from "react";
import "./portal.css";
import PourTimeline, { SourceChip } from "./PourTimeline";
import { POURS, findPours } from "./pours";

const A = "/images/Giatec/portal/";
const icons = {
  overview: `${A}8272d.png`,
  products: `${A}384e7.png`,
  projects: `${A}ae445.png`,
  alerts: `${A}660cc.png`,
  impact: `${A}69a6f.png`,
  mixpilot: `${A}82d6f.png`,
  smartmix: `${A}813e3.png`,
  smartrock: `${A}81e21.png`,
  team: `${A}eda94.png`,
  integrations: `${A}4158b.png`,
  search: `${A}f11e7.png`,
  mail: `${A}ebe51.png`,
  bell: `${A}498aa.png`,
  account: `${A}2eabd.png`,
  plus: `${A}2ae82.png`,
};

type Page =
  | "welcome"
  | "overview"
  | "products"
  | "connect"
  | "projects"
  | "alerts"
  | "mixpilot"
  | "smartmix"
  | "smartrock"
  | "impact"
  | "team"
  | "integrations"
  | "pour";

const pages: Page[] = [
  "welcome",
  "overview",
  "products",
  "connect",
  "projects",
  "alerts",
  "mixpilot",
  "smartmix",
  "smartrock",
  "impact",
  "team",
  "integrations",
  "pour",
];

function pageFromLocation(): Page {
  if (typeof window === "undefined") return "overview";
  const queryPage = new URLSearchParams(window.location.search).get("page");
  const hashPage = window.location.hash.replace(/^#\/?/, "");
  const candidate = (queryPage || hashPage) as Page;
  return pages.includes(candidate) ? candidate : "overview";
}

function pourFromLocation(): string {
  if (typeof window === "undefined") return "P-04";
  const id = new URLSearchParams(window.location.search).get("pour");
  return POURS.some((x) => x.id === id) ? (id as string) : "P-04";
}

type Metric = { label: string; value: string; note: string; featured?: boolean };

type ProductKind = "MixPilot" | "SmartMix" | "SmartRock";

const nav: {
  label: string;
  page: Page;
  icon: string;
  group: string;
  count?: number;
  productIcon?: ProductKind;
}[] = [
  { label: "Overview", page: "overview", icon: icons.overview, group: "WORKSPACE" },
  { label: "Products", page: "products", icon: icons.products, group: "WORKSPACE" },
  { label: "Projects", page: "projects", icon: icons.projects, group: "WORKSPACE" },
  { label: "Alerts", page: "alerts", icon: icons.alerts, group: "WORKSPACE", count: 3 },
  { label: "Impact & reports", page: "impact", icon: icons.impact, group: "WORKSPACE" },
  {
    label: "SmartMix",
    page: "smartmix",
    icon: icons.smartmix,
    group: "PRODUCT ANALYTICS",
    productIcon: "SmartMix",
  },
  {
    label: "MixPilot",
    page: "mixpilot",
    icon: icons.mixpilot,
    group: "PRODUCT ANALYTICS",
    productIcon: "MixPilot",
  },
  {
    label: "SmartRock",
    page: "smartrock",
    icon: icons.smartrock,
    group: "PRODUCT ANALYTICS",
    productIcon: "SmartRock",
  },
  { label: "Team & access", page: "team", icon: icons.team, group: "ADMINISTRATION" },
  {
    label: "Integrations",
    page: "integrations",
    icon: icons.integrations,
    group: "ADMINISTRATION",
  },
];

const titles: Record<Page, string> = {
  welcome: "Overview",
  overview: "Overview",
  products: "Products",
  connect: "Products",
  projects: "Projects",
  alerts: "Alerts",
  mixpilot: "MixPilot",
  smartmix: "SmartMix",
  smartrock: "SmartRock",
  impact: "Impact & reports",
  team: "Team & access",
  integrations: "Integrations",
  pour: "Pour timeline",
};

function ProductAnalyticsIcon({
  product,
  className = "",
}: {
  product: ProductKind;
  className?: string;
}) {
  if (product === "SmartMix") {
    return (
      <span className={`analytics-icon smartmix-icon ${className}`} aria-hidden="true">
        <span className="smartmix-signal-frame">
          <img src={`${A}8ce4b.png`} alt="" />
        </span>
        <img className="smartmix-console" src={`${A}813e3.png`} alt="" />
      </span>
    );
  }

  return (
    <span
      className={`analytics-icon ${product.toLowerCase()}-icon ${className}`}
      aria-hidden="true"
    >
      <img src={product === "MixPilot" ? `${A}82d6f.png` : `${A}81e21.png`} alt="" />
    </span>
  );
}

function Button({
  children,
  onClick,
  secondary = false,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  disabled?: boolean;
}) {
  const isDisabled = disabled || !onClick;
  return (
    <button
      type="button"
      className={secondary ? "btn secondary" : "btn"}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Status({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "orange" | "red" | "blue" | "gray";
}) {
  return <span className={`status ${tone}`}>{children}</span>;
}

function WarningNotice({
  title,
  children,
  mini = false,
}: {
  title: string;
  children?: React.ReactNode;
  mini?: boolean;
}) {
  return (
    <div className={`warning${mini ? " mini" : ""}`}>
      <img className="warning-icon" src={`${A}f1db6.png`} alt="" />
      <div className="warning-copy">
        <b>{title}</b>
        {children && <span>{children}</span>}
      </div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

function MetricCards({ items }: { items: Metric[] }) {
  return (
    <div className="metric-grid">
      {items.map((m) => (
        <Card className={m.featured ? "metric featured" : "metric"} key={m.label}>
          <div className="eyebrow">{m.label}</div>
          <div className="metric-value">{m.value}</div>
          <div className="muted tiny">{m.note}</div>
          <span className="trend">↗</span>
        </Card>
      ))}
    </div>
  );
}

function Filters() {
  const [project, setProject] = useState("All 12 projects");
  const [month, setMonth] = useState("1–30 Jun 2026");
  return (
    <div className="filters">
      <select value={project} onChange={(e) => setProject(e.target.value)}>
        <option>All 12 projects</option>
        <option>Riverside Tower</option>
        <option>Harbour Bridge</option>
        <option>Westline Residences</option>
      </select>
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option>1–30 Jun 2026</option>
        <option>1–31 May 2026</option>
        <option>1–30 Apr 2026</option>
      </select>
      <span className="sync">● Last sync: 2 min ago</span>
    </div>
  );
}

function Tabs({ tabs, initial = 0 }: { tabs: string[]; initial?: number }) {
  const [active, setActive] = useState(initial);
  return (
    <div className="tabs" role="tablist">
      {tabs.map((tab, i) => (
        <button
          type="button"
          className={active === i ? "active" : ""}
          key={tab}
          onClick={() => setActive(i)}
          role="tab"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function LineChart({
  smartMix = false,
  labels = ["1–6 Jun", "7–12 Jun", "13–18 Jun", "19–24 Jun", "25–30 Jun"],
}: {
  smartMix?: boolean;
  labels?: string[];
}) {
  const points = smartMix
    ? "0,36 110,35 220,34 330,33 440,32"
    : "0,122 88,107 176,84 264,58 352,40 440,29";
  return (
    <div className="chart" aria-label={smartMix ? "Mix consistency over time" : "Production trend"}>
      {[0, 1, 2, 3].map((n) => (
        <span className="gridline" style={{ top: `${n * 28 + 12}px` }} key={n} />
      ))}
      <svg viewBox="0 0 440 145" preserveAspectRatio="none">
        {!smartMix && (
          <line x1="0" y1="55" x2="440" y2="55" stroke="#8bb79a" strokeDasharray="4 4" />
        )}
        <polyline points={points} fill="none" stroke="#32863f" strokeWidth="2.5" />
        {points.split(" ").map((p) => {
          const [x, y] = p.split(",");
          return (
            <circle key={p} cx={x} cy={y} r="2.8" fill="white" stroke="#32863f" strokeWidth="2" />
          );
        })}
      </svg>
      <div className="chart-labels">
        {labels.map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PageHeading({
  title,
  subtitle,
  action,
  actionIcon,
  titleIcon,
  onAction,
}: {
  title: string;
  subtitle: string;
  action?: string;
  actionIcon?: string;
  titleIcon?: React.ReactNode;
  onAction?: () => void;
}) {
  return (
    <div className="page-heading">
      <div>
        <div className="heading-title">
          {titleIcon}
          <h1>{title}</h1>
        </div>
        <p>{subtitle}</p>
      </div>
      {action && (
        <Button onClick={onAction}>
          {actionIcon && <img className="button-icon" src={actionIcon} alt="" />}
          {action}
        </Button>
      )}
    </div>
  );
}

function Welcome({ go }: { go: (p: Page) => void }) {
  return (
    <>
      <PageHeading
        title="Welcome to your ecosystem"
        subtitle="A shared workspace for your people, products and concrete projects."
        action="+  Connect product"
        onAction={() => go("connect")}
      />
      <div className="welcome-banner">
        <i />
        <div>
          <h2>Better decisions start with connected data.</h2>
          <p>
            Connect your first Giatec product to bring production, quality and field monitoring into
            one workspace.
          </p>
          <small>NORTHSTAR CONCRETE · WORKSPACE READY</small>
        </div>
        <img src={`${A}0062e.png`} alt="" />
      </div>
      <div className="section-title">
        <div>
          <h2>Set up your connected workspace</h2>
          <p>No products or projects connected yet. Your workspace contains no production data.</p>
        </div>
        <b>● 0 of 3 steps complete</b>
      </div>
      <div className="three-col">
        {[
          [
            "01 / CONNECT",
            "Connect your first product",
            "Start with MixPilot, SmartMix or SmartRock. You’ll need product admin access and a read-only API key.",
            "Connect a product",
          ],
          [
            "02 / ORGANIZE",
            "Map your projects",
            "Match project identities across products so batches, mix data and sensors share the same context.",
            "Available after connection",
          ],
          [
            "03 / COLLABORATE",
            "Bring your team together",
            "Invite project leads and give each teammate access only to the projects they need.",
            "Invite your team",
          ],
        ].map((x, i) => (
          <Card key={x[1]}>
            <div className="step">
              <span>{i === 0 ? "♧" : i === 1 ? "▥" : "♙"}</span>
              <small>{x[0]}</small>
            </div>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
            <Button
              secondary={i !== 0}
              disabled={i === 1}
              onClick={() => {
                if (i === 0) go("connect");
                if (i === 2) go("team");
              }}
            >
              {x[3]}
            </Button>
          </Card>
        ))}
      </div>
      <Card>
        <div className="section-title compact">
          <h3>Your overview will grow with your ecosystem</h3>
          <span>Nothing to measure yet</span>
        </div>
        <div className="four-col quiet-stats">
          {[
            "Production|Batches and concrete volume",
            "Quality|Consistency and device health",
            "Field progress|Strength and sensor readings",
            "Impact|Source-attributed estimates",
          ].map((x) => {
            const [a, b] = x.split("|");
            return (
              <div key={a}>
                <b>{a}</b>
                <strong>-</strong>
                <span>{b}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
}

function Overview({
  go,
  openPour,
  toast,
}: {
  go: (p: Page) => void;
  openPour: (id: string) => void;
  toast: (s: string) => void;
}) {
  return (
    <>
      <PageHeading
        title="Ecosystem overview"
        subtitle="From mix design to in-place strength. Your connected operations, in context."
        action="Export report"
        actionIcon={`${A}30829.png`}
        onAction={() => toast("Ecosystem report exported")}
      />
      <div className="overview-banner">
        <div>
          <h2>Three products. One connected perspective.</h2>
          <small>NORTHSTAR CONCRETE / JUNE 2026</small>
          <p>12 projects · 38 pours monitored · 3 insight flags · 1 connection needs attention</p>
        </div>
        <div>
          <Status tone="orange">2 healthy · 1 degraded</Status>
          <button onClick={() => go("integrations")}>View connection health →</button>
        </div>
      </div>
      <Filters />
      <MetricCards
        items={[
          {
            label: "Pours on target",
            value: "34 of 38",
            note: "Design vs delivered vs achieved",
            featured: true,
          },
          { label: "Active insight flags", value: "3", note: "Each links two or more products" },
          { label: "Optimization candidates", value: "4 mixes", note: "Steady strength margin in June" },
          { label: "Active SmartRock sensors", value: "43", note: "42 syncing · 1 delayed" },
        ]}
      />
      <div className="content-grid">
        <Card>
          <div className="card-head">
            <h3>Insight flags</h3>
            <span>Open a flag for the pour timeline</span>
          </div>
          <div className="insight-list">
            {POURS.map((pour) => (
              <div className="insight-card" key={pour.id}>
                <div className="flag-header">
                  <b>{pour.flag.title}</b>
                  <Status tone={pour.flag.tone}>{pour.flag.badge}</Status>
                </div>
                <p>{pour.flag.message}</p>
                <div className="flag-footer">
                  <div className="sources">
                    {pour.flag.sources.map((src) => (
                      <SourceChip key={src} product={src} />
                    ))}
                  </div>
                  <button className="link" onClick={() => openPour(pour.id)}>
                    Open pour timeline →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="card-head">
            <h3>Connection health</h3>
            <span>3 connected</span>
          </div>
          {[
            ["SmartMix", "43 active users"],
            ["MixPilot", "17 of 18 trucks reporting"],
            ["SmartRock", "42 of 43 sensors syncing"],
          ].map((x, i) => (
            <div className="health" key={x[0]}>
              <div>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
              </div>
              <Status tone={i === 2 ? "orange" : "green"}>
                {i === 2 ? "Degraded" : "Connected"}
              </Status>
            </div>
          ))}
          <WarningNotice mini title="Riverside gateway offline.">
            SmartRock readings may be stale for 2 pours.
          </WarningNotice>
        </Card>
      </div>
      <Card>
        <div className="card-head">
          <h3>Projects at a glance</h3>
          <span>Showing 3 of 12 projects</span>
        </div>
        <DataTable
          headers={["Project", "Products", "June volume", "Pours on target", "Latest insight", "Status"]}
          rows={[
            [
              <button className="link" onClick={() => go("projects")}>
                Riverside Tower
              </button>,
              "All 3 products",
              "3,150 m³",
              "11 of 13",
              <button className="link" onClick={() => openPour("P-04")}>
                Shortfall + drift · P-04
              </button>,
              <span className="orange-text">Needs review</span>,
            ],
            [
              "Harbour Bridge",
              "MixPilot · SmartRock",
              "2,400 m³",
              "8 of 8",
              "Strength on forecast",
              <span className="green-text">On target</span>,
            ],
            [
              "Westline Residences",
              "All 3 products",
              "1,800 m³",
              "6 of 6",
              <button className="link" onClick={() => openPour("NS-30")}>
                Healthy margin · 4 pours
              </button>,
              <span className="green-text">Optimize</span>,
            ],
          ]}
        />
      </Card>
    </>
  );
}

function Products({ go }: { go: (p: Page) => void }) {
  return (
    <>
      <PageHeading
        title="Your product portfolio"
        subtitle="Manage your Giatec ecosystem, from plant intelligence to field monitoring."
        action="+  Connect product"
        onAction={() => go("connect")}
      />
      <Tabs tabs={["Connected products · 3", "Available products", "Connection history"]} />
      <div className="three-col product-cards">
        {[
          [
            "MixPilot",
            "Batch performance and mix-level material and carbon estimates.",
            "56 batches / day",
            "43 active users · synced 2 min ago",
            "Connected",
          ],
          [
            "SmartMix",
            "Device and production intelligence for consistent concrete.",
            "12,600 m³ mixed",
            "18 devices · 17 online · June 2026",
            "Connected",
          ],
          [
            "SmartRock",
            "In-place strength and temperature across your active projects.",
            "43 active sensors",
            "12 projects · 1 sensor delayed",
            "Degraded",
          ],
        ].map((x, i) => (
          <Card key={x[0]}>
            <div className="card-head">
              <div className="product-icon">
                <ProductAnalyticsIcon
                  product={(["MixPilot", "SmartMix", "SmartRock"] as ProductKind[])[i]}
                />
              </div>
              <Status tone={i === 2 ? "orange" : "green"}>{x[4]}</Status>
            </div>
            <h2>{x[0]}</h2>
            <p>{x[1]}</p>
            <strong className="product-number">{x[2]}</strong>
            <span className="muted tiny">{x[3]}</span>
            <button
              className="card-link"
              onClick={() => go((["mixpilot", "smartmix", "smartrock"] as Page[])[i])}
            >
              View analytics <b>→</b>
            </button>
          </Card>
        ))}
      </div>
      <WarningNotice title="SmartRock needs attention">
        Riverside gateway has been offline since 15:55 UTC. Historical readings are retained; SR-218
        is not receiving new data.
      </WarningNotice>
      <Card>
        <div className="card-head">
          <h3>Coverage across your operations</h3>
          <span>June 2026</span>
        </div>
        <DataTable
          headers={["Product", "Workspace connection", "Coverage", "Latest sync", "Owner"]}
          rows={[
            [
              "MixPilot",
              "Northstar / production",
              "12 projects · 1,680 batches",
              "30 Jun, 16:40 UTC",
              "Alex Morgan",
            ],
            [
              "SmartMix",
              "Northstar / plants",
              "18 devices · 2 plants",
              "30 Jun, 16:40 UTC",
              "Priya Shah",
            ],
            [
              "SmartRock",
              "Northstar / field",
              "12 projects · 43 sensors",
              "30 Jun, 16:40 UTC*",
              "Daniel Lee",
            ],
          ]}
        />
      </Card>
    </>
  );
}

function Connect({ go, toast }: { go: (p: Page) => void; toast: (s: string) => void }) {
  const [key, setKey] = useState("•••• •••• •••• 7F2A");
  const [tested, setTested] = useState(false);
  const [visible, setVisible] = useState(false);
  const valid = tested && key.length > 10;
  return (
    <>
      <PageHeading
        title="Connect a product"
        subtitle="Add a separate product workspace to your Northstar ecosystem."
        action="▣  Save draft"
        onAction={() => toast("Draft saved")}
      />
      <Card className="stepper">
        {[
          "✓  Choose product",
          "2  Authorize connection",
          "3  Map projects",
          "4  Review & connect",
        ].map((x, i) => (
          <span className={i === 1 ? "active" : i === 0 ? "done" : ""} key={x}>
            {x}
          </span>
        ))}
      </Card>
      <div className="form-layout">
        <Card className="form-card">
          <div className="card-head">
            <h3>Authorize SmartRock</h3>
            <span>Step 2 of 4</span>
          </div>
          <div className="product-strip">
            <ProductAnalyticsIcon product="SmartRock" />
            <div>
              <b>SmartRock · Additional field workspace</b>
              <small>Existing Northstar connection will remain unchanged.</small>
            </div>
          </div>
          <label>
            Connection name *<input defaultValue="South region field workspace" />
          </label>
          <label>
            Workspace ID *<input defaultValue="SR-SOUTH-002" />
            <small>✓ Workspace format is valid. Found in SmartRock account settings.</small>
          </label>
          <label>
            API key *
            <div className="input-wrap">
              <input
                className={!valid && tested ? "invalid" : ""}
                value={visible ? "sk_live_south_7F2A" : key}
                onChange={(e) => {
                  setKey(e.target.value);
                  setTested(false);
                }}
              />
              <button onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button>
            </div>
            {tested && !valid && (
              <small className="error">
                Authorization failed: key does not have read:sensors permission.
              </small>
            )}
          </label>
          <label>
            Data region *
            <select>
              <option>Canada</option>
              <option>United States</option>
              <option>Europe</option>
            </select>
          </label>
          {tested && (
            <div className={valid ? "success-box" : "error-box"}>
              <b>{valid ? "Connection verified" : "We couldn’t verify this connection"}</b>
              <span>
                {valid
                  ? "Credentials and required scopes are valid. You can continue."
                  : "Replace the key with one that can read projects and sensors, then test again."}
              </span>
            </div>
          )}
          <div className="form-actions">
            <Button secondary onClick={() => go("products")}>
              Back
            </Button>
            <div>
              <Button secondary onClick={() => setTested(true)}>
                ↻ Test connection
              </Button>
              <Button
                disabled={!valid}
                onClick={() => {
                  toast("Product connected");
                  go("products");
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Card>
        <div className="side-stack">
          <Card>
            <h3>Before you connect</h3>
            <Status tone="blue">Admin access required</Status>
            <h4>Read-only credentials</h4>
            <p>Required scopes: read:projects and read:sensors.</p>
            <h4>Project mapping comes next</h4>
            <p>Match source project IDs with your portal projects.</p>
            <h4>No duplicate impact</h4>
            <p>Existing projects and historical readings are not re-counted.</p>
          </Card>
          <Card>
            <h3>Your data stays under your control</h3>
            <p>Credentials are masked in the portal. Disconnecting a product stops future syncs.</p>
            <button className="link" disabled>
              Read the connection checklist ↗
            </button>
          </Card>
        </div>
      </div>
    </>
  );
}

function Analytics({
  kind,
  toast,
}: {
  kind: "MixPilot" | "SmartMix" | "SmartRock";
  toast: (s: string) => void;
}) {
  const config = {
    MixPilot: {
      sub: "Track batch production, mix performance and modeled material impact.",
      metrics: [
        ["Monthly active users", "43", "Unique users · June 2026"],
        ["Average batches / day", "56", "1,680 batches ÷ 30 calendar days"],
        ["Estimated CO₂e avoided", "502 t", "Versus mix-specific baseline"],
        ["Estimated material savings", "$4,300", "CAD · modeled · June 2026"],
      ],
      tabs: ["Production overview", "Mix performance", "Impact methodology"],
    },
    SmartMix: {
      sub: "Understand production consistency, device availability and plant performance.",
      metrics: [
        ["Registered devices", "18", "17 online · 1 delayed"],
        ["Concrete volume mixed", "12,600 m³", "Same June production as MixPilot"],
        ["Mix consistency score", "94 / 100", "Volume-weighted · June 2026"],
        ["Equipment uptime", "98.6%", "7,099.2 available / 7,200 scheduled h"],
      ],
      tabs: ["Production quality", "Device performance", "Cost context"],
    },
    SmartRock: {
      sub: "Monitor in-place strength, sensor health and planned curing milestones.",
      metrics: [
        ["Active sensors deployed", "43", "42 syncing · 1 delayed"],
        ["Strength tests recorded", "56", "June 2026 · linked test records"],
        ["Estimated time gain", "1.8 days", "Mean vs planned milestone · 12 projects"],
        ["Projects monitored", "12", "8 sensors at Riverside Tower"],
      ],
      tabs: [],
    },
  }[kind];
  const isMix = kind === "SmartMix";
  const isRock = kind === "SmartRock";
  return (
    <>
      <PageHeading
        title={`${kind} Analytics`}
        subtitle={config.sub}
        action="Export report"
        actionIcon={`${A}30829.png`}
        titleIcon={<ProductAnalyticsIcon product={kind} />}
        onAction={() => toast(`${kind} report exported`)}
      />
      <Filters />
      <MetricCards
        items={config.metrics.map((m, i) => ({
          label: m[0],
          value: m[1],
          note: m[2],
          featured: isRock ? i === 0 : i === 1,
        }))}
      />
      {isRock && (
        <WarningNotice title="1 sensor is delayed at Riverside Tower">
          SR-218 last reported at 15:55 UTC. Use the last reading as historical context only.
        </WarningNotice>
      )}
      {!!config.tabs.length && <Tabs tabs={config.tabs} />}
      <div className="content-grid">
        <Card>
          <div className="card-head">
            <h3>
              {isRock
                ? "Riverside · Pour P-04 strength"
                : isMix
                  ? "Mix consistency over time"
                  : "Batch creation trend"}
            </h3>
            <span>{isRock ? "Representative sensor SR-217" : "6-day averages"}</span>
          </div>
          <p className="tiny muted">
            {isRock
              ? "Compressive strength (MPa) · age since pour"
              : isMix
                ? "Consistency score / 100"
                : "Batches / day · 6-day periods"}
          </p>
          <LineChart smartMix={isMix} />
        </Card>
        <Card>
          {isRock ? (
            <>
              <div className="card-head">
                <h3>Milestone planning</h3>
                <span>Illustrative estimate</span>
              </div>
              <Status tone="blue">Engineer review required</Status>
              <div className="big-callout">1.8 days earlier</div>
              <p>
                Mean difference between projected threshold time and planned milestone across 12
                demo projects.
              </p>
            </>
          ) : isMix ? (
            <>
              <div className="card-head">
                <h3>Plant performance</h3>
                <span>June 2026</span>
              </div>
              <DataTable
                headers={["Plant", "Volume", "Score"]}
                rows={[
                  [`East plant`, "7,560 m³", "95 / 100"],
                  ["West plant", "5,040 m³", "92.5 / 100"],
                  ["Total / weighted", "12,600 m³", "94 / 100"],
                ]}
              />
              <Status>Target met at both plants</Status>
            </>
          ) : (
            <>
              <div className="card-head">
                <h3>Mix design performance</h3>
                <span>June volume</span>
              </div>
              {[
                ["NS-35", 84, "5,040"],
                ["NS-40", 63, "3,780"],
                ["NS-30", 42, "2,520"],
                ["NS-50", 21, "1,260"],
              ].map((x) => (
                <div className="bar-row" key={x[0]}>
                  <span>{x[0]}</span>
                  <i>
                    <b style={{ width: `${x[1]}%` }} />
                  </i>
                  <em>{x[2]}</em>
                </div>
              ))}
            </>
          )}
        </Card>
      </div>
      <Card>
        <div className="card-head">
          <h3>
            {isRock
              ? "Sensor health & latest readings"
              : isMix
                ? "Device performance"
                : "Project-level production & estimates"}
          </h3>
          <span>Showing 4 records</span>
        </div>
        <DataTable
          headers={
            isRock
              ? ["Sensor / project", "Pour", "Age", "Strength", "Temperature", "Status"]
              : isMix
                ? ["Device", "Plant", "Uptime · June", "Consistency", "Last seen", "Status"]
                : ["Project", "Batches", "Volume", "CO₂e avoided", "Savings (CAD)"]
          }
          rows={
            isRock
              ? [
                  [
                    "SR-217 · Riverside",
                    "P-04",
                    "120 h",
                    "27.8 MPa",
                    "25.1 °C",
                    <span className="green-text">Online</span>,
                  ],
                  [
                    "SR-218 · Riverside",
                    "P-04",
                    "119.2 h*",
                    "27.4 MPa*",
                    "26.2 °C*",
                    <span className="orange-text">Delayed</span>,
                  ],
                  [
                    "SR-225 · Harbour",
                    "P-11",
                    "72 h",
                    "26.1 MPa",
                    "28.4 °C",
                    <span className="green-text">Online</span>,
                  ],
                  [
                    "SR-231 · Westline",
                    "P-08",
                    "48 h",
                    "18.2 MPa",
                    "30.3 °C",
                    <span className="green-text">Online</span>,
                  ],
                ]
              : isMix
                ? [
                    [
                      "SM-101 · Mixer 01",
                      "East plant",
                      "99.2%",
                      "96 / 100",
                      "16:40 UTC",
                      <span className="green-text">Online</span>,
                    ],
                    [
                      "SM-102 · Mixer 02",
                      "East plant",
                      "98.9%",
                      "94 / 100",
                      "16:40 UTC",
                      <span className="green-text">Online</span>,
                    ],
                    [
                      "SM-201 · Mixer 01",
                      "West plant",
                      "98.5%",
                      "93 / 100",
                      "16:40 UTC",
                      <span className="green-text">Online</span>,
                    ],
                    [
                      "SM-204 · Mixer 04",
                      "West plant",
                      "96.8%",
                      "91 / 100",
                      "16:30 UTC",
                      <span className="orange-text">Delayed</span>,
                    ],
                  ]
                : [
                    ["Riverside Tower", "420", "3,150 m³", "125 t", "$1,050"],
                    ["Harbour Bridge", "320", "2,400 m³", "96 t", "$820"],
                    ["Westline Residences", "240", "1,800 m³", "72 t", "$620"],
                    ["Other 9 projects", "700", "5,250 m³", "209 t", "$1,810"],
                  ]
          }
        />
      </Card>
      <div className="info">
        ⓘ{" "}
        <b>
          {isRock
            ? "Last reading context"
            : isMix
              ? "Keep operational metrics separate from impact"
              : "Estimates, not verified environmental claims"}
        </b>
        <span>Demo values are illustrative and preserve separate product evidence.</span>
      </div>
    </>
  );
}

function Project({
  go,
  toast,
}: {
  go: (p: Page, pour?: string) => void;
  toast: (s: string) => void;
}) {
  return (
    <>
      <PageHeading
        title="Riverside Tower"
        subtitle="PRJ-001 · Ottawa, ON · Project lead: Daniel Lee · June 2026"
        action="Export report"
        actionIcon={`${A}30829.png`}
        onAction={() => toast("Riverside report exported")}
      />
      <div className="project-tags">
        <Status>MixPilot</Status>
        <Status>SmartMix</Status>
        <Status>SmartRock</Status>
        <Status tone="orange">1 source needs attention</Status>
      </div>
      <MetricCards
        items={[
          { label: "MixPilot · batches", value: "420", note: "3,150 m³ total · June" },
          {
            label: "SmartMix · consistency",
            value: "95 / 100",
            note: "Project volume-weighted score",
          },
          { label: "SmartRock · sensors", value: "8", note: "7 syncing · 1 delayed" },
          {
            label: "MixPilot · CO₂e avoided",
            value: "125 t",
            note: "Estimated · $1,050 CAD savings",
            featured: true,
          },
        ]}
      />
      <Tabs
        tabs={["Project summary", "Batches · 420", "Sensors · 8", "Documents · 6", "Activity"]}
      />
      <div className="content-grid">
        <Card>
          <div className="card-head">
            <h3>Pour P-04 · strength development</h3>
            <span>SR-217 / NS-35</span>
          </div>
          <LineChart />
          <button className="link" onClick={() => go("pour", "P-04")}>
            Open pour timeline →
          </button>
        </Card>
        <Card>
          <div className="card-head">
            <h3>Selected sensor · SR-218</h3>
            <span>P-04 / Level 03</span>
          </div>
          <Status tone="orange">Delayed · 47 min</Status>
          <div className="sensor-values">
            <div>
              <span>Last strength</span>
              <b>27.4 MPa</b>
            </div>
            <div>
              <span>Temperature</span>
              <b>26.2 °C</b>
            </div>
          </div>
          <p>Last seen 30 Jun, 15:55 UTC. Reading age: 119.2 h since pour.</p>
          <Button secondary onClick={() => go("integrations")}>
            Review connection
          </Button>
        </Card>
      </div>
      <Card>
        <div className="card-head">
          <h3>Cross-product traceability</h3>
          <span>Latest pours</span>
        </div>
        <DataTable
          headers={[
            "Pour",
            "MixPilot batch range",
            "SmartMix / mix",
            "SmartRock sensors",
            "Volume",
            "State",
          ]}
          rows={[
            [
              <button className="link" onClick={() => go("pour", "P-04")}>
                P-04 · Level 03
              </button>,
              "MP-1241–1280",
              "SM-101 / NS-35",
              "SR-217 · SR-218",
              "300 m³",
              <span className="orange-text">Needs review</span>,
            ],
            [
              "P-03 · Level 02",
              "MP-1201–1240",
              "SM-101 / NS-35",
              "SR-215 · SR-216",
              "300 m³",
              <span className="green-text">Ready</span>,
            ],
            [
              "P-02 · Level 01",
              "MP-1161–1200",
              "SM-102 / NS-40",
              "SR-213 · SR-214",
              "300 m³",
              <span className="green-text">Ready</span>,
            ],
          ]}
        />
      </Card>
      <div className="info">
        ⓘ <b>One project identity, separate product evidence</b>
        <span>
          PRJ-001 links batch, mix and sensor records. CO₂e and material savings come from MixPilot
          only.
        </span>
      </div>
    </>
  );
}

function Integrations({ go, toast }: { go: (p: Page) => void; toast: (s: string) => void }) {
  const [connected, setConnected] = useState(false);
  return (
    <>
      <PageHeading
        title="Integrations & data sources"
        subtitle="Monitor connection health, sync coverage and credentials across the ecosystem."
        action="+  Connect product"
        onAction={() => go("connect")}
      />
      <MetricCards
        items={[
          {
            label: "Workspace product connections",
            value: "3",
            note: "MixPilot · SmartMix · SmartRock",
          },
          { label: "Registered data sources", value: "5", note: "4 connected · 1 disconnected" },
          {
            label: "Latest workspace sync",
            value: "16:40 UTC",
            note: "30 Jun 2026 · source exceptions below",
          },
        ]}
      />
      <Tabs tabs={["Data sources · 5", "Product credentials", "Sync log", "API access"]} />
      <Card>
        <div className="card-head">
          <h3>Source connection health</h3>
          <span>Refresh cadence · 2 min</span>
        </div>
        <DataTable
          headers={["Source", "Product", "Coverage", "Last successful sync", "Health"]}
          rows={[
            [
              "Production API",
              "MixPilot",
              "12 projects · 1,680 batches",
              "30 Jun, 16:40 UTC",
              <span className="green-text">Connected</span>,
            ],
            [
              "East plant connector",
              "SmartMix",
              "10 devices",
              "30 Jun, 16:40 UTC",
              <span className="green-text">Connected</span>,
            ],
            [
              "West plant connector",
              "SmartMix",
              "8 devices · 1 delayed",
              "30 Jun, 16:40 UTC",
              <span className="green-text">Connected</span>,
            ],
            [
              "Field cloud API",
              "SmartRock",
              "42 sensors · 12 projects",
              "30 Jun, 16:40 UTC",
              <span className="green-text">Connected</span>,
            ],
            [
              "Riverside GW-02",
              "SmartRock",
              "SR-218 · Riverside Tower",
              connected ? "Just now" : "30 Jun, 15:55 UTC",
              <span className={connected ? "green-text" : "red-text"}>
                {connected ? "Connected" : "Disconnected"}
              </span>,
            ],
          ]}
        />
      </Card>
      <div className="content-grid">
        <Card>
          <div className="card-head">
            <h3>Riverside GW-02</h3>
            <span>Source detail / Selected</span>
          </div>
          <Status tone={connected ? "green" : "red"}>
            {connected ? "Connected just now" : "Disconnected · 47 min"}
          </Status>
          {!connected && (
            <div className="error-box">
              <b>Gateway heartbeat timed out</b>
              <span>
                No heartbeat after 3 retry attempts. Confirm gateway power and site network.
              </span>
            </div>
          )}
          <div className="button-row">
            <Button
              onClick={() => {
                setConnected(true);
                toast("Connection restored");
              }}
            >
              ↻ Retry connection
            </Button>
            <Button secondary>View setup guide</Button>
          </div>
        </Card>
        <Card>
          <div className="card-head">
            <h3>Recent sync events</h3>
            <span>UTC</span>
          </div>
          {[
            ["16:40", "Field cloud API completed"],
            ["16:38", "GW-02 retry failed"],
            ["16:10", "Sensor delay alert created"],
            ["15:55", "GW-02 last heartbeat"],
          ].map((x) => (
            <div className="event" key={x[0]}>
              <time>{x[0]}</time>
              <span>{x[1]}</span>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}

function Alerts({ go, toast }: { go: (p: Page) => void; toast: (s: string) => void }) {
  const alerts = [
    ["Critical", "Riverside gateway disconnected", "SmartRock · Riverside Tower · 47 min ago"],
    ["Warning", "SR-218 readings delayed", "SmartRock · Riverside Tower · 32 min ago"],
    ["Warning", "SM-204 sync delayed", "SmartMix · West plant · 12 min ago"],
    ["Resolved", "Harbour P-11 milestone reached", "SmartRock · Harbour Bridge · 2 h ago"],
    ["Resolved", "June source sync completed", "MixPilot · All projects · 3 h ago"],
  ];
  const [selected, setSelected] = useState(0);
  const [resolved, setResolved] = useState(false);
  return (
    <>
      <PageHeading
        title="Alerts & notifications"
        subtitle="Triage operational signals with the source, impact and next step in one place."
        action="☷  Notification settings"
        onAction={() => toast("Notification settings saved")}
      />
      <div className="alert-summary">
        <Status tone="gray">3 open</Status>
        <Status tone="red">1 critical</Status>
        <Status tone="orange">2 warnings</Status>
        <span>Assigned to your workspace · Snapshot 16:42 UTC</span>
      </div>
      <Tabs tabs={["Open · 3", "All · 5", "Assigned to me · 1", "Resolved · 2"]} />
      <div className="alerts-layout">
        <div className="alert-list">
          {alerts.map((a, i) => (
            <button
              className={selected === i ? "selected" : ""}
              onClick={() => setSelected(i)}
              key={a[1]}
            >
              <div>
                <Status tone={a[0] === "Critical" ? "red" : a[0] === "Warning" ? "orange" : "gray"}>
                  {a[0]}
                </Status>
                <small>{i === 0 ? "Unassigned" : "Daniel Lee"}</small>
              </div>
              <b>{a[1]}</b>
              <span>{a[2]}</span>
            </button>
          ))}
        </div>
        <Card className="alert-detail">
          <div className="card-head">
            <h2>{alerts[selected][1]}</h2>
            <span>AL-1042 / {resolved ? "Resolved" : "Open"}</span>
          </div>
          <div className="button-row">
            <Status tone={selected === 0 ? "red" : selected < 3 ? "orange" : "gray"}>
              {alerts[selected][0]}
            </Status>
            <Status tone="gray">{resolved ? "Acknowledged" : "Not acknowledged"}</Status>
          </div>
          <p>
            GW-02 stopped sending data at 15:55 UTC. One linked sensor, SR-218, has no newer
            readings. Historical data is available but not current.
          </p>
          <DataTable
            headers={["Context", "Details"]}
            rows={[
              [`Product / project`, "SmartRock / Riverside Tower"],
              ["Affected reading", "SR-218 · P-04 · 27.4 MPa at 15:55"],
              ["Owner / escalation", "Daniel Lee / Workspace admin"],
            ]}
          />
          <WarningNotice mini title="Do not use stale data for release decisions">
            The sensor alert is linked to this source outage.
          </WarningNotice>
          <h3>Recommended next steps</h3>
          <ul className="checklist">
            <li>Check gateway power and network at Riverside.</li>
            <li>Reconnect the source in Integrations.</li>
            <li>Confirm a fresh SR-218 reading before resolving.</li>
          </ul>
          <div className="button-row">
            <Button onClick={() => go("integrations")}>Review connection</Button>
            <Button
              secondary
              onClick={() => {
                setResolved(true);
                toast("Alert acknowledged");
              }}
            >
              {resolved ? "Acknowledged" : "Acknowledge"}
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

function TeamAccess({ toast }: { toast: (s: string) => void }) {
  const [email, setEmail] = useState("morgan.reed@example.com");
  const members = [
    ["Alex Morgan · you", "Admin", "All 12 projects", "Active"],
    ["Priya Shah", "Admin", "All 12 projects", "Active"],
    ["Daniel Lee", "Manager", "Riverside · Harbour", "Active"],
    ["Elena Torres", "Manager", "Westline + 3", "Active"],
    ["Marcus Chen", "Manager", "6 assigned projects", "Active"],
    ["Sam Taylor", "Viewer", "Riverside Tower", "Active"],
    ["Jordan Miller", "Viewer", "Harbour Bridge", "Active"],
    ["Casey Brown", "Viewer", "Westline Residences", "Active"],
  ];
  return (
    <>
      <PageHeading
        title="Team & access"
        subtitle="Give the right people the right project context. Keep administration explicit."
        action="Invite member"
        actionIcon={`${A}9a231.png`}
        onAction={() => document.getElementById("invite-email")?.focus()}
      />
      <MetricCards
        items={[
          { label: "Workspace members", value: "8", note: "2 admins · 3 managers · 3 viewers" },
          { label: "Pending invitations", value: "1", note: "Invitation expires 7 Jul 2026" },
          { label: "Project access", value: "12", note: "Project-scoped roles available" },
        ]}
      />
      <Tabs tabs={["Members · 8", "Invitations · 1", "Roles & permissions", "Audit log"]} />
      <div className="team-layout">
        <Card>
          <div className="card-head">
            <h3>Workspace members</h3>
            <span>8 active</span>
          </div>
          <DataTable
            headers={["Member", "Role", "Project scope", "Status"]}
            rows={members.map((member) => [
              member[0],
              member[1],
              member[2],
              <span className="green-text">{member[3]}</span>,
            ])}
          />
          <div className="table-actions">
            <span>Showing all 8 members</span>
            <Button secondary onClick={() => toast("Access list downloaded")}>
              Download access list
            </Button>
          </div>
        </Card>
        <div className="side-stack">
          <Card className="invite-card">
            <h3>Invite a teammate</h3>
            <label>
              Work email
              <input
                id="invite-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              Workspace role
              <select defaultValue="Viewer">
                <option>Viewer</option>
                <option>Manager</option>
                <option>Admin</option>
              </select>
            </label>
            <label>
              Project access
              <select defaultValue="Riverside Tower">
                <option>Riverside Tower</option>
                <option>Harbour Bridge</option>
                <option>All 12 projects</option>
              </select>
            </label>
            <p className="tiny">
              Viewers can read assigned project data. They cannot manage credentials or team access.
            </p>
            <Button
              onClick={() => {
                toast(`Invitation sent to ${email}`);
                setEmail("");
              }}
              disabled={!email.includes("@")}
            >
              Send invitation
            </Button>
          </Card>
          <div className="info">
            <img className="notice-icon" src={`${A}c7e32.png`} alt="" />
            <b>Least privilege by default</b>
            <span>
              New members start as viewers. Only admins can connect products or manage roles.
            </span>
          </div>
        </div>
      </div>
      <Card>
        <div className="card-head">
          <h3>Pending invitation</h3>
          <span>1 pending</span>
        </div>
        <DataTable
          headers={["Email", "Role", "Project scope", "Invited by", "Expires"]}
          rows={[
            ["taylor.reed@example.com", "Viewer", "Harbour Bridge", "Alex Morgan", "7 Jul 2026"],
          ]}
        />
      </Card>
    </>
  );
}

function ImpactReports({ toast }: { toast: (s: string) => void }) {
  const [reportTitle, setReportTitle] = useState("June ecosystem summary");
  return (
    <>
      <PageHeading
        title="Impact & report builder"
        subtitle="Turn operational data into a transparent, source-attributed summary."
        action="Save report"
        actionIcon={`${A}beced.png`}
        onAction={() => toast("Report saved")}
      />
      <Tabs tabs={["Build report", "Saved reports · 4", "Metric definitions"]} />
      <div className="report-layout">
        <div className="side-stack">
          <Card className="report-config">
            <div className="card-head">
              <h3>Report configuration</h3>
              <span>Draft</span>
            </div>
            <label>
              Report title
              <input value={reportTitle} onChange={(event) => setReportTitle(event.target.value)} />
            </label>
            <label>
              Project scope
              <select>
                <option>All 12 projects</option>
                <option>Riverside Tower</option>
              </select>
            </label>
            <label>
              Reporting period
              <select>
                <option>1–30 Jun 2026</option>
                <option>1–31 May 2026</option>
              </select>
            </label>
            <fieldset>
              <legend>Included sections</legend>
              {[
                "MixPilot impact estimates",
                "SmartMix production quality",
                "SmartRock monitoring",
                "Definitions & limitations",
              ].map((item) => (
                <label className="check-row" key={item}>
                  <input type="checkbox" defaultChecked />
                  {item}
                </label>
              ))}
            </fieldset>
            <label>
              Output format
              <select>
                <option>PDF · landscape</option>
                <option>CSV data export</option>
              </select>
            </label>
            <Button onClick={() => toast("Report preview generated")}>Generate preview</Button>
          </Card>
          <WarningNotice title="1 source is stale">
            SR-218 is delayed. Its last reading and timestamp will be disclosed; no live strength
            value is inferred.
          </WarningNotice>
        </div>
        <div className="report-preview-shell">
          <div className="report-preview-head">
            <b>REPORT PREVIEW</b>
            <span>Page 1 of 2 · 100%</span>
          </div>
          <article className="report-preview">
            <div className="report-brand">
              <img src={`${A}d4b54.png`} alt="Giatec" />
              <span>NORTHSTAR CONCRETE</span>
            </div>
            <h2>{reportTitle || "Untitled report"}</h2>
            <p>1–30 June 2026 · All 12 projects · Prepared 30 June 2026</p>
            <hr />
            <div className="report-totals">
              <div>
                <small>MIXPILOT / ESTIMATED CO₂e AVOIDED</small>
                <strong>502 t</strong>
              </div>
              <div>
                <small>MIXPILOT / MATERIAL SAVINGS</small>
                <strong>$4,300</strong>
                <span>CAD · modeled, not audited</span>
              </div>
            </div>
            <p className="tiny">
              Estimated t CO₂e avoided by project · zero baseline · scale 0–250
            </p>
            {[
              ["Riverside", 65, "125"],
              ["Harbour", 50, "96"],
              ["Westline", 38, "72"],
              ["Other 9", 90, "209"],
            ].map((row) => (
              <div className="report-bar" key={row[0]}>
                <span>{row[0]}</span>
                <i>
                  <b style={{ width: `${row[1]}%` }} />
                </i>
                <em>{row[2]}</em>
              </div>
            ))}
            <DataTable
              headers={["Operational context", "June snapshot"]}
              rows={[
                ["SmartMix production / consistency", "12,600 m³ / 94 of 100"],
                ["SmartRock sensors / tests", "43 sensors / 56 tests"],
                ["Estimated milestone time gain", "1.8 days · mean across 12 projects"],
              ]}
            />
            <p className="report-note">
              Scope note: MixPilot and SmartMix cover the same production. Impacts are not summed
              across products. One SmartRock sensor is delayed.
            </p>
          </article>
        </div>
      </div>
      <Card>
        <div className="card-head">
          <h3>Metric definitions & reporting rules</h3>
          <span>Included on report page 2</span>
        </div>
        <DataTable
          headers={["Metric", "Definition / calculation", "Source & limitation"]}
          rows={[
            [
              "CO₂e avoided (t)",
              "Σ volume × (baseline − actual kg CO₂e/m³) ÷ 1,000",
              "MixPilot · mix-specific baseline required",
            ],
            [
              "Material savings (CAD)",
              "Σ volume × (baseline − actual material cost/m³)",
              "MixPilot · excludes labour and schedule effects",
            ],
            [
              "Consistency score",
              "Volume-weighted configured score, bounded 0–100",
              "SmartMix · not a strength certification",
            ],
            [
              "Time gain (days)",
              "Mean planned threshold date − projected threshold date",
              "SmartRock · engineer review",
            ],
          ]}
        />
      </Card>
    </>
  );
}

function PortalApp() {
  const [page, setPage] = useState<Page>(pageFromLocation);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [pourId, setPourId] = useState<string>(pourFromLocation);
  const [notice, setNotice] = useState("");
  const toast = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    const handleRouteChange = () => {
      setPage(pageFromLocation());
      setPourId(pourFromLocation());
      setMenuOpen(false);
      document.querySelector('.giatec-portal .workspace')?.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
  const results = useMemo(
    () => nav.filter((n) => n.label.toLowerCase().includes(query.toLowerCase())).slice(0, 6),
    [query],
  );
  const pourResults = useMemo(() => findPours(query), [query]);
  const go = (p: Page, pour?: string) => {
    setPage(p);
    if (pour) setPourId(pour);
    setMenuOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.set("page", p);
    if (pour) url.searchParams.set("pour", pour);
    else if (p !== "pour") url.searchParams.delete("pour");
    url.hash = "";
    window.history.pushState({ page: p }, "", url);
    document.querySelector('.giatec-portal .workspace')?.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const groups = ["WORKSPACE", "PRODUCT ANALYTICS", "ADMINISTRATION"];
  return (
    <div className="app-shell" data-current-page={page}>
      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      {menuOpen && (
        <button
          className="scrim"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
        />
      )}
      <aside className={menuOpen ? "open" : ""}>
        <div className="brand">
          <img src={`${A}d4b54.png`} alt="Giatec" />
          <span>ECOSYSTEM PORTAL</span>
        </div>
        <button className="workspace-switch" onClick={() => go("welcome")}>
          <b>Northstar Concrete</b>
          <span>Demo workspace⌄</span>
        </button>
        {groups.map((group) => (
          <nav key={group}>
            <label>{group}</label>
            {nav
              .filter((x) => x.group === group)
              .map((item) => (
                <a
                  href={`?page=${item.page}`}
                  key={item.label}
                  className={
                    titles[page] === item.label || (page === "pour" && item.page === "overview")
                      ? "active"
                      : ""
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    go(item.page);
                  }}
                >
                  {item.productIcon ? (
                    <ProductAnalyticsIcon product={item.productIcon} />
                  ) : (
                    <img src={item.icon} alt="" />
                  )}
                  <span>{item.label}</span>
                  {item.count && <em>{item.count}</em>}
                </a>
              ))}
          </nav>
        ))}
        <div className="support">
          <b>Built for better concrete.</b>
          <span>One view of your connected operations.</span>
          <a href="https://www.giatecscientific.com/" target="_blank" rel="noreferrer">
            Help & documentation ↗
          </a>
        </div>
      </aside>
      <div className="workspace">
        <header>
          <div className="breadcrumb">
            Workspace <span>/</span>{" "}
            {page === "pour" ? (
              <>
                Overview <span>/</span> <b>Pour {pourId}</b>
              </>
            ) : (
              <b>{titles[page]}</b>
            )}
          </div>
          <div className="account-tools">
            <button className="search" onClick={() => setSearchOpen(true)}>
              <img src={icons.search} alt="" /> Search ticket or pour ID… <kbd>⌘ K</kbd>
            </button>
            <button className="icon-button" onClick={() => toast("No new messages")}>
              <img src={icons.mail} alt="Messages" />
            </button>
            <button className="icon-button" onClick={() => go("alerts")}>
              <img src={icons.bell} alt="Alerts" />
            </button>
            <button className="account" onClick={() => toast("Account menu opened")}>
              <span>
                <img src={icons.account} alt="" />
              </span>
              <b>
                Alex Morgan<small>Workspace admin</small>
              </b>
            </button>
          </div>
        </header>
        <main>
          {page === "welcome" && <Welcome go={go} />}
          {page === "overview" && <Overview go={go} openPour={(id) => go("pour", id)} toast={toast} />}
          {page === "pour" && (
            <PourTimeline
              pourId={pourId}
              openPour={(id) => go("pour", id)}
              go={go}
              toast={toast}
            />
          )}
          {page === "products" && <Products go={go} />}
          {page === "connect" && <Connect go={go} toast={toast} />}
          {page === "projects" && <Project go={go} toast={toast} />}
          {page === "alerts" && <Alerts go={go} toast={toast} />}
          {page === "mixpilot" && <Analytics kind="MixPilot" toast={toast} />}
          {page === "smartmix" && <Analytics kind="SmartMix" toast={toast} />}
          {page === "smartrock" && <Analytics kind="SmartRock" toast={toast} />}
          {page === "impact" && <ImpactReports toast={toast} />}
          {page === "team" && <TeamAccess toast={toast} />}
          {page === "integrations" && <Integrations go={go} toast={toast} />}
          <footer>
            <span>Demo data · Hackathon concept</span>
            <span>Snapshot · 30 Jun 2026, 16:42 UTC</span>
          </footer>
        </main>
      </div>
      {searchOpen && (
        <div className="modal-layer" onMouseDown={() => setSearchOpen(false)}>
          <div className="search-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div>
              <img src={icons.search} alt="" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ticket or pour ID…"
              />
              <kbd>ESC</kbd>
            </div>
            {pourResults.length > 0 && <div className="search-group">POURS AND TICKETS</div>}
            {pourResults.map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  go("pour", r.id);
                  setSearchOpen(false);
                  setQuery("");
                }}
              >
                <span className="pour-mark">⏱</span>
                <span>
                  {r.id} · {r.project}
                  <small>
                    {r.idKind} · Ticket {r.ticket} · {r.flag.badge}
                  </small>
                </span>
                <b>↵</b>
              </button>
            ))}
            {results.length > 0 && <div className="search-group">PAGES</div>}
            {results.map((r) => (
              <button
                key={r.label}
                onClick={() => {
                  go(r.page);
                  setSearchOpen(false);
                  setQuery("");
                }}
              >
                {r.productIcon ? (
                  <ProductAnalyticsIcon product={r.productIcon} />
                ) : (
                  <img src={r.icon} alt="" />
                )}
                <span>
                  {r.label}
                  <small>{r.group}</small>
                </span>
                <b>↵</b>
              </button>
            ))}
          </div>
        </div>
      )}
      {notice && <div className="toast">✓ {notice}</div>}
    </div>
  );
}

export default function Prototype() {
  return (
    <div className="giatec-portal">
      <PortalApp />
    </div>
  );
}
