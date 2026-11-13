import React from "react";
import {
  POURS,
  PRODUCT_COLOR,
  PRODUCT_PAGE,
  VERDICT_RULES,
  type Pour,
  type ProductKind,
  type ProductPage,
  type Tone,
} from "./pours";

export function SourceChip({ product }: { product: ProductKind }) {
  return (
    <span className="source-chip">
      <i style={{ background: PRODUCT_COLOR[product] }} />
      {product}
    </span>
  );
}

function Badge({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return <span className={`status ${tone}`}>{children}</span>;
}

function StrengthChart({ chart }: { chart: Pour["chart"] }) {
  const W = 640;
  const H = 240;
  const L = 44;
  const R = 20;
  const T = 18;
  const B = 36;
  const x = (h: number) => L + (h / chart.axisMax) * (W - L - R);
  const y = (m: number) => T + (1 - m / chart.max) * (H - T - B);
  const path = (pts: [number, number][]) =>
    pts.map(([h, m], i) => `${i ? "L" : "M"}${x(h).toFixed(1)},${y(m).toFixed(1)}`).join(" ");
  const yTicks = Array.from({ length: Math.floor(chart.max / 10) + 1 }, (_, i) => i * 10);
  return (
    <svg
      className="strength-chart"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Strength against forecast for ${chart.sensor}, target ${chart.target} MPa`}
    >
      {yTicks.map((t) => (
        <g key={t}>
          <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#dfe6e1" />
          <text x={L - 8} y={y(t) + 3} textAnchor="end" fontSize="10" fill="#78857e">
            {t}
          </text>
        </g>
      ))}
      <text x={L - 8} y={T - 6} textAnchor="end" fontSize="10" fill="#78857e">
        MPa
      </text>
      {chart.ticks.map((t) => (
        <text key={t} x={x(t)} y={H - 12} textAnchor="middle" fontSize="10" fill="#78857e">
          {t} h
        </text>
      ))}
      <line
        x1={L}
        x2={W - R}
        y1={y(chart.target)}
        y2={y(chart.target)}
        stroke="#c35b20"
        strokeDasharray="2 4"
      />
      <text x={L + 6} y={y(chart.target) - 6} textAnchor="start" fontSize="10" fill="#c35b20">
        Target {chart.target} MPa
      </text>
      <path
        d={path(chart.forecast)}
        fill="none"
        stroke={PRODUCT_COLOR.SmartMix}
        strokeWidth="2"
        strokeDasharray="5 4"
        opacity="0.7"
      />
      <path d={path(chart.achieved)} fill="none" stroke={PRODUCT_COLOR.SmartRock} strokeWidth="2.5" />
      {chart.achieved.map(([h, m]) => (
        <circle
          key={`${h}-${m}`}
          cx={x(h)}
          cy={y(m)}
          r="3"
          fill="white"
          stroke={PRODUCT_COLOR.SmartRock}
          strokeWidth="2"
        />
      ))}
      {chart.gap && (
        <g>
          <line
            x1={x(chart.gap.from)}
            x2={x(chart.gap.to)}
            y1={y(chart.target) + 16}
            y2={y(chart.target) + 16}
            stroke="#c35b20"
            strokeWidth="1.5"
          />
          <line
            x1={x(chart.gap.from)}
            x2={x(chart.gap.from)}
            y1={y(chart.target) + 10}
            y2={y(chart.target) + 22}
            stroke="#c35b20"
            strokeWidth="1.5"
          />
          <line
            x1={x(chart.gap.to)}
            x2={x(chart.gap.to)}
            y1={y(chart.target) + 10}
            y2={y(chart.target) + 22}
            stroke="#c35b20"
            strokeWidth="1.5"
          />
          <text
            x={(x(chart.gap.from) + x(chart.gap.to)) / 2}
            y={y(chart.target) + 36}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#c35b20"
          >
            {chart.gap.label}
          </text>
        </g>
      )}
    </svg>
  );
}

export default function PourTimeline({
  pourId,
  openPour,
  go,
  toast,
}: {
  pourId: string;
  openPour: (id: string) => void;
  go: (page: ProductPage | "overview") => void;
  toast: (message: string) => void;
}) {
  const pour = POURS.find((p) => p.id === pourId) ?? POURS[0];
  const openRecord = (product: ProductKind, record: string) => {
    toast(`Opening ${record} in ${product}`);
    go(PRODUCT_PAGE[product]);
  };

  return (
    <>
      <div className="pour-nav">
        <button className="link" onClick={() => go("overview")}>
          ← Ecosystem overview
        </button>
        <div className="pour-switch" role="tablist" aria-label="Switch pour">
          {POURS.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={p.id === pour.id}
              className={p.id === pour.id ? "active" : ""}
              onClick={() => openPour(p.id)}
            >
              {p.id}
            </button>
          ))}
        </div>
      </div>

      <div className="page-heading">
        <div>
          <div className="heading-title">
            <h1>{`${pour.idKind} ${pour.id}`}</h1>
          </div>
          <p>
            {pour.project} · {pour.area} · Ticket {pour.ticket} · Mix {pour.mix} · Placed {pour.placed}
          </p>
        </div>
        <button className="btn secondary" onClick={() => toast("Pour timeline exported")}>
          Export timeline
        </button>
      </div>

      <section className={`card verdict ${pour.verdict.tone}`} aria-label="Verdict">
        <div className="verdict-main">
          <div className="eyebrow">VERDICT</div>
          <div className="verdict-head">
            <Badge tone={pour.verdict.tone}>{pour.verdict.label}</Badge>
            <h2>{pour.verdict.headline}</h2>
          </div>
          <p>{pour.verdict.cause}</p>
          <div className="verdict-sources">
            <span>Evidence from</span>
            {pour.flag.sources.map((s) => (
              <SourceChip key={s} product={s} />
            ))}
          </div>
        </div>
        <p className="verdict-rules">
          <b>How this verdict is set.</b> {VERDICT_RULES}
        </p>
      </section>

      <div className="evidence-grid">
        {pour.evidence.map((e) => (
          <section className="card evidence-card" key={e.stage}>
            <div className="card-head">
              <div className="eyebrow">{e.stage.toUpperCase()}</div>
              <SourceChip product={e.product} />
            </div>
            <h3>{e.headline}</h3>
            {e.lines.map((l) => (
              <p className="muted tiny" key={l}>
                {l}
              </p>
            ))}
            <div className="evidence-foot">
              <Badge tone={e.tone}>{e.status}</Badge>
              <button className="link" onClick={() => openRecord(e.product, e.record)}>
                Open {e.record} in {e.product} →
              </button>
            </div>
          </section>
        ))}
      </div>

      <div className="content-grid">
        <section className="card">
          <div className="card-head">
            <h3>Strength against forecast</h3>
            <span>
              {pour.chart.sensor} · hours since pour complete
            </span>
          </div>
          <StrengthChart chart={pour.chart} />
          <div className="chart-legend">
            <span>
              <i className="legend-line dashed" style={{ borderColor: PRODUCT_COLOR.SmartMix }} />
              Forecast from mix design <SourceChip product="SmartMix" />
            </span>
            <span>
              <i className="legend-line" style={{ borderColor: PRODUCT_COLOR.SmartRock }} />
              Measured in the slab <SourceChip product="SmartRock" />
            </span>
          </div>
        </section>
        <section className="card">
          <div className="card-head">
            <h3>Where sources disagree</h3>
            <span>{pour.conflicts.length === 0 ? "None found" : `${pour.conflicts.length} found`}</span>
          </div>
          {pour.conflicts.length === 0 ? (
            <p className="muted">
              Design, delivery and strength records agree across every pour in this view.
            </p>
          ) : (
            <div className="conflict-list">
              {pour.conflicts.map((c) => (
                <div className="conflict" key={c.title}>
                  <b>{c.title}</b>
                  <p>{c.detail}</p>
                  <div className="conflict-sources">
                    {c.sources.map((s) => (
                      <SourceChip key={s} product={s} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {pour.id === "P-04" && (
            <div className="warning mini">
              <div className="warning-copy">
                <b>Riverside gateway offline.</b>
                <span>SmartRock readings may be stale for 2 pours. Check the reading age before releasing forms.</span>
              </div>
            </div>
          )}
        </section>
      </div>

      <section className="card">
        <div className="card-head">
          <h3>Order of events</h3>
          <span>One time axis across three products</span>
        </div>
        <div className="timeline">
          {pour.events.map((ev) => (
            <div className={`timeline-row${ev.warn ? " warn" : ""}`} key={`${ev.when}-${ev.title}`}>
              <div className="timeline-when">
                <b>{ev.when}</b>
                <small>{ev.elapsed}</small>
              </div>
              <span className="timeline-dot" style={{ background: PRODUCT_COLOR[ev.product] }} />
              <div className="timeline-body">
                <div className="timeline-title">
                  <SourceChip product={ev.product} />
                  <b>{ev.title}</b>
                </div>
                <p>{ev.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
