import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Bot,
  Boxes,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Gauge,
  Globe,
  Handshake,
  Kanban,
  Layers,
  Network,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  note?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Plus91 AI Private Limited",
    role: "Senior QA Automation Engineer",
    period: "Apr 2026 – Present",
    location: "Hyderabad, India",
    note: "Transferred from Digitral following organizational restructuring.",
    bullets: [
      "Lead design and evaluation of multi-agent AI systems on CrewAI powering Crawler (no-code mobile test automation) and Copilot (intelligent test assistant) across native Android, iOS, and Flutter apps.",
      "Built specialized agents — Test Case Generation, Popup Handler, PII Data Masking, Data Generation, QR / Barcode Validation, and XPath Suggestion — each validated against curated screenshot and XML hierarchy datasets sourced from real-world consumer apps.",
      "Deployed a CrewAI-style external agent into Qapilot integrated with Robotic Process Automation (RPA) runs, validating AI-generated XPath locators against live element trees and removing manual locator-lookup overhead from test authoring.",
      "Engineered a suite of purpose-built internal test apps — Flutter cross-OS harness covering Personally Identifiable Information (PII) logs, sensitive data, WebView, and Flutter tree-ID detection; Optical Character Recognition (OCR) redirection app; POS-equivalent scanner; mock banking with random data generator; slider-input flow app; on-screen keyboard simulator; and a multilanguage app pack — unlocking edge-case scenarios no off-the-shelf app could exercise.",
      "Delivered end-to-end Proof of Concept (POC) engagements for clients across fintech, healthcare, telecom, media, e-commerce, and Software-as-a-Service (SaaS) — including WIO, Paytm, Vodafone Qatar, NBC News / Telemundo, Baylor Scott & White, Keka, Growsari, Kasir Pintar, Shory Insurance, and Capital Now.",
      "Validated the Crawler engine against real-world apps such as Zomato, Booking.com, Agoda, Cleartrip, Pinterest, Medplus, Rapido, TradingView, AbCoffee, Nagad, and ÖBB to benchmark auto-generated sanity cases against actual end-user journeys.",
      "Owned multi-channel client support across Intercom, Slack, and WhatsApp; ran hands-on WIO workshops for the client team; delivered security demos to Brisk InfoSec; and benchmarked emerging platforms (Autify Nexus, DevAssure.IO, Replit Agent, Sofy.ai, Drizz.dev, Bubble.io, Emergent) to keep tooling decisions current.",
    ],
  },
  {
    company: "Digitral Private Limited",
    role: "QA Automation Engineer → Senior Test Engineer",
    period: "Jul 2022 – Mar 2026",
    location: "Hyderabad, India",
    bullets: [
      "Owned end-to-end quality for the in-house PAT Tool and the Appium-based Record & Playback product automating native and Flutter mobile apps.",
      "Architected the Crawler engine that ingests an APK, identifies the home screen, performs breadth-first and depth-first traversal, applies screen bucketing and modal detection, and auto-generates executable sanity test cases.",
      "Curated 1,000+ labeled datasets (screenshots + XML hierarchies) across consumer apps to train, validate, and regression-test AI agents.",
      "Led testing of IM3 Indonesia Super App (native + Flutter) across recharge, balance transfer, OTT, gaming, and 6 payment-gateway integrations; signed off multiple production releases with zero P1 escapes.",
      "Standardized regression frameworks across mobile, backend, and API layers using Apache JMeter, Postman, MySQL, and MongoDB.",
    ],
  },
  {
    company: "Cisco Systems (India) Pvt. Ltd.",
    role: "Software Development Test Engineer",
    period: "Sep 2021 – Jun 2022",
    location: "Hyderabad, India",
    note: "Employee transfer following Cisco's acquisition of IMImobile.",
    bullets: [
      "Owned functional, API, and database testing for Cisco Webex Connect (CPaaS) across 10+ channels including SMS, Voice, RCS, Email, Push, In-App Messaging, Apple Business Chat, WhatsApp, and Facebook Messenger.",
      "Delivered end-to-end testing for the Mercedes-Benz India WhatsApp e-Dealer integration rollout across PAN India, validating Oracle Siebel DMS workflows.",
      "Executed regression suites and authored hotfix test plans within a 25-member Agile/Scrum team, accelerating production deployments via Jenkins.",
      "Performed backend log analysis on Linux using Putty, WinSCP, and AWS CloudWatch to triage defects and reduce mean time to diagnosis.",
    ],
  },
  {
    company: "IMImobile Pvt. Ltd.",
    role: "Consultant → Software Quality Assurance Engineer",
    period: "Sep 2019 – Aug 2021",
    location: "Hyderabad, India",
    note: "Joined as Consultant; converted to Full-Time in April 2021.",
    bullets: [
      "Began as Consultant on IMI Connect (CPaaS) and converted to Full-Time after consistently exceeding quality SLAs across functional, API, regression, and UAT cycles.",
      "Owned end-to-end testing for the Qwikcilver Woohoo E-Giftcards REST API integration for partner e-commerce websites and mobile apps using Postman and MSSQL.",
      "Delivered Saint Gobain Android + WhatsApp dealer-loyalty platform with mobile testing on Android/iOS and IVR contest validation.",
      "Travelled onsite to Indonesia for IM3 Super App UAT and to Thailand for DTAC RBT Billing Diameter UAT and MOP execution.",
    ],
  },
];

