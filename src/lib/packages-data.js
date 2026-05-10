// Demo package data — replace with real values when ready
// Speeds in Mbps. Prices in BDT.

export const hotspotPackages = [
  {
    id: "h1",
    nameBn: "১ দিন",
    nameEn: "1 Day",
    duration: 1,
    durationUnit: "day",
    price: 15,
    speed: "Up to 5 Mbps",
    speedBn: "৫ Mbps পর্যন্ত",
    badge: null,
    perks: ["bdix", "support"],
  },
  {
    id: "h2",
    nameBn: "২ দিন",
    nameEn: "2 Days",
    duration: 2,
    durationUnit: "day",
    price: 20,
    speed: "Up to 5 Mbps",
    speedBn: "৫ Mbps পর্যন্ত",
    badge: null,
    perks: ["bdix", "support"],
  },
  {
    id: "h3",
    nameBn: "৭ দিন",
    nameEn: "7 Days",
    duration: 7,
    durationUnit: "day",
    price: 60,
    speed: "Up to 8 Mbps",
    speedBn: "৮ Mbps পর্যন্ত",
    badge: "popular",
    perks: ["bdix", "support", "iptv"],
  },
  {
    id: "h4",
    nameBn: "১৫ দিন",
    nameEn: "15 Days",
    duration: 15,
    durationUnit: "day",
    price: 80,
    speed: "Up to 8 Mbps",
    speedBn: "৮ Mbps পর্যন্ত",
    badge: null,
    perks: ["bdix", "support", "iptv"],
  },
  {
    id: "h5",
    nameBn: "৩০ দিন",
    nameEn: "30 Days",
    duration: 30,
    durationUnit: "day",
    price: 150,
    speed: "Up to 10 Mbps",
    speedBn: "১০ Mbps পর্যন্ত",
    badge: "value",
    perks: ["bdix", "support", "iptv", "ftp"],
  },
];

export const homePackages = [
  {
    id: "p1",
    nameBn: "বেসিক",
    nameEn: "Basic",
    speed: 5,
    speedLabel: "5 Mbps",
    price: 500,
    badge: null,
    perks: ["unlimited", "bdix", "support", "router"],
  },
  {
    id: "p2",
    nameBn: "স্ট্যান্ডার্ড",
    nameEn: "Standard",
    speed: 10,
    speedLabel: "10 Mbps",
    price: 800,
    badge: null,
    perks: ["unlimited", "bdix", "support", "router", "iptv"],
  },
  {
    id: "p3",
    nameBn: "প্রিমিয়াম",
    nameEn: "Premium",
    speed: 20,
    speedLabel: "20 Mbps",
    price: 1200,
    badge: "popular",
    perks: ["unlimited", "bdix", "support", "router", "iptv", "ftp"],
  },
  {
    id: "p4",
    nameBn: "আল্ট্রা",
    nameEn: "Ultra",
    speed: 50,
    speedLabel: "50 Mbps",
    price: 2000,
    badge: "value",
    perks: ["unlimited", "bdix", "support", "router", "iptv", "ftp", "gaming"],
  },
];

export const perkLabels = {
  bn: {
    unlimited: "আনলিমিটেড ডেটা",
    bdix: "BDIX অ্যাক্সেস",
    support: "২৪/৭ সাপোর্ট",
    router: "ফ্রি রাউটার",
    iptv: "IPTV ফ্রি",
    ftp: "FTP সার্ভার",
    gaming: "গেমিং সার্ভার",
  },
  en: {
    unlimited: "Unlimited Data",
    bdix: "BDIX Access",
    support: "24/7 Support",
    router: "Free Router",
    iptv: "Free IPTV",
    ftp: "FTP Server",
    gaming: "Gaming Server",
  },
};

export const faqs = {
  bn: [
    {
      q: "ইনস্টলেশন চার্জ কত?",
      a: "নতুন সংযোগের জন্য এককালীন ইনস্টলেশন চার্জ ১,০০০ টাকা, যার মধ্যে ফ্রি রাউটার অন্তর্ভুক্ত।",
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
      a: "One-time installation charge is BDT 1,000 for new connection, which includes a free router.",
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
