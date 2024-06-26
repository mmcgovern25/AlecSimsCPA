import {
  linkedin,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,

  telegram,
  twitter,
  bryant,
  pwc,
  bluebird,
  cpa,
  sas,
  finance,
  tax,
  bookkeeping,
  bookkepingIcon,
  financeIcon,
  taxIcon,
} from "../assets";



export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#Home",
  },
  {
    id: "1",
    title: "Services",
    url: "#Services",
  },
  {
    id: "2",
    title: "About",
    url: "#About",
  },
  {
    id: "3",
    title: "FAQs",
    url: "#FAQs",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [bryant, pwc, bluebird, sas, cpa ];




export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Basic Book Keeping",
    text: `• Maintenance of all up-to-date financial records.
    • Reconciliation of all bank statements to ensure accuracy.
    • Management of company's accounts receivable and accounts payable.
    • Assessing your company’s cash flow to make the best informed financial decisions.`,
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: bookkepingIcon,
    imageUrl: bookkeeping,
    light: true
  },
  {
    id: "1",
    title: "Tax Planning and Strategy",
    text: `• Development of tax planning strategies to optimize financial efficiency and  minimize tax exposure.
    • Develop an accurate cost benefit analysis of these tax treatments.
    • Gather all information for tax filing season for seamless transition to preparation and filing of filings.`,
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: taxIcon,
    imageUrl: tax,
    light: true,
  },
  {
    id: "2",
    title: "Preparation of Financials",
    text: `• Accurate recording of financial transactions.
    • Preparation of detailed profit/loss statements.
    • Compilation of balance sheets to assess financial health.
    • Monthly generation of informative financial reports for strategic planning.`
,
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: financeIcon,
    imageUrl: finance,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/alec-simonovitch-cpa-mpac-b42731129/",
  },
];
