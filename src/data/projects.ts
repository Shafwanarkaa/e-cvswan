export interface Project {
  id: string;
  slug: string;
  domain: string;
  period: string;
  techTags: string[];
  githubUrl?: string;
  notionUrl?: string;
  demoUrl?: string | string[];
  image?: string;
  featured: boolean;
  title: {
    en: string;
    id: string;
  };
  shortDesc: {
    en: string;
    id: string;
  };
  objective: {
    en: string;
    id: string;
  };
  methodology: {
    en: string;
    id: string;
  };
  findings: {
    en: string[];
    id: string[];
  };
}

export const projects: Project[] = [
  {
    id: "bi-pipeline",
    slug: "business-intelligence-pipeline",
    domain: "Retail · E-Commerce · F&B",
    period: "July 2026",
    techTags: ["Excel", "SQL", "Looker Studio"],
    notionUrl:
      "https://app.notion.com/p/Business-Intelligence-Pipeline-Retail-E-Commerce-F-B-39e2ff5f9d2a8052aac4de96b238e6cf?source=copy_link",
    demoUrl: [
      "https://datastudio.google.com/reporting/1c2293c4-7595-456c-9fdf-c7c969ed75a1",
      "https://datastudio.google.com/reporting/2d699564-40f0-48ee-9593-20796478fadd",
    ],
    image: "/images/business.jpg",
    featured: true,
    title: {
      en: "Business Intelligence Pipeline — Excel, SQL & Looker Studio",
      id: "Pipeline Business Intelligence — Excel, SQL & Looker Studio",
    },
    shortDesc: {
      en: "End-to-end BI pipeline across three domains: retail, e-commerce, and F&B. Includes data cleaning, SQL analysis, and interactive dashboards.",
      id: "Pipeline BI end-to-end di tiga domain: ritel, e-commerce, dan F&B. Mencakup pembersihan data, analisis SQL, dan dashboard interaktif.",
    },
    objective: {
      en: "Build an end-to-end analytical pipeline across retail, e-commerce, and F&B datasets — from raw data ingestion and cleaning through SQL analysis to interactive dashboards — to demonstrate a complete Business Intelligence workflow.",
      id: "Membangun pipeline analitik end-to-end di dataset ritel, e-commerce, dan F&B — dari pembersihan data hingga dashboard interaktif — untuk mendemonstrasikan alur kerja Business Intelligence yang lengkap.",
    },
    methodology: {
      en: "Data was cleaned and standardized in Excel. SQL analysis used multi-table JOINs, CTEs, and window functions to answer business questions. An ERD was designed for the e-commerce dataset. Final dashboards were built in Looker Studio to visualize KPIs and trends.",
      id: "Data dibersihkan dan distandarisasi di Excel. Analisis SQL menggunakan multi-table JOIN, CTE, dan window function untuk menjawab pertanyaan bisnis. ERD dirancang untuk dataset e-commerce. Dashboard akhir dibangun di Looker Studio untuk memvisualisasikan KPI dan tren.",
    },
    findings: {
      en: [
        "Identified a transaction anomaly valued at Rp180 million in the retail dataset.",
        "Analyzed customer purchasing behavior using a four-table e-commerce database.",
        "Reported a repeat purchase rate of 93.87% in the analyzed e-commerce dataset.",
        "Delivered three dashboards covering KPI monitoring across retail, e-commerce, and F&B domains.",
      ],
      id: [
        "Mengidentifikasi anomali transaksi senilai Rp180 juta pada dataset ritel.",
        "Menganalisis perilaku pembelian pelanggan menggunakan database e-commerce empat tabel.",
        "Melaporkan tingkat pembelian berulang sebesar 93,87% pada dataset e-commerce yang dianalisis.",
        "Menghasilkan tiga dashboard yang mencakup pemantauan KPI di domain ritel, e-commerce, dan F&B.",
      ],
    },
  },
  {
    id: "dss-bahan-baku",
    slug: "sistem-pendukung-keputusan-pengadaan-bahan-baku",
    domain: "Decision Support · Data Preparation",
    period: "April 2026",
    techTags: ["Excel", "SAW Method", "Requirements Analysis"],
    githubUrl: "https://github.com/Shafwanarkaa/smart-inventoryRK",
    demoUrl: undefined,
    image: "/images/remajakuring.jpg",
    featured: true,
    title: {
      en: "Raw Material Procurement Decision Support System",
      id: "Sistem Pendukung Keputusan Pengadaan Bahan Baku",
    },
    shortDesc: {
      en: "Multi-criteria decision support model using Simple Additive Weighting (SAW) built on preprocessed ingredient data. Served as Data Analyst and Project Manager.",
      id: "Model pendukung keputusan multi-kriteria menggunakan Simple Additive Weighting (SAW) yang dibangun di atas data bahan baku yang telah diproses.",
    },
    objective: {
      en: "Design a structured decision-making model to assist with raw material procurement by preprocessing ingredient records, applying a multi-criteria weighting model, and translating business requirements into technical specifications.",
      id: "Merancang model pengambilan keputusan terstruktur untuk mendukung pengadaan bahan baku dengan melakukan preprocessing, menerapkan model pembobotan multi-kriteria, dan menerjemahkan kebutuhan bisnis ke spesifikasi teknis.",
    },
    methodology: {
      en: "Performed preprocessing, categorization, and standardization on 98 raw ingredient records. Designed a multi-criteria weighting model using the Simple Additive Weighting (SAW) method. Coordinated project work and translated business requirements into technical system specifications.",
      id: "Melakukan preprocessing, kategorisasi, dan standardisasi pada 98 catatan bahan baku mentah. Merancang model pembobotan multi-kriteria menggunakan metode Simple Additive Weighting (SAW). Menerjemahkan kebutuhan bisnis ke spesifikasi sistem teknis.",
    },
    findings: {
      en: [
        "Preprocessed and standardized 98 raw ingredient records for clean model input.",
        "Applied Simple Additive Weighting (SAW) for structured multi-criteria supplier evaluation.",
        "Coordinated cross-functional project tasks as Data Analyst and Project Manager.",
        "Produced technical system requirements aligned with identified business needs.",
      ],
      id: [
        "Memproses dan menstandarisasi 98 catatan bahan baku mentah untuk input model yang bersih.",
        "Menerapkan Simple Additive Weighting (SAW) untuk evaluasi pemasok multi-kriteria yang terstruktur.",
        "Mengkoordinasikan tugas proyek lintas fungsi sebagai Data Analyst dan Project Manager.",
        "Menghasilkan spesifikasi teknis sistem yang selaras dengan kebutuhan bisnis yang teridentifikasi.",
      ],
    },
  },
  {
    id: "dashboard-ritel",
    slug: "dashboard-analisis-penjualan-ritel",
    domain: "Retail Analytics · Business Intelligence",
    period: "November 2025",
    techTags: ["Looker Studio", "Google Sheets"],
    githubUrl:
      "https://app.notion.com/p/Sales-Performance-Dashboard-Stationery-Store-cee2ff5f9d2a83cb930e013b3b2ce0f0?source=copy_link",
    demoUrl:
      "https://datastudio.google.com/reporting/1c2293c4-7595-456c-9fdf-c7c969ed75a1",
    image: "/images/salesdashboard.jpg",
    featured: true,
    title: {
      en: "Retail Sales Analysis Dashboard",
      id: "Dashboard Analisis Penjualan Ritel",
    },
    shortDesc: {
      en: "Interactive Looker Studio dashboard for monitoring retail business KPIs across 10,000+ orders and Rp935M in analyzed revenue.",
      id: "Dashboard Looker Studio interaktif untuk memantau KPI bisnis ritel dari 10.000+ pesanan dan Rp935 juta dalam pendapatan yang dianalisis.",
    },
    objective: {
      en: "Create an interactive dashboard that enables monitoring of retail business KPIs, supports market-share analysis, and identifies which products contribute most to total revenue within the analyzed dataset.",
      id: "Membuat dashboard interaktif yang memungkinkan pemantauan KPI bisnis ritel, mendukung analisis pangsa pasar, dan mengidentifikasi produk yang paling berkontribusi terhadap total pendapatan dalam dataset yang dianalisis.",
    },
    methodology: {
      en: "Sales data was structured and cleaned in Google Sheets. Looker Studio was used to build an interactive dashboard with filters, KPI cards, trend charts, and market-share breakdowns. Analysis focused on identifying top-performing products and revenue distribution.",
      id: "Data penjualan distrukturisasi dan dibersihkan di Google Sheets. Looker Studio digunakan untuk membangun dashboard interaktif dengan filter, kartu KPI, grafik tren, dan breakdown pangsa pasar. Analisis difokuskan pada identifikasi produk teratas dan distribusi pendapatan.",
    },
    findings: {
      en: [
        "Analyzed more than 10,000 orders within the retail dataset.",
        "Total revenue in the analyzed dataset reached Rp935 million.",
        "Performed market-share analysis to identify products contributing the most revenue.",
        "Dashboard supports real-time KPI monitoring with interactive filters.",
      ],
      id: [
        "Menganalisis lebih dari 10.000 pesanan dalam dataset ritel.",
        "Total pendapatan dalam dataset yang dianalisis mencapai Rp935 juta.",
        "Melakukan analisis pangsa pasar untuk mengidentifikasi produk yang paling berkontribusi terhadap pendapatan.",
        "Dashboard mendukung pemantauan KPI secara interaktif dengan filter yang dapat disesuaikan.",
      ],
    },
  },
  {
    id: "klaster-wisata-bali",
    slug: "analisis-klastering-destinasi-wisata-bali",
    domain: "Tourism · Clustering · EDA",
    period: "December 2024",
    techTags: ["Python", "Pandas", "Scikit-learn", "K-Means"],
    githubUrl:
      "https://github.com/Shafwanarkaa/Analisis-Klastering-Destinasi-Wisata-Berdasarkan-Rating-Google-dan-Jumlah-Review-di-Pulau-Bali",
    demoUrl: undefined,
    image: "/images/balibusiness.jpg",
    featured: true,
    title: {
      en: "Bali Tourist Destination Clustering Analysis",
      id: "Analisis Klastering Destinasi Wisata Bali",
    },
    shortDesc: {
      en: "Python-based clustering analysis segmenting 34 Bali tourist destinations into three groups using K-Means and Google rating data.",
      id: "Analisis klasterisasi berbasis Python yang mengelompokkan 34 destinasi wisata Bali ke dalam tiga kelompok menggunakan K-Means dan data rating Google.",
    },
    objective: {
      en: "Segment Bali tourist destinations into meaningful clusters based on Google rating data through exploratory data analysis and K-Means clustering, to surface patterns in how destinations are perceived and distributed.",
      id: "Mengelompokkan destinasi wisata Bali ke dalam klaster yang bermakna berdasarkan data rating Google melalui analisis data eksplorasi dan klasterisasi K-Means, untuk mengungkap pola persepsi dan distribusi destinasi.",
    },
    methodology: {
      en: "Conducted exploratory data analysis (EDA) and preprocessing on Google rating data using Pandas. Applied K-Means clustering via Scikit-learn to segment 34 tourist destinations into three clusters based on their rating characteristics.",
      id: "Melakukan analisis data eksplorasi (EDA) dan preprocessing pada data rating Google menggunakan Pandas. Menerapkan klasterisasi K-Means melalui Scikit-learn untuk mengelompokkan 34 destinasi wisata ke dalam tiga klaster berdasarkan karakteristik rating.",
    },
    findings: {
      en: [
        "Processed and cleaned Google rating data for 34 Bali tourist destinations.",
        "Applied K-Means clustering to segment destinations into three distinct groups.",
        "EDA revealed rating distribution patterns across destination categories.",
        "Used Python with Pandas and Scikit-learn throughout the analytical workflow.",
      ],
      id: [
        "Memproses dan membersihkan data rating Google untuk 34 destinasi wisata Bali.",
        "Menerapkan klasterisasi K-Means untuk mengelompokkan destinasi ke dalam tiga kelompok yang berbeda.",
        "EDA mengungkapkan pola distribusi rating di seluruh kategori destinasi.",
        "Menggunakan Python dengan Pandas dan Scikit-learn di sepanjang alur kerja analitik.",
      ],
    },
  },
];
