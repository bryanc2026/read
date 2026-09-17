export type NavLink = { label: string; href: string; external?: boolean };
export type NavItem = NavLink & { children?: NavLink[] };

export const nav: NavItem[] = [
  { label: "What You Get", href: "#what-you-get" },
  { label: "Results", href: "#results" },
  { label: "Coaches", href: "#coaches" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Boom Meta Method", href: "/boom-meta-method" },
];

// Mirrors the live site's right-hand nav cluster (coaching.boomecommerce.com.au)
export const utilityNav: { freeTools: NavItem; login: NavLink } = {
  freeTools: {
    label: "Free Tools",
    href: "#",
    children: [
      {
        label: "MER Efficiency Calculator",
        href: "https://magnificent-sprite-a5c0cd.netlify.app/",
        external: true,
      },
      {
        label: "Aus Post Surcharge Calculator",
        href: "https://sensational-swan-8529cb.netlify.app/",
        external: true,
      },
    ],
  },
  login: {
    label: "Log in",
    href: "https://login.circle.so/sign_in?request_host=community.boomecommerce.com.au#email",
    external: true,
  },
};

export const differentiators = [
  {
    title: "Capped at 20 brands",
    body: "We only work with 20 ecommerce brands at a time, so support stays deep and none of it goes to your competitors.",
  },
  {
    title: "Built on Your Numbers",
    body: "Every plan starts with our Your Numbers system — the fastest way to find the single biggest unlock in your business.",
  },
  {
    title: "Coaches who've run the machine",
    body: "Not theorists. Our coaches have run 8-figure ecommerce operations and agencies — not just advised them from the sidelines.",
  },
];

export const workedWith = {
  title: "Who We've Worked With",
  subhead:
    "Over the years, Iain & Bryan have worked with all types of ecommerce and retail businesses — from ASX-listed to influencer-led brands.",
  logos: ["Billabong", "Quiksilver", "Sheet Society", "Supercheap Auto", "al.ive Body", "BCF"],
};

export type HowItWorksItem = {
  icon: "calendar" | "boom" | "target" | "google" | "playbook" | "chat" | "notes" | "community" | "skills";
  title: string;
  body: string;
  bullets?: string[];
  cta?: string;
};

export const howItWorks: { title: string; subhead: string; items: HowItWorksItem[] } = {
  title: "How It Works",
  subhead:
    "To get results, we train you and your team across several approaches. These are the pillars of Boom, and they show you exactly which levers to pull.",
  items: [
    {
      icon: "calendar",
      title: "One-to-One Coaching",
      body: "Book Iain or Bryan in any time with a direct link to our calendar. No junior account managers — just coaches who've run all types of brands and know what they're doing.",
    },
    {
      icon: "boom",
      title: "The Boom Meta Method",
      body: "Our unique approach to Meta, built on insights straight from Meta and real ad accounts — updated monthly.",
      bullets: [
        "Exact steps for profitable growth",
        "Only available to 20 ecommerce brands",
        "Uses Meta's latest changes",
        "What ads to try",
        "Common mistakes to avoid",
        "Ad structures for your business",
      ],
      cta: "What's in the Boom Meta Method",
    },
    {
      icon: "target",
      title: "Your Numbers",
      body: "A clear, simple set of numbers that are easy to track and tell you exactly what to do when they move. No fluff — just the numbers that matter to your business and what to do as they change.",
    },
    {
      icon: "google",
      title: "Google Ads For Ecommerce",
      body: "A lot of businesses overlook Google. We'll help you get the most out of it with clear, step-by-step instructions and training.",
    },
    {
      icon: "playbook",
      title: "Playbooks",
      body: "Training programs built to upskill you on ecommerce strategy and technical implementation across the areas that move the needle.",
      bullets: [
        "Meta Ads",
        "Google Ads",
        "Promotions",
        "Email Marketing",
        "CRO",
        "Increasing AOV",
        "Inventory Management",
        "Cash Flow Management",
      ],
    },
    {
      icon: "chat",
      title: "Group Sessions",
      body: "We meet every week to share findings and strategies and solve real challenges — how much to spend on Meta today, why some products aren't selling. Learning alongside other founders doing the same work means no competing brands, so you can share with confidence instead of battling it out alone.",
    },
    {
      icon: "notes",
      title: "Founders Monthly",
      body: "Each month, founders and the most senior people in the business get together to discuss the challenges only they face.",
    },
    {
      icon: "community",
      title: "Join a Community of Other Ecom Business Owners",
      body: "Alongside being guided directly by Bryan and Iain, learn from other business owners about how they overcame the same growth challenges in group sessions.",
    },
    {
      icon: "skills",
      title: "Learn Hands-On Marketing Skills",
      body: "The best marketers are the ones who understand the brand — normally that's you or your team, not an outside agency. Learn how to run Google, Meta and email marketing yourself.",
    },
  ],
};

export type ResultStat = {
  headline: string;
  bullets: string[];
  trend: number[];
};

export const resultStats: ResultStat[] = [
  {
    headline: "60% Increase Year on Year",
    bullets: [
      "Building product anticipation",
      "Reducing ad spend in key periods",
      "Mixing email marketing with ads",
    ],
    trend: [10, 12, 11, 14, 13, 42, 18, 46, 20, 24, 26],
  },
  {
    headline: "Solid, Reliable Growth",
    bullets: [
      "Using the Boom Meta Method",
      "Fixing Google Ads tracking",
      "Learning profitable promotions",
    ],
    trend: [8, 10, 11, 13, 16, 18, 22, 26, 30, 34, 38],
  },
  {
    headline: "84% Year on Year Increase",
    bullets: [
      "Focusing on AOV",
      "Managing supplier costs",
      "Learning profitable promotions",
    ],
    trend: [14, 16, 15, 18, 20, 24, 22, 26, 30, 34, 40],
  },
  {
    headline: "104% Year on Year Growth",
    bullets: [
      "Managing ad spend with the Your Numbers approach",
      "Timed product launches",
      "Taking Google Ads management in-house",
    ],
    trend: [6, 7, 7, 8, 9, 12, 20, 34, 46, 54, 60],
  },
  {
    headline: "87% Increase in UK Sales",
    bullets: [
      "Building a site designed for different markets",
      "Timing promotions",
      "Managing ads in-house for better results",
    ],
    trend: [12, 14, 13, 34, 20, 18, 22, 20, 26, 30, 34],
  },
  {
    headline: "$800K in One Week",
    bullets: [
      "Launching promotions early to VIP groups",
      "Advertising when costs were low",
      "Increasing and decreasing Meta spend at the right time",
    ],
    trend: [10, 12, 30, 22, 16, 14, 15, 16, 18, 20, 22],
  },
];

export const whatMakesDifferent = {
  eyebrow: "Objection: aren't all coaching programs the same?",
  title: "What Makes Boom Different?",
  intro: {
    title: "We only work with 20 brands, and none of your competitors",
    body: "This lets you see truly how other ecommerce businesses operate, without fear of a competitor copying you. It also means more dedicated time from Iain and Bryan, working directly with you.",
    image: "/images/conference-stage.jpg",
    imageAlt: "Iain presenting on stage at an ecommerce industry event",
  },
  cards: [
    {
      title: "We work towards your goals, not growth at all costs",
      body: "We don't believe in one-size-fits-all. Top-line revenue growth isn't the be-all and end-all. Sometimes it's about freeing up your time, increasing profit, reducing costs, or getting back to why you started the business in the first place.",
    },
    {
      title: "Boutique, not big",
      body: "Other coaching groups and communities get big — and the quality of the work gets watered down. We believe a community works well at a certain size, so you get real attention and help, not just another video to watch or another service to be upsold.",
    },
    {
      title: "You work with the founders, Iain & Bryan",
      body: "Work brand-side and you often get handed to a junior account manager — well-meaning, but someone who's never actually run an ecommerce business. We've owned ecommerce businesses, run digital agencies, and been hands-on in client accounts. It's just the two of us, helping you and your business.",
    },
    {
      title: "No lock-in contracts",
      body: "Most members stay for years — but our agreement is month to month. Be wary of coaching communities that force you to sign up for 12 months before you know if it's a fit.",
    },
  ],
  cta: "Start Connecting with Like-Minded Ecommerce Businesses",
  ctaSubtext: "Limited membership spots available this quarter",
};

export type Coach = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  quote: { text: string; author: string; company?: string };
  badges: string[];
};

