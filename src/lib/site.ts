const WHATSAPP_NUMBER = "919063330123";
const WHATSAPP_GREETING =
  "Hi Sudheer, I came across your portfolio and wanted to connect.";

export const site = {
  name: "Sai Sudheer Reddy",
  shortName: "Sudheer",
  role: "Senior QA Automation Engineer",
  tagline:
    "Senior QA Automation Engineer | SDET | AI Testing | Mobile Automation",
  yearsOfExperience: "7+",
  location: "Hyderabad, Telangana, India",
  email: "sudheerreddy99999@gmail.com",
  phone: "+91-9063330123",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: "+91 90633 30123",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_GREETING,
  )}`,
  linkedin:
    "https://www.linkedin.com/in/sudheer-reddy-software-development-test-engineer/",
  github: "https://github.com/Sudheer-CodeCrusader",
  blog: "https://hashnode.com",
  certificatesRepo:
    "https://drive.google.com/drive/folders/1ofy50fK4MbciAdDIN8X0Rnw-KBKugd2q?usp=sharing",
  siteUrl: "https://sudheer-portfolio.vercel.app",
  description:
    "Portfolio of Sai Sudheer Reddy — Senior QA Automation Engineer with 7+ years of experience in mobile, web, API, and AI-driven test automation across telecom, CPaaS, and consumer products.",
  ogImage: "/og-image.png",
} as const;

export type SiteConfig = typeof site;
