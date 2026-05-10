// Real package data — confirmed by client (Bogura, NR Tech Wifi Zone)
// Speeds in Mbps. Prices in BDT.

export const hotspotPackages = [
  {
    id: "h1",
    nameBn: "প্যাকেজ এক",
    nameEn: "Package 1",
    duration: 1,
    durationUnit: "day",
    price: 15,
    badge: null,
    perks: ["bdix", "support"],
  },
  {
    id: "h2",
    nameBn: "প্যাকেজ দুই",
    nameEn: "Package 2",
    duration: 2,
    durationUnit: "day",
    price: 20,
    badge: null,
    perks: ["bdix", "support"],
  },
  {
    id: "h3",
    nameBn: "প্যাকেজ তিন",
    nameEn: "Package 3",
    duration: 7,
    durationUnit: "day",
    price: 60,
    badge: "popular",
    perks: ["bdix", "support", "iptv"],
  },
  {
    id: "h4",
    nameBn: "প্যাকেজ চার",
    nameEn: "Package 4",
    duration: 15,
    durationUnit: "day",
    price: 80,
    badge: null,
    perks: ["bdix", "support", "iptv"],
  },
  {
    id: "h5",
    nameBn: "প্যাকেজ পাঁচ",
    nameEn: "Package 5",
    duration: 30,
    durationUnit: "day",
    price: 120,
    badge: null,
    perks: ["bdix", "support", "iptv"],
  },
  {
    id: "h6",
    nameBn: "প্যাকেজ ছয়",
    nameEn: "Package 6",
    duration: 30,
    durationUnit: "day",
    price: 150,
    badge: "value",
    perks: ["bdix", "support", "iptv", "ftp"],
  },
];

export const homePackages = [
  {
    id: "p1",
    nameBn: "প্যাকেজ এক",
    nameEn: "Package 1",
    speed: 25,
    speedLabel: "25 Mbps",
    price: 500,
    freeMinutes: 50,
    badge: null,
    perks: ["unlimited", "bdix", "support"],
  },
  {
    id: "p2",
    nameBn: "প্যাকেজ দুই",
    nameEn: "Package 2",
    speed: 35,
    speedLabel: "35 Mbps",
    price: 600,
    freeMinutes: 50,
    badge: null,
    perks: ["unlimited", "bdix", "support", "iptv"],
  },
  {
    id: "p3",
    nameBn: "প্যাকেজ তিন",
    nameEn: "Package 3",
    speed: 45,
    speedLabel: "45 Mbps",
    price: 700,
    freeMinutes: 100,
    badge: "popular",
    perks: ["unlimited", "bdix", "support", "iptv"],
  },
  {
    id: "p4",
    nameBn: "প্যাকেজ চার",
    nameEn: "Package 4",
    speed: 65,
    speedLabel: "65 Mbps",
    price: 800,
    freeMinutes: 200,
    badge: null,
    perks: ["unlimited", "bdix", "support", "iptv", "ftp"],
  },
  {
    id: "p5",
    nameBn: "প্যাকেজ পাঁচ",
    nameEn: "Package 5",
    speed: 100,
    speedLabel: "100 Mbps",
    price: 1000,
    freeMinutes: 250,
    badge: null,
    perks: ["unlimited", "bdix", "support", "iptv", "ftp", "gaming"],
  },
  {
    id: "p6",
    nameBn: "প্যাকেজ ছয়",
    nameEn: "Package 6",
    speed: 120,
    speedLabel: "120 Mbps",
    price: 1200,
    freeMinutes: 300,
    badge: "value",
    perks: ["unlimited", "bdix", "support", "iptv", "ftp", "gaming"],
  },
];

export const perkLabels = {
  bn: {
    unlimited: "আনলিমিটেড ডেটা",
    bdix: "BDIX অ্যাক্সেস",
    support: "২৪/৭ সাপোর্ট",
    iptv: "IPTV ফ্রি",
    ftp: "FTP সার্ভার",
    gaming: "গেমিং সার্ভার",
  },
  en: {
    unlimited: "Unlimited Data",
    bdix: "BDIX Access",
    support: "24/7 Support",
    iptv: "Free IPTV",
    ftp: "FTP Server",
    gaming: "Gaming Server",
  },
};

export const faqs = {
  bn: [
    {
      q: "ইনস্টলেশন চার্জ কত?",
      a: "নতুন সংযোগের জন্য এককালীন ইনস্টলেশন চার্জ ১,০০০ টাকা, যার মধ্যে কেবল, কানেক্টর ও সেটআপ অন্তর্ভুক্ত।",
    },
    {
      q: "চুক্তির মেয়াদ কত দিনের?",
      a: "কোনো ন্যূনতম চুক্তি নেই। মাস ভিত্তিক বিল, যেকোনো সময় বাতিল করতে পারবেন।",
    },
    {
      q: "BDIX এর মাধ্যমে কী কী সুবিধা পাবো?",
      a: "BDIX এর মাধ্যমে দেশীয় কন্টেন্ট (FTP, IPTV, লাইভ স্ট্রিমিং) ০ লেটেন্সিতে পাবেন।",
    },
    {
      q: "সংযোগ পেতে কত সময় লাগবে?",
      a: "অর্ডার নিশ্চিত হওয়ার ২৪ ঘণ্টার মধ্যেই সাধারণত সংযোগ চালু হয়ে যায়।",
    },
    {
      q: "পেমেন্ট কীভাবে করবো?",
      a: "bKash, Nagad, Rocket এবং ক্যাশ পেমেন্ট সব অপশনই গ্রহণযোগ্য।",
    },
  ],
  en: [
    {
      q: "What is the installation charge?",
      a: "One-time installation charge is BDT 1,000 for new connection, which covers cable, connectors, and setup.",
    },
    {
      q: "What is the contract duration?",
      a: "No minimum contract. Monthly billing, you can cancel anytime.",
    },
    {
      q: "What benefits do I get from BDIX?",
      a: "Through BDIX you get access to local content (FTP, IPTV, live streaming) at zero latency.",
    },
    {
      q: "How long does it take to get connected?",
      a: "Within 24 hours of confirmed order, the connection is usually activated.",
    },
    {
      q: "How can I pay?",
      a: "bKash, Nagad, Rocket and cash payments are all accepted.",
    },
  ],
};