export const coaches: Coach[] = [
  {
    name: "Iain Calvert",
    role: "Co-Founder & Coach",
    photo: "/images/coach-iain.jpg",
    bio: [
      "I help Aussie ecommerce brands scale faster, spend smarter and sell more online.",
      "With 20+ years in ecommerce, I've worked with global retailers like Billabong, Quiksilver, Supercheap Auto and Terry White Chemmart, as well as hundreds of growing brands across Australia and the UK.",
      "I've run one of Australia's largest independent digital agencies, been CMO of a 500-person tech company, and now coach a group of brands doing $250K to $50M in revenue.",
      "If you're a founder or in-house marketer who wants to scale profitably without wasting time or ad spend, I can help.",
    ],
    quote: {
      text: "He's not your ‘throw money at Instagram’ kinda guy. He's deliberate in thinking long-term to create real impact for business owners.",
      author: "Rhys Furner",
      company: "Shopify",
    },
    badges: [
      "Worked for ASX-listed retailer",
      "Ran one of the largest digital agencies in AU",
      "Speaker at Klaviyo Events",
      "Speaker at Shopify Events",
      "Speaker at Retail Fest",
      "Top episode on Add To Cart Podcast",
    ],
  },
  {
    name: "Bryan Cleary",
    role: "Co-Founder & Coach",
    photo: "/images/coach-bryan.jpg",
    bio: [
      "I'm an Australian-based ecommerce consultant and trainer who has worked with the likes of Modibodi, The Block Shop, Tigerlily, Esther & Co, Al.ive Body, Oz Hair & Beauty, Camilla & Marc, Stussy and Rusty, alongside a range of owner-run Shopify brands.",
      "With 8+ years of Shopify Plus experience, I focus on ecommerce development, finance and strategy — taking a holistic approach to conversion rate optimisation across acquisition, conversion, retention, A/B testing and continuous improvement.",
      "My process is built to empower you, the merchant, to run this yourself over time — with us in the background to support and help break down the barriers.",
    ],
    quote: {
      text: "Bryan, our fractional CMO/CFO/ecommerce consultant, has been instrumental in transforming our online store. By emphasising key metrics like CAC, AOV and shipping, he turned our profit-loss situation into a profitable one.",
      author: "Boom Member",
    },
    badges: [
      "Worked for one of the largest ecomm agencies in APAC for 5 years",
      "Worked for the America Lottery in Texas",
      "Speaker at Facebook event",
      "Helped merchants save $30–$50K/month in software & ad spend",
      "Shopify dev expert",
      "Shopify app expert",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonialsSection = {
  title: "Brands Big & Small Love Working with Iain & Bryan",
  subhead: "We work with founders, general managers, marketers and everyone in between.",
};

export const testimonialsList: Testimonial[] = [
  {
    name: "Sam Schumann",
    role: "Alton",
    quote:
      "Boom has taught me the secret of ecommerce. There is no secret, it's just a set of numbers that you manage. The trick was knowing which numbers and how to manage them.",
  },
  {
    name: "Prue Bauer",
    role: "Founder, AirGarden",
    quote:
      "We are actually starting to get meaningful results consistently — without completely blowing up our precious cash flow.",
  },
  {
    name: "Katy B",
    role: "Owner, Katy B Jewellery",
    quote:
      "Working with Boom has been a game-changer for me. They've taught me the ins and outs of Meta and Google Ads in a way that actually makes sense. Iain is incredible at breaking things down step by step — he doesn't just do it for us, he teaches us along the way. Before starting Boom I had no idea how to set up any ad campaigns; now I am confident.",
  },
  {
    name: "Josh Bulafkin",
    role: "The Plants Project",
    quote:
      "Iain has been instrumental in helping us take back ownership of our online spend and the actions we take as a business. He's shown us which levers to pull to get the results we want. I'm learning so much more than I ever have before, and it's given me a whole new level of confidence and clarity in our strategy.",
  },
  {
    name: "Jordan Bruno",
    role: "Roogenics",
    quote:
      "Boom Ecommerce Coaching has been a turning point for us. With Iain and Bryan's guidance, we optimised ad spend, learnt to measure the metrics that matter, and built a clear strategy for growth. The results speak for themselves — stronger profits, better decisions, and real confidence in our direction. I wish we had done this a year ago!",
  },
  {
    name: "Yon Carricaburu",
    role: "Quiksilver",
    quote:
      "Iain is really professional, proactive and committed with a great entrepreneurial mindset. High level and up to date digital marketing skills.",
  },
  {
    name: "Molly & Emma",
    role: "Jam the Label",
    quote:
      "Iain and Bryan from Boom have been enormously helpful for us at JAM. They always have time, no question is a silly question and they explain things in a way that's easy for those of us who are complete novices to understand. We now feel much more empowered to handle the ecommerce side of our business, including our paid ads, ourselves. Thank you so much!",
  },
];

export const qualification = {
  title: "We Only Take On Businesses We Can Help",
  body: "Because we limit the number of businesses we work with to 20, we want to make sure we can actually get you to your goal. We'll tell you upfront if we can't help.",
  cta: "Talk to Us",
  policy: {
    title: "Don't Be Offended If We Don't Take You On",
    body: "If you compete directly with one of our members, we won't take you on — that's the policy. Sometimes we're just not the right match, and we'd rather say so upfront than take your money and hope for the best.",
    cta: "Find Out If We Can Work Together",
  },
};

export const featuredBy = {
  title: "As Featured By",
  subhead: "We've presented for and trained clients of",
  logos: ["Shopify", "Facebook", "Add To Cart", "SmartCompany", "Klaviyo"],
};

export const partners = {
  title: "Official Partners Of",
  logos: ["Meta Business Partners", "Klaviyo Partners", "Shopify Partner"],
};

export const faqs = [
  {
    q: "Who is Boom for?",
    a: "Boom is built for ecommerce founders and in-house marketers running Shopify (or Shopify Plus) brands doing roughly $250K to $50M in annual revenue who want a coach in their corner, not another agency retainer.",
  },
  {
    q: "How is this different from hiring an agency?",
    a: "Agencies run your channels for you and keep the knowledge. We coach you and your team to run them yourselves — using the Your Numbers system — so the skill and the upside stay in-house.",
  },
  {
    q: "Why cap it at 20 brands?",
    a: "So support stays deep and personal, and so we never end up coaching two brands competing for the same customer.",
  },
  {
    q: "What if you don't think you can help us?",
    a: "We'll tell you. We don't take on businesses we can't get results for, and we won't take you on if you compete directly with an existing member.",
  },
  {
    q: "What channels do you cover?",
    a: "Meta, Google Ads, email/SMS (Klaviyo) and your ecommerce platform — plus the finance and operations numbers that connect them.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No. Most members stay for years, but our agreement is month to month — we'd rather earn it every month than lock you in.",
  },
];

export const footerLinks = {
  company: [
    { label: "What You Get", href: "#what-you-get" },
    { label: "Results", href: "#results" },
    { label: "Coaches", href: "#coaches" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const metaMethodPage = {
  hero: {
    eyebrow: "Finally Sort Meta Ads",
    title: "The Boom Meta Method",
    subhead: "A Meta Ads System That Grows With You, Not Against You",
    cta: "Chat with us",
    note: "Only 20 brands get access to this strategy",
  },
  problem: {
    label: "The Problem",
    title: "Ecommerce Business Struggling or Plateaued?",
    intro: "Meta Ads have changed. Most brands haven't. Advantage+ and Shopping campaigns are no more.",
    items: [
      "Manually controlling audiences instead of feeding Meta clean signals",
      "Testing random creatives with no structure or learning feedback loop",
      "Focusing on ROAS instead of real blended performance metrics",
      "Burning budget on ideas that “might work” instead of running a system",
    ],
    footer: "If this sounds like you, you're not alone. You just need a better system.",
  },
  answer: {
    label: "The Answer",
    title: "The Boom Meta Method teaches you how to:",
    items: [
      "Set up campaign structures that align to your business goals",
      "Feed Meta the right data, not force it to guess",
      "Create scroll-stopping ads for each funnel stage",
      "Test ads with purpose, not chaos",
      "Optimise based on cash in and out, not mythical ROAS",
      "Roll out campaigns without rollercoaster results",
    ],
    footer: "This transformation isn't just possible — it's within your reach with the right guidance.",
  },
  coach: {
    name: "Iain Calvert",
    role: "Ecommerce Coach, Consultant and “Enthusiastic” Surfer",
    photo: "/images/coach-iain.jpg",
    bio: [
      "I help Aussie ecommerce brands scale faster, spend smarter and sell more online.",
      "With 20+ years in ecommerce, I've worked with global retailers like Billabong, Quiksilver, Supercheap Auto and Terry White Chemmart, as well as hundreds of growing brands across Australia and the UK.",
      "I've run one of Australia's largest independent digital agencies, been CMO of a 500-person tech company, and now coach a group of brands doing $250K to $50M in revenue.",
      "If you're a founder or in-house marketer and want to scale profitably without wasting time or ad spend, I can help.",
    ],
    quote: {
      text: "He's not your ‘throw money at Instagram’ kinda guy. He's deliberate in thinking long-term to create real impact for business owners.",
      author: "Rhys Furner",
      company: "Shopify",
    },
    badges: [
      "Worked for ASX-listed retailer",
      "GM of one of the largest digital agencies in AU",
      "Speaker at Klaviyo Events",
      "Speaker at Shopify Events",
      "Speaker at Retail Fest",
      "Top 3 Episode on Add To Cart",
    ],
  },
  intro: {
    eyebrow: "Introducing",
    title: "The Boom Meta Method",
    body: "It's built for brands who are ready to go to the next stage. It's a systemised approach to Meta ads, designed to scale your brand profitably whether you're spending $2K a month or $400K.",
    callout:
      "Part of the Boom Ecommerce coaching program. This isn't another “tactic of the week.” It's the same repeatable method we use with some of the most successful ecommerce brands in Australia and New Zealand.",
  },
  strategy: {
    title: "The Strategy",
    steps: [
      {
        phase: "Month 1",
        title: "Learn",
        body: "Learn how to get the most from Meta and the Boom Meta Method in weekly live sessions and training videos.",
      },
      {
        phase: "Month 2",
        title: "Implement",
        body: "You get a detailed checklist to set up your account while learning alongside other non-competing brands.",
      },
      {
        phase: "Month 3 onwards",
        title: "Optimise & Grow",
        body: "Learn what works for your business and how to balance sales growth with profitability.",
      },
    ],
    footnote: "All with live expert help.",
    cta: "Contact us",
  },
  results: {
    label: "Boom Member Results",
    title: "Boom Members' Results",
    subhead:
      "The Boom Meta Method has been developed over years of working in ecommerce and adapted to the way Meta Ads currently works.",
    items: [
      {
        title: "Consistent Sales Growth",
        body: "This NZ brand started working with Boom and has seen consistent sales growth.",
      },
      {
        title: "104% Year on Year Growth",
        body: "Increasing sales year on year is the goal while managing costs. With Boom's help, this Aussie brand has seen significant growth without sacrificing profit.",
      },
      {
        title: "Consistent Year on Year Growth",
        body: "By understanding how Meta works and what strategies work for ecommerce brands, this business has seen year-over-year growth.",
      },
      {
        title: "What Good Meta Results Look Like",
        body: "Using the Boom Meta Method, this Aussie ecommerce brand is getting $8.37 back for every dollar spent on Meta.",
      },
    ],
  },
  partner: {
    title: "We're a Meta Business Partner",
    subhead: "We've used insights from working with Meta to develop the Boom Meta Method.",
    logos: ["Meta Business Partners"],
  },
  coachingSteps: {
    eyebrow: "Ecommerce Industry Expert",
    title: "How the Coaching Program Works",
    imageCaption:
      "Iain is a regular speaker at ecommerce retail events around Australia, like Retail Fest on the Gold Coast.",
    steps: [
      { title: "Apply", body: "Contact us to ensure we're the right fit for each other." },
      { title: "Strategy Call", body: "We'll discuss your goals and outline the Boom Meta Method." },
      { title: "Onboarding", body: "Start learning Meta and the Boom Meta Method." },
      {
        title: "Learn with Other Brands",
        body: "Join the group calls to discuss implementation and results with Iain and other brands.",
      },
      { title: "Book 1-2-1 Consulting", body: "Get access to Iain's calendar and book him any time." },
      {
        title: "Ask the Community",
        body: "Someone else has solved your problem. Ask people months or years ahead of you.",
      },
    ],
    cta: "Apply Now",
  },
  included: {
    eyebrow: "What's Included",
    title: "What's Included in Boom Ecommerce Coaching?",
    subhead: "The Boom Meta Method is part of the Boom Ecommerce Coaching program. You also get access to…",
    items: [
      {
        icon: "calendar" as const,
        title: "1:1 Coaching Sessions",
        body: "Book in a session any time you want to solve anything in ecommerce — from inventory management to hiring and everything in between.",
      },
      {
        icon: "notes" as const,
        title: "Strategic Planning Sessions",
        body: "Comprehensive sessions to map out what your business needs to reach its full potential. As many or as few as you need.",
      },
      {
        icon: "chat" as const,
        title: "Weekly Live Consulting Sessions",
        body: "Every week the community gets together on a video call to discuss what's new, what's working and what issues anyone has.",
      },
      {
        icon: "community" as const,
        title: "Private Community",
        body: "Connect with like-minded professionals in our exclusive online community. No competitors, so you can share openly.",
      },
      {
        icon: "google" as const,
        title: "Google Ads Training",
        body: "Ecommerce is so much more than just Meta ads. Learn how Google and Meta work together — a great Google Ads strategy will improve your Meta results.",
      },
      {
        icon: "playbook" as const,
        title: "Email Marketing Training",
        body: "Step-by-step guide to setting up email flows and campaigns that complement your Meta ads.",
      },
    ],
  },
  different: {
    title: "What's Different About Boom?",
    body: "We only work with 20 brands that don't compete with each other. That means no one else in your industry gets access to the Boom Meta Method, and other ecommerce brands will share openly with you about what does and doesn't work.",
    cta: "Find Out If Your Brand Can Join",
  },
  testimonials: {
    title: "What Boom Members Say",
    subhead: "Don't just take our word for it — here's what the community thinks of Boom.",
    names: ["Prue Bauer", "Jordan Bruno", "Sam Schumann"],
  },
  noLockIn: {
    title: "No Lock-In Contracts",
    body: "We don't believe in trying to lock you in for 12 months. We want you to get results and to be happy. Because we only take on brands we know we can help, our success rate is really high. If you do want to leave, it's just 30 days notice.",
  },
  faqs: [
    {
      q: "How is this different from other coaching programs?",
      a: "We only work with 20 brands that don't compete with each other. That means no one else in your industry gets access to the Boom Meta Method and other ecommerce brands will share openly with you about what does and doesn't work.",
    },
    {
      q: "How much time will I need to commit each week?",
      a: "It's only a few hours a week. However, if you need more help then you can book on-demand sessions.",
    },
    {
      q: "Will this work for my specific situation?",
      a: "The Boom Meta Method and coaching program is designed specifically for Aussie and Kiwi ecommerce brands selling to consumers who want to do the work in-house, not outsource it.",
    },
    {
      q: "How soon will I see results?",
      a: "Depending on how quickly you implement, but anywhere from 30–90 days.",
    },
    {
      q: "Do you offer payment plans?",
      a: "We offer monthly payment plans. The money you'll save on Meta advertising will outweigh the cost.",
    },
  ],
  faqFooter: "Have more questions? I'm happy to answer them personally.",
};
