export type ProductKind = "MixPilot" | "SmartMix" | "SmartRock";
export type ProductPage = "mixpilot" | "smartmix" | "smartrock";
export type Tone = "green" | "orange" | "gray";

export const PRODUCT_COLOR: Record<ProductKind, string> = {
  SmartMix: "#32863F",
  MixPilot: "#2F6CC4",
  SmartRock: "#7A54B8",
};

export const PRODUCT_PAGE: Record<ProductKind, ProductPage> = {
  SmartMix: "smartmix",
  MixPilot: "mixpilot",
  SmartRock: "smartrock",
};

export type PourEvent = {
  when: string;
  elapsed: string;
  product: ProductKind;
  title: string;
  detail: string;
  warn?: boolean;
};

export type Evidence = {
  stage: "Design" | "Delivered" | "Achieved";
  product: ProductKind;
  headline: string;
  lines: string[];
  status: string;
  tone: Tone;
  record: string;
};

export type Conflict = {
  title: string;
  detail: string;
  sources: ProductKind[];
};

export type Pour = {
  id: string;
  idKind: string;
  ticket: string;
  project: string;
  area: string;
  mix: string;
  placed: string;
  flag: { title: string; badge: string; tone: Tone; message: string; sources: ProductKind[] };
  verdict: { label: string; tone: Tone; headline: string; cause: string };
  evidence: Evidence[];
  chart: {
    sensor: string;
    max: number;
    axisMax: number;
    ticks: number[];
    target: number;
    forecast: [number, number][];
    achieved: [number, number][];
    gap?: { from: number; to: number; label: string };
  };
  conflicts: Conflict[];
  events: PourEvent[];
};