export type SkillItem = string | { name: string; href: string };

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: SkillItem[];
};

const search = (q: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(q)}`;

export const skills: SkillGroup[] = [

  {
    title: "Clients Worked with",
    icon: Handshake,
    items: [
      { name: "IM3 (Indosat)", href: "https://www.im3.id" },
      { name: "Mercedes-Benz", href: "https://www.mercedes-benz.com" },
      { name: "Qwikcilver", href: "https://www.qwikcilver.com" },
      { name: "Saint Gobain", href: "https://www.saint-gobain.com" },
      { name: "DTAC", href: "https://www.dtac.co.th" },
      { name: "WIO", href: "https://wio.io" },
      { name: "Growsari", href: "https://growsari.com" },
      { name: "Paytm", href: "https://paytm.com" },
      { name: "Vodafone Qatar", href: "https://www.vodafone.qa" },
      { name: "Capital Now", href: search("Capital Now fintech") },
      { name: "NBC News / Sports / Telemundo", href: "https://www.nbcnews.com" },
      { name: "Kasir Pintar", href: "https://www.kasirpintar.co.id" },
      { name: "Shory Insurance", href: "https://shory.com" },
      { name: "Keka", href: "https://www.keka.com" },
      { name: "Baylor Scott & White", href: "https://www.bswhealth.com" },
      { name: "Penyo AI", href: search("Penyo AI") },
      { name: "Zeesta", href: search("Zeesta") },
      { name: "Reach Mobiles", href: search("Reach Mobiles") },
      { name: "QWIPO", href: "https://www.qwipo.com" },
      { name: "Pranathi SS", href: search("Pranathi Software Services") },
    ],
  },
  {
    title: "AI Testing",
    icon: Bot,
    items: [
      "CrewAI",
      "QAPilot",
      "AI Copilot",
      "AI Healing",
      "OCR Validation",
      "Visual Testing",
      "QR / Barcode Validation",
      "LLM-based Automation",
      "Prompt Engineering",
      "Replit AI",
      "Autify Nexus",
    ],
  },
  {
    title: "R&D / Benchmarking",
    icon: Sparkles,
    items: [
      { name: "Autify Nexus", href: "https://autify.com" },
      { name: "DevAssure.IO", href: "https://devassure.io" },
      { name: "Replit Agent", href: "https://replit.com" },
      { name: "Sofy.ai", href: "https://sofy.ai" },
      { name: "Drizz.dev", href: "https://drizz.dev" },
      { name: "Bubble.io", href: "https://bubble.io" },
      { name: "Emergent", href: search("Emergent AI app builder") },
      { name: "Tosca", href: "https://www.tricentis.com/products/automate-continuous-testing-tosca" },
      { name: "apptest.ai", href: "https://apptest.ai" },
      { name: "whoopi.ai", href: search("whoopi.ai") },
      { name: "Lovable", href: "https://lovable.dev" },
      { name: "Testim", href: "https://www.testim.io" },
      { name: "Katalon", href: "https://katalon.com" },
      { name: "Testsigma", href: "https://testsigma.com" },
      { name: "Appium Inspector", href: "https://github.com/appium/appium-inspector" },
      { name: "mastero.ai", href: search("mastero.ai mobile testing") },
      { name: "Google AI Studio", href: "https://aistudio.google.com" },
      { name: "Replit", href: "https://replit.com" },
      { name: "rocket.new", href: "https://rocket.new" },
    ],
  },
  {
    title: "Mobile App Engineering",
    icon: Smartphone,
    items: [
      "Flutter Cross-OS Apps",
      "Android Studio",
      "Xcode",
      "OCR (Tesseract)",
      "WebView Testing",
      "Mock & Simulator Apps",
    ],
  },
  {
    title: "Automation",
    icon: Workflow,
    items: ["Playwright", "Appium", "Flutter automation (Cross OS)"],
  },
  
  {
    title: "API",
    icon: ServerCog,
    items: ["Postman", "REST Assured", "Swagger"],
  },
  {
    title: "Performance",
    icon: Gauge,
    items: ["JMeter"],
  },
 
  {
    title: "CI / CD",
    icon: GitBranch,
    items: ["Jenkins", "GitHub"],
  },
  {
    title: "Cloud Device Farms",
    icon: Cloud,
    items: ["BrowserStack", "LambdaTest"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB"],
  },
  {
    title: "Version Control",
    icon: Boxes,
    items: ["Git", "GitHub"],
  },
  
];

export type Project = {
  title: string;
  summary: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Test Automation Framework",
    summary: "Agentic test orchestration for mobile and web at scale.",
    description:
      "Multi-agent framework built on CrewAI that plans, executes, and self-heals test suites across mobile (Android, iOS, Flutter) and web. Coordinates specialized agents for test generation, popup handling, data generation, PII masking, and locator stability.",
    tech: ["CrewAI", "Appium", "Playwright", "LLM"],
    icon: Bot,
  },
  {
    title: "Cross-Platform Mobile Automation Framework",
    summary: "One codebase. Native, Flutter, and React Native.",
    description:
      "Appium-based framework with reusable page objects, parallel device execution on BrowserStack, screenshot-diff visual checks, and CI integration via Jenkins and GitHub Actions.",
    tech: ["Appium", "BrowserStack", "Jenkins"],
    icon: Smartphone,
  },
  {
    title: "Playwright Enterprise Framework",
    summary: "TypeScript-first web automation with rich reporting.",
    description:
      "Modular Playwright framework with fixtures, role-based auth, network mocking, accessibility checks, Allure reports, and parallel sharding on GitHub Actions.",
    tech: ["Playwright", "TypeScript", "GitHub Actions", "Allure"],
    icon: Globe,
  },
  {
    title: "API Automation Framework",
    summary: "Contract, schema, and end-to-end API coverage.",
    description:
      "REST Assured + Postman framework with schema validation, JWT/OAuth flows, contract testing, data-driven scenarios, and CI dashboards.",
    tech: ["REST Assured", "Postman", "Jenkins"],
    icon: Layers,
  },
  {
    title: "AI Healing Engine",
    summary: "Locator self-healing powered by LLM + DOM heuristics.",
    description:
      "Detects broken locators at runtime, queries an LLM with surrounding DOM/XML context plus historical signatures, and rewrites selectors on the fly to keep suites green across UI churn.",
    tech: ["LLM", "CrewAI", "Appium", "Playwright"],
    icon: Sparkles,
  },
  {
    title: "OCR Validation Engine",
    summary: "Pixel-perfect text verification on mobile screens.",
    description:
      "OCR-based validator that extracts on-screen text from screenshots, compares against expected strings with fuzzy matching, and flags layout regressions for design QA.",
    tech: ["Tesseract", "OpenCV", "Appium", "Visual Diff"],
    icon: Cpu,
  },
  {
    title: "Qapilot CrewAI Integration",
    summary: "External AI agent wired into RPA runs for XPath validation.",
    description:
      "Deployed a CrewAI-style external agent into Qapilot integrated with Robotic Process Automation (RPA) runs. The agent validates AI-generated XPath locators against live app element trees, removing manual locator authoring overhead and accelerating regression maintenance.",
    tech: ["CrewAI", "Qapilot", "RPA", "LLM"],
    icon: ServerCog,
  },
  {
    title: "Internal Mobile Test App Suite",
    summary: "Purpose-built apps that unlock edge-case test coverage.",
    description:
      "A library of from-scratch Android, iOS, and Flutter apps — face recognition (WIO EFR), OCR redirection, POS-equivalent scanner, mock banking with random data, slider-input flows, on-screen keyboard simulator, and a multilanguage app pack — used to exercise scenarios no off-the-shelf app could.",
    tech: ["Flutter", "Android", "iOS", "OCR", "WebView"],
    icon: Smartphone,
  },
  {
    title: "Multi-Industry POC Engineering",
    summary: "End-to-end POC delivery across fintech, healthcare, telecom, media.",
    description:
      "Independent scoping, build, demo, and delivery of client Proof of Concept (POC) engagements across WIO, Paytm, Vodafone Qatar, NBC News / Telemundo, Baylor Scott & White, Keka, Growsari, Kasir Pintar, and more — adapting communication and tooling per industry context.",
    tech: ["Appium", "Playwright", "CrewAI", "Client Demos", "RPA"],
    icon: ShieldCheck,
  },
];

export type Certification = {
  title: string;
  issuer: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    title: "ISTQB Certified Tester — Foundation Level",
    issuer: "International Software Testing Qualifications Board",
    icon: BadgeCheck,
  },
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    icon: Cloud,
  },
  {
    title: "API Testing using REST Assured",
    issuer: "Online Test Automation Programme",
    icon: ServerCog,
  },
  {
    title: "Cisco CCNA — Routing, Switching & Scaling Networks",
    issuer: "Cisco Networking Academy",
    icon: Network,
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    icon: ShieldCheck,
  },
  {
    title: "JIRA Fundamentals",
    issuer: "Atlassian",
    icon: Kanban,
  },
];

export type Article = {
  title: string;
  summary: string;
  url: string;
  source: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    title: "From AI Prompt to Android APK in Under 15 Minutes",
    summary:
      "Going from a single prompt to a working Android APK with Google AI Studio — the workflow, the prompt cadence, and what actually ships in minutes.",
    url: "https://googleaistudio.hashnode.dev/from-ai-prompt-to-android-apk-in-under-15-minutes",
    source: "Google AI Studio",
    tags: ["Google AI Studio", "Android", "Prompt Engineering"],
  },
  {
    title: "267 Prompts and 30 Minutes: Built Exactly What I Needed to Test Using Replit",
    summary:
      "How I prompted Replit Agent into building a purpose-built test app — the prompt strategy, iteration cadence, and the result that beat off-the-shelf tools.",
    url: "https://agent-replit-3.hashnode.dev/267-and-30-minutes-built-exactly-what-i-needed-to-test-using-replit",
    source: "Replit Agent",
    tags: ["Replit Agent", "Vibe Coding", "Test App"],
  },
  {
    title: "How Bolt Won the Native Financial Calculator Showdown",
    summary:
      "A vibe coder's head-to-head retrospective comparing Bolt and Cursor on building a native financial calculator from scratch.",
    url: "https://a-vibe-coders-review-on-bolt-vs-cursor.hashnode.dev/how-bolt-won-the-native-financial-calculator-showdown-a-vibe-coders-retrospective",
    source: "Bolt vs Cursor",
    tags: ["Bolt", "Cursor", "Code Comparison"],
  },
  {
    title: "Building an AI-Powered Chatbot: A Complete Guide",
    summary:
      "End-to-end walkthrough — architecture, prompts, retrieval, and deployment — for an AI-powered chatbot you can actually ship.",
    url: "https://building-ai-powered-cbot-complete-guide.hashnode.dev/building-an-ai-powered-chatbot-a-complete-guide",
    source: "AI Chatbot Guide",
    tags: ["LLM", "Chatbot", "Architecture"],
  },
  {
    title:
      "Deep Dive: Graph-Based Visualization with Neo4j + React for Crawled Data Transitions",
    summary:
      "How we built a graph-based visualization system on Neo4j and React to map crawler-discovered screen transitions — schema, traversal, and UX trade-offs.",
    url: "https://qapilot.hashnode.dev/deep-dive-in-how-we-built-a-graph-based-visualization-system-with-neo4j-react-to-visualize-crawled-data-transitions",
    source: "Qapilot Engineering",
    tags: ["Neo4j", "React", "Graph", "Crawler"],
  },
];

export type Achievement = {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  { label: "Years of Experience", value: 7, suffix: "+", icon: Award },
  { label: "Automation Frameworks Built", value: 10, suffix: "+", icon: Workflow },
  { label: "Test Cases Automated", value: 5000, suffix: "+", icon: BadgeCheck },
  { label: "Enterprise Projects", value: 15, suffix: "+", icon: Boxes },
  { label: "Technologies", value: 25, suffix: "+", icon: Layers },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;
