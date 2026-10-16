export const profile = {
  name: "Shafwan Arka Putra",
  role: {
    en: "Data Analyst · Information Systems Student",
    id: "Data Analyst · Mahasiswa Sistem Informasi",
  },
  email: "shafwanarkap@gmail.com",
  linkedin: "https://www.linkedin.com/in/shafwanarka/",
  github: "https://github.com/shafwanarkaa",
  cvAvailable: true, // Set to true once the actual CV PDF is placed in public/cv/
  cvPath: "/cv/Shafwan-Arka-Putra-CV.pdf",
  profileImageAvailable: true, // Set to true once the actual photo is placed in public/images/profile.jpg
  profileImagePath: "/images/profile.jpg",
  ogImagePath: "/images/og-image.png",
} as const;

export const certifications = [
  {
    id: "cert-1",
    name: {
      en: "Database Design & SQL",
      id: "Database Design & SQL",
    },
    provider: "Digital Talent KOMINFO × Oracle",
    verifyUrl: undefined,
    issueDate: undefined,
  },
  {
    id: "cert-2",
    name: {
      en: "Bootcamp Data Analyst",
      id: "Bootcamp Data Analyst",
    },
    provider: "KarirNex",
    verifyUrl: undefined,
    issueDate: undefined,
  },
  {
    id: "cert-3",
    name: {
      en: "Data Visual Looker & Python",
      id: "Data Visual Looker & Python",
    },
    provider: "MySkill",
    verifyUrl: undefined,
    issueDate: undefined,
  },
  {
    id: "cert-4",
    name: {
      en: "Dasar Data Science",
      id: "Dasar Data Science",
    },
    provider: "Dicoding",
    verifyUrl: undefined,
    issueDate: undefined,
  },
  {
    id: "cert-5",
    name: {
      en: "Bootcamp: Product Management",
      id: "Bootcamp: Product Management",
    },
    provider: "GDGOC UIN Jakarta",
    verifyUrl: undefined,
    issueDate: undefined,
  },
] as const;

export const skillCategories = [
  {
    id: "analytics",
    skills: [
      "Excel",
      "Google Sheets",
      "SQL / MySQL",
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
  },
  {
    id: "bi",
    skills: ["Power BI", "Looker Studio"],
  },
  {
    id: "tools",
    skills: ["RapidMiner", "Figma", "Trello", "Jira"],
  },
  {
    id: "soft",
    skills: [
      { en: "Analytical Thinking", id: "Berpikir Analitis" },
      { en: "Problem Solving", id: "Pemecahan Masalah" },
      { en: "Teamwork", id: "Kerja Tim" },
      { en: "Time Management", id: "Manajemen Waktu" },
      { en: "Communication", id: "Komunikasi" },
    ],
  },
  {
    id: "language",
    skills: [
      { en: "English — Intermediate", id: "Bahasa Inggris — Menengah" },
      { en: "Indonesian — Native", id: "Bahasa Indonesia — Native" },
    ],
  },
] as const;