export const POURS: Pour[] = [
  {
    id: "P-04",
    idKind: "Pour ID",
    ticket: "T-48213",
    project: "Riverside Tower",
    area: "Level 03",
    mix: "NS-35",
    placed: "25 Jun 2026",
    flag: {
      title: "Shortfall meets drift",
      badge: "Needs review",
      tone: "orange",
      message:
        "P-04 · Riverside Tower: strength reached 25 MPa 24 h late; 3 loads drifted, water added at 10:42.",
      sources: ["SmartMix", "MixPilot", "SmartRock"],
    },
    verdict: {
      label: "Needs review",
      tone: "orange",
      headline: "Strength reached 25 MPa 24 h late",
      cause:
        "The order of events points to delivery, not the mix design. Three loads arrived below the 100 mm slump target, water was added on site at 10:42 UTC, and strength fell behind the forecast within the first day.",
    },
    evidence: [
      {
        stage: "Design",
        product: "SmartMix",
        headline: "NS-35 · 25 MPa by 72 h",
        lines: ["Design slump 100 mm, water to cement ratio 0.45.", "Batch record SM-101 closed at 06:20 UTC."],
        status: "As designed",
        tone: "green",
        record: "SM-101",
      },
      {
        stage: "Delivered",
        product: "MixPilot",
        headline: "3 of 40 loads drifted",
        lines: [
          "Slump 72 to 78 mm on arrival for MP-1262 to MP-1264.",
          "Water added on site at 10:42 UTC, about 12 L/m³.",
        ],
        status: "Out of spec",
        tone: "orange",
        record: "MP-1241 to MP-1280",
      },
      {
        stage: "Achieved",
        product: "SmartRock",
        headline: "25 MPa at 96 h",
        lines: ["The forecast was 72 h, so the pour is 24 h late.", "Latest SR-218 reading is 27.4 MPa and 47 min old."],
        status: "Late",
        tone: "orange",
        record: "SR-217 · SR-218",
      },
    ],
    chart: {
      sensor: "SR-218",
      max: 35,
      axisMax: 120,
      ticks: [0, 24, 48, 72, 96, 120],
      target: 25,
      forecast: [[0, 0], [24, 10], [48, 19], [72, 25], [96, 28.5], [120, 31]],
      achieved: [[0, 0], [24, 7], [48, 14], [72, 20], [96, 25], [119.2, 27.4]],
      gap: { from: 72, to: 96, label: "24 h late" },
    },
    conflicts: [
      {
        title: "Pour complete time differs by 22 min",
        detail:
          "MixPilot logs the last discharge at 16:21 UTC and SmartRock starts the maturity clock at 16:43 UTC. Strength is timed from SmartRock, so using the MixPilot time would move the 25 MPa mark about 20 min earlier.",
        sources: ["MixPilot", "SmartRock"],
      },
      {
        title: "On-site water is missing from the batch record",
        detail:
          "MixPilot shows about 12 L/m³ added by the driver on three loads. SmartMix batch record SM-101 still shows design water only. Treat the MixPilot figure as what was delivered.",
        sources: ["MixPilot", "SmartMix"],
      },
    ],
    events: [
      {
        when: "25 Jun · 06:20 UTC",
        elapsed: "Batch",
        product: "SmartMix",
        title: "Mix NS-35 released",
        detail: "Design slump 100 mm, water to cement ratio 0.45. Batch record SM-101 closed.",
      },
      {
        when: "25 Jun · 06:50 UTC",
        elapsed: "Plant",
        product: "MixPilot",
        title: "First load leaves the plant",
        detail: "MP-1241 reads 102 mm at departure. 40 loads are planned.",
      },
      {
        when: "25 Jun · 10:12 UTC",
        elapsed: "Delivery",
        product: "MixPilot",
        title: "Slump drift detected",
        detail: "MP-1262 to MP-1264 arrive at 72 to 78 mm against a 100 mm target.",
        warn: true,
      },
      {
        when: "25 Jun · 10:42 UTC",
        elapsed: "30 min later",
        product: "MixPilot",
        title: "Water added on site",
        detail: "About 12 L/m³ added to the three loads. Entered by the driver.",
        warn: true,
      },
      {
        when: "25 Jun · 16:43 UTC",
        elapsed: "Pour complete",
        product: "SmartRock",
        title: "Maturity clock starts",
        detail: "SR-217 and SR-218 are armed on Level 03.",
      },
      {
        when: "26 Jun · 16:43 UTC",
        elapsed: "+24 h",
        product: "SmartRock",
        title: "First sign of lag",
        detail: "SR-218 reads 7 MPa against a 10 MPa forecast.",
        warn: true,
      },
      {
        when: "28 Jun · 16:43 UTC",
        elapsed: "+72 h",
        product: "SmartRock",
        title: "Forecast date missed",
        detail: "20 MPa reached. The 25 MPa target was due at this point.",
        warn: true,
      },
      {
        when: "29 Jun · 16:43 UTC",
        elapsed: "+96 h",
        product: "SmartRock",
        title: "25 MPa reached",
        detail: "24 h after the forecast. Forms can be stripped.",
      },
      {
        when: "30 Jun · 15:55 UTC",
        elapsed: "+119.2 h",
        product: "SmartRock",
        title: "Last reading before the outage",
        detail: "27.4 MPa. Gateway GW-02 went offline, so newer readings are missing.",
        warn: true,
      },
    ],
  },
  {
    id: "NS-30",
    idKind: "Mix ID",
    ticket: "T-47102",
    project: "Westline Residences",
    area: "Level 05 · latest of 4 pours",
    mix: "NS-30",
    placed: "17 Jun 2026",
    flag: {
      title: "Healthy margin",
      badge: "Optimize",
      tone: "green",
      message:
        "NS-30 · Westline Residences: strength above target in 4 of 4 pours; review a lower-cement mix.",
      sources: ["SmartMix", "SmartRock"],
    },
    verdict: {
      label: "Optimize",
      tone: "green",
      headline: "Strength above target in 4 of 4 pours",
      cause:
        "Every pour cleared its 30 MPa target with room to spare and delivery stayed in spec, so the mix may carry more cement than it needs. This is a candidate for a lower-cement trial, not a fault.",
    },
    evidence: [
      {
        stage: "Design",
        product: "SmartMix",
        headline: "NS-30 · 30 MPa by 168 h",
        lines: ["Cement 340 kg/m³, design slump 100 mm.", "Batch record SM-108 closed at 07:10 UTC."],
        status: "As designed",
        tone: "green",
        record: "SM-108",
      },
      {
        stage: "Delivered",
        product: "MixPilot",
        headline: "All 20 loads in spec",
        lines: ["Slump 98 to 104 mm on arrival.", "No water added on site."],
        status: "In spec",
        tone: "green",
        record: "MP-1102 to MP-1121",
      },
      {
        stage: "Achieved",
        product: "SmartRock",
        headline: "34 MPa at 168 h",
        lines: ["4 MPa above the 30 MPa target.", "The margin has held across 4 pours."],
        status: "Above target",
        tone: "green",
        record: "SR-231 · SR-232",
      },
    ],
    chart: {
      sensor: "SR-231",
      max: 40,
      axisMax: 168,
      ticks: [0, 24, 72, 120, 168],
      target: 30,
      forecast: [[0, 0], [24, 10], [72, 20], [120, 26], [168, 30]],
      achieved: [[0, 0], [24, 13], [72, 25], [120, 31], [168, 34]],
    },
    conflicts: [],
    events: [
      {
        when: "17 Jun · 07:10 UTC",
        elapsed: "Batch",
        product: "SmartMix",
        title: "Mix NS-30 released",
        detail: "Design strength 30 MPa at 7 days. Batch record SM-108 closed.",
      },
      {
        when: "17 Jun · 07:45 UTC",
        elapsed: "Plant",
        product: "MixPilot",
        title: "First load leaves the plant",
        detail: "MP-1102 reads 101 mm at departure.",
      },
      {
        when: "17 Jun · 12:20 UTC",
        elapsed: "Delivery",
        product: "MixPilot",
        title: "All loads arrived in spec",
        detail: "Slump 98 to 104 mm across 20 loads. No water added.",
      },
      {
        when: "17 Jun · 15:10 UTC",
        elapsed: "Pour complete",
        product: "SmartRock",
        title: "Maturity clock starts",
        detail: "SR-231 and SR-232 are armed on Level 05.",
      },
      {
        when: "18 Jun · 15:10 UTC",
        elapsed: "+24 h",
        product: "SmartRock",
        title: "Ahead of forecast",
        detail: "13 MPa against a 10 MPa forecast.",
      },
      {
        when: "20 Jun · 15:10 UTC",
        elapsed: "+72 h",
        product: "SmartRock",
        title: "Ahead of forecast",
        detail: "25 MPa against a 20 MPa forecast.",
      },
      {
        when: "24 Jun · 15:10 UTC",
        elapsed: "+168 h",
        product: "SmartRock",
        title: "7 day target cleared",
        detail: "34 MPa against a 30 MPa target. Fourth pour in a row above target.",
      },
    ],
  },
  {
    id: "L-0231",
    idKind: "Load ticket",
    ticket: "L-0231",
    project: "Eastgate Parkade",
    area: "Level 02",
    mix: "EG-25 (not linked)",
    placed: "27 Jun 2026",
    flag: {
      title: "Slow gain",
      badge: "Watch",
      tone: "orange",
      message:
        "L-0231 · Eastgate Parkade: strength behind forecast with no delivery issue; likely cold site conditions.",
      sources: ["MixPilot", "SmartRock"],
    },
    verdict: {
      label: "Watch",
      tone: "orange",
      headline: "Strength is behind forecast, and delivery was fine",
      cause:
        "Slump and temperature were in spec at delivery, so the lag is unlikely to come from the load. Overnight slab temperature fell to 3 °C, which slows strength gain. Keep the forms on until the next reading.",
    },
    evidence: [
      {
        stage: "Design",
        product: "SmartMix",
        headline: "No SmartMix record linked",
        lines: ["The ticket mix label EG-25 does not match a SmartMix record.", "Design strength is unavailable."],
        status: "Not linked",
        tone: "gray",
        record: "Link a mix",
      },
      {
        stage: "Delivered",
        product: "MixPilot",
        headline: "Load L-0231 in spec",
        lines: ["Slump 100 mm, concrete at 21 °C.", "No water added on site."],
        status: "In spec",
        tone: "green",
        record: "L-0231",
      },
      {
        stage: "Achieved",
        product: "SmartRock",
        headline: "14.5 MPa at 72 h",
        lines: ["The forecast was 20 MPa.", "Slab temperature fell to 3 °C overnight."],
        status: "Behind",
        tone: "orange",
        record: "SR-241",
      },
    ],
    chart: {
      sensor: "SR-241",
      max: 25,
      axisMax: 72,
      ticks: [0, 24, 48, 72],
      target: 20,
      forecast: [[0, 0], [24, 8], [48, 15], [72, 20]],
      achieved: [[0, 0], [24, 5], [48, 10], [72, 14.5]],
    },
    conflicts: [
      {
        title: "Mix label is not matched",
        detail:
          "The MixPilot ticket names EG-25 and no SmartMix record uses that label, so the forecast comes from the project default. Link the mix to get a design curve.",
        sources: ["MixPilot", "SmartMix"],
      },
    ],
    events: [
      {
        when: "27 Jun · 13:10 UTC",
        elapsed: "Delivery",
        product: "MixPilot",
        title: "Load L-0231 arrives",
        detail: "Slump 100 mm, concrete at 21 °C. In spec.",
      },
      {
        when: "27 Jun · 14:20 UTC",
        elapsed: "Pour complete",
        product: "SmartRock",
        title: "Maturity clock starts",
        detail: "SR-241 is armed on Level 02. Ambient temperature 6 °C.",
      },
      {
        when: "28 Jun · 02:00 UTC",
        elapsed: "+11 h 40 min",
        product: "SmartRock",
        title: "Slab cools overnight",
        detail: "Slab temperature falls to 3 °C and strength gain slows.",
        warn: true,
      },
      {
        when: "28 Jun · 14:20 UTC",
        elapsed: "+24 h",
        product: "SmartRock",
        title: "Behind forecast",
        detail: "5 MPa against an 8 MPa forecast.",
        warn: true,
      },
      {
        when: "29 Jun · 14:20 UTC",
        elapsed: "+48 h",
        product: "SmartRock",
        title: "Gap widens",
        detail: "10 MPa against a 15 MPa forecast.",
        warn: true,
      },
      {
        when: "30 Jun · 14:20 UTC",
        elapsed: "+72 h",
        product: "SmartRock",
        title: "Still behind",
        detail: "14.5 MPa against a 20 MPa forecast. No delivery cause found.",
        warn: true,
      },
    ],
  },
];

export const VERDICT_RULES =
  "Illustrative rules for this demo: Needs review when a pour reaches its strength target more than 12 h late or when 2 or more loads drift. Watch when strength is behind forecast with no delivery issue. Optimize when strength is above target in every recent pour.";

export function findPours(query: string): Pour[] {
  const q = query.trim().toLowerCase();
  if (!q) return POURS;
  return POURS.filter((p) =>
    `${p.id} ${p.ticket} ${p.project} ${p.mix} ${p.area}`.toLowerCase().includes(q),
  );
}
