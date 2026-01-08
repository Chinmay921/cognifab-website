export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/methodology", label: "Methodology" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT_INFO = {
  email: "chinmaydongarkar@gmail.com",
  phone: "+91 8551099099",
  linkedin: "https://www.linkedin.com/in/chinmay-do/",
};

export const COMPANY_INFO = {
  name: "Cognifab",
  tagline: "Automated Corporate GHG Accounting Engine",
  description: "Transform operational and spend data into GHG Protocol & ISO 14064-1 aligned emissions reports.",
};

export const SCOPE_CATEGORIES = {
  scope1: {
    title: "Scope 1: Direct Emissions",
    description: "Emissions from sources owned or controlled by the organization",
    items: [
      "Stationary combustion (boilers, furnaces, generators)",
      "Mobile combustion (company vehicles, forklifts)",
      "Fugitive emissions (refrigerants, air conditioning)",
    ],
  },
  scope2: {
    title: "Scope 2: Indirect Energy Emissions",
    description: "Emissions from purchased electricity, steam, heating, and cooling",
    items: [
      "Purchased electricity (location-based and market-based)",
      "District heating and cooling",
      "Steam consumption",
    ],
  },
  scope3: {
    title: "Scope 3: Selected Categories",
    description: "Indirect emissions in the value chain",
    items: [
      "Category 1: Purchased goods and services",
      "Category 2: Capital goods",
      "Category 3: Fuel and energy-related activities",
      "Category 4: Upstream transportation and distribution",
      "Category 5: Waste generated in operations",
      "Category 6: Business travel",
      "Category 7: Employee commuting",
    ],
    excluded: [
      "Category 8-15: Downstream categories (not currently covered)",
      "Downstream transportation, product use, end-of-life treatment",
    ],
  },
};

export const FEATURES = [
  {
    title: "Full Scope Coverage",
    description: "Comprehensive Scope 1, 2, and selected Scope 3 emissions tracking aligned with GHG Protocol and ISO 14064-1.",
    icon: "layers",
  },
  {
    title: "Standards Aligned",
    description: "Built-in mapping to GHG Protocol Corporate Standard and ISO 14064-1:2018 requirements.",
    icon: "badge-check",
  },
  {
    title: "Automated FX Conversion",
    description: "Monthly average exchange rates by currency for accurate financial data conversion.",
    icon: "coins",
  },
  {
    title: "Audit Trail & Governance",
    description: "Protected formulas, version control, and full traceability for external assurance readiness.",
    icon: "shield-check",
  },
  {
    title: "Role-Based Access",
    description: "Controlled permissions for data entry, review, and approval across your organization.",
    icon: "users",
  },
  {
    title: "Executive Dashboards",
    description: "Clear visualizations of emissions by scope, entity, and time period for leadership reporting.",
    icon: "chart-bar",
  },
];

export const USE_CASES = [
  {
    title: "ESG & CSRD Reporting",
    pain: "Manual data collection from multiple departments creates inconsistent, error-prone emissions reports that fail audit scrutiny.",
    solution: "Centralized data ingestion with standardized calculations produces repeatable, auditable emissions inventories ready for external reporting.",
    outcome: "Complete ESG disclosures with confidence in data quality and methodology.",
  },
  {
    title: "Internal Carbon Management",
    pain: "Finance and operations teams lack visibility into emissions drivers, making it impossible to track reduction initiatives.",
    solution: "Multi-year tracking and entity-level breakdowns show exactly where emissions come from and how they change over time.",
    outcome: "Data-driven decisions on emission reduction priorities and progress monitoring.",
  },
  {
    title: "Assurance Preparation",
    pain: "Auditors reject emissions data due to weak documentation, unclear boundaries, and unprotected calculations.",
    solution: "Built-in governance controls, protected formulas, and comprehensive audit trails meet limited and reasonable assurance standards.",
    outcome: "Smooth assurance engagements with fewer data requests and faster verification.",
  },
  {
    title: "Multi-Entity Consolidation",
    pain: "Parent companies struggle to consolidate emissions across subsidiaries with different systems and methodologies.",
    solution: "Standardized templates and centralized calculations ensure consistency across all entities within the organizational boundary.",
    outcome: "Clean consolidated inventory for group-level reporting and benchmarking.",
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    description: "For single entities beginning their carbon accounting journey",
    features: [
      "Single legal entity",
      "1 reporting year",
      "Scope 1 & 2 coverage",
      "Selected Scope 3 categories",
      "Standard emission factors library",
      "Email support",
    ],
    cta: "Contact for Pricing",
  },
  {
    name: "Growth",
    description: "For organizations managing multiple entities and multi-year tracking",
    features: [
      "Up to 5 legal entities",
      "Multi-year tracking",
      "Full Scope 1, 2, & selected Scope 3",
      "Extended Scope 3 categories",
      "Custom emission factors",
      "Priority email support",
      "Training included",
    ],
    cta: "Contact for Pricing",
    highlighted: true,
  },
  {
    name: "Assurance-Ready",
    description: "For organizations preparing for external assurance and certification",
    features: [
      "Unlimited entities",
      "Unlimited reporting years",
      "Full scope coverage",
      "Enhanced audit controls",
      "Dedicated account manager",
      "Assurance preparation advisory",
      "Custom integrations",
      "On-demand support",
    ],
    cta: "Contact for Pricing",
  },
];
