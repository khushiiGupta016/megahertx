import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Headphones,
  Mic2,
  Play,
  Search,
  ShoppingBag,
  Video,
  Wrench,
} from "lucide-react";

const CREAM = "#F6F3D8";
const WHITE_CREAM = "#FBFAF4";
const DARK = "#191919";
const DEEP = "#070000";
const CARD = "#150000";
const ACCENT = "#F34E32";

const images = {
  podcastWide: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1400&q=85",
  host: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=85",
  stage: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85",
  headphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=85",
  studio: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=85",
  creator: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
  meetup: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1400&q=85",
  product: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=85",
  device: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
  cta: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=2200&q=90",
};

function Reveal({ children, className = "", delay = 0, amount = 0.18 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Button({ children, className = "" }) {
  return (
    <a
      href="#start"
      className={`group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-[6px] bg-[#F34E32] px-8 text-[15px] font-black uppercase tracking-[-0.02em] text-white shadow-[0_18px_40px_rgba(243,78,50,0.22)] transition duration-300 hover:bg-[#d93e25] focus:outline-none focus:ring-2 focus:ring-[#F34E32] focus:ring-offset-4 ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  );
}

function StartText() {
  return (
    <a href="#start" className="group inline-flex items-center gap-5 text-[16px] font-black uppercase tracking-[-0.03em] text-[#222] transition hover:text-[#F34E32]">
      <span>Start Now</span>
      <span className="h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-[2.4]" />
    </a>
  );
}

function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-7 right-7 z-50 grid h-12 w-12 place-items-center text-white mix-blend-difference transition hover:-translate-y-1"
    >
      <span className="text-4xl leading-none">↑</span>
    </a>
  );
}

function ScribbleTitle({ children, color = "#3F3F3F", stroke = "#3F3F3F", center = false }) {
  const paths = [
    "M28 72 C52 18 172 12 304 25 C420 36 480 70 445 105 C407 143 233 145 95 125 C33 116 5 93 28 72Z",
    "M18 84 C67 35 183 10 317 22 C448 34 490 83 426 119 C363 154 197 150 79 131 C24 122 -10 101 18 84Z",
    "M40 60 C112 19 265 5 391 45 C470 70 458 126 350 141 C243 157 92 134 36 105 C2 88 12 74 40 60Z",
    "M8 93 C92 42 202 19 338 34 C461 48 487 95 397 128 C311 160 139 143 55 119 C2 104 -18 80 8 93Z",
  ];

  return (
    <div className={`relative inline-block ${center ? "mx-auto" : ""}`}>
      <h2 style={{ color }} className="relative z-10 text-[clamp(3rem,5.9vw,6.2rem)] font-black leading-[0.83] tracking-[-0.08em]">
        {children}
      </h2>
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 500 170"
        className="pointer-events-none absolute -left-[10%] -top-[27%] z-0 h-[150%] w-[126%] overflow-visible"
      >
        {paths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={stroke}
            strokeWidth={index === 0 ? 1.65 : 1.15}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.86 }}
            viewport={{ once: true, amount: 0.58 }}
            transition={{ duration: 1.1, delay: index * 0.08, ease: [0.65, 0, 0.35, 1] }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

function TinyNav({ light = false }) {
  return (
    <div className={`absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-4 text-[9px] font-black uppercase tracking-[0.18em] ${light ? "text-black" : "text-white"}`}>
      <span>MGHRTZ</span>
      <div className="hidden items-center gap-5 opacity-80 sm:flex">
        <span>Homepage</span>
        <span>Episodes</span>
        <span>Videos</span>
        <span>Events</span>
        <span>Shop</span>
        <span>Blog</span>
      </div>
      <div className="flex items-center gap-3">
        <Search className="h-3 w-3" />
        <span className={`${light ? "bg-black text-white" : "bg-white text-black"} px-2 py-1 text-[7px]`}>Home</span>
      </div>
    </div>
  );
}

function HeroTile({ image, className = "" }) {
  return (
    <div className={`shrink-0 overflow-hidden rounded-[10px] bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.55)] ${className}`}>
      <img src={image} alt="Creator preview" className="h-full w-full object-cover opacity-82" />
    </div>
  );
}

function MovingHeroRow({ items, reverse = false, speed = 36, className = "" }) {
  const doubled = [...items, ...items];

  return (
    <motion.div
      className={`flex w-max gap-7 will-change-transform ${className}`}
      initial={{ x: reverse ? "-50%" : "0%" }}
      animate={{ x: reverse ? "0%" : "-50%" }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {doubled.map((tile, index) => (
        <HeroTile key={`${tile.image}-${index}`} image={tile.image} className={tile.className} />
      ))}
    </motion.div>
  );
}

function DemoGallery() {
  const rowOne = [
    { image: images.studio, className: "h-[220px] w-[370px]" },
    { image: images.podcastWide, className: "h-[220px] w-[440px]" },
    { image: images.creator, className: "h-[220px] w-[330px]" },
    { image: images.host, className: "h-[220px] w-[360px]" },
    { image: images.device, className: "h-[220px] w-[400px]" },
  ];

  const rowTwo = [
    { image: images.meetup, className: "h-[270px] w-[470px]" },
    { image: images.headphones, className: "h-[270px] w-[440px]" },
    { image: images.stage, className: "h-[270px] w-[380px]" },
    { image: images.host, className: "h-[270px] w-[360px]" },
    { image: images.product, className: "h-[330px] w-[520px]" },
  ];

  const rowThree = [
    { image: images.creator, className: "h-[235px] w-[360px]" },
    { image: images.podcastWide, className: "h-[235px] w-[470px]" },
    { image: images.device, className: "h-[235px] w-[390px]" },
    { image: images.stage, className: "h-[235px] w-[400px]" },
    { image: images.headphones, className: "h-[235px] w-[440px]" },
  ];

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#070000] text-white">
      <motion.div
        className="absolute left-1/2 top-1/2 w-[190vw] -translate-x-1/2 -translate-y-1/2 scale-[1.02] rotate-[-13deg] opacity-95"
        initial={{ opacity: 0, scale: 1.16, rotate: -13 }}
        animate={{ opacity: 1, scale: 1.02, rotate: -13 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <MovingHeroRow items={rowOne} speed={46} className="-ml-[18vw]" />
        <MovingHeroRow items={rowTwo} reverse speed={52} className="-ml-[38vw] mt-7" />
        <MovingHeroRow items={rowThree} speed={48} className="-ml-[10vw] mt-7" />
      </motion.div>

      <div className="absolute inset-0 bg-black/48" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.78))]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col items-center justify-center px-5 py-24 text-center sm:px-8 lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.8rem,11.5vw,12rem)] font-black uppercase leading-[0.78] tracking-[-0.105em] text-white"
        >
          Megahertz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[clamp(1.25rem,2.25vw,2.65rem)] italic leading-tight text-white"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Your Creative Hub for Audio &amp; Video Content
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row"
        >
          <a
            href="#demos"
            className="group inline-flex min-h-[62px] w-full items-center justify-center gap-3 rounded-[7px] border border-white/80 bg-black/20 px-9 text-[17px] font-black uppercase tracking-[-0.04em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black sm:w-[250px]"
          >
            <span>View Demos</span>
            <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <a
            href="#start"
            className="group inline-flex min-h-[62px] w-full items-center justify-center gap-3 rounded-[7px] bg-[#F34E32] px-9 text-[17px] font-black uppercase tracking-[-0.04em] text-white shadow-[0_20px_60px_rgba(243,78,50,0.35)] transition hover:bg-[#d93e25] sm:w-[250px]"
          >
            <span>Start Now</span>
            <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: DollarSign,
    title: "Save Time and Money",
    body: "Save time for your projects. MegaHertz offers a quick and professional setup, allowing you to launch your website effortlessly and cost-effectively.",
  },
  {
    icon: Wrench,
    title: "Complete Customization",
    body: "Easily adapt every element to fit your image. With MegaHertz, you have full control over colors, layouts, and content to create a unique, professional site.",
  },
  {
    icon: Video,
    title: "Ready Built-In Features",
    body: "Built with essential tools for content creators, including podcast showcase, video gallery, and visitor engagement features.",
  },
];

function HomeTemplatesHeading() {
  return (
    <Reveal>
      <div className="relative mb-11 flex flex-col gap-10">
        <div className="relative inline-flex w-fit items-center">
          <h2 className="relative z-10 text-[30px] font-black leading-none tracking-[-0.055em] text-white sm:text-[36px] lg:text-[40px]">
            Home Templates
          </h2>
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 260 82"
            className="pointer-events-none absolute -right-8 -top-4 h-[74px] w-[190px] overflow-visible opacity-80"
          >
            {[0, 1, 2, 3].map((item) => (
              <motion.ellipse
                key={item}
                cx="130"
                cy="42"
                rx={96 + item * 4}
                ry={22 + item * 2}
                fill="none"
                stroke="rgba(255,255,255,0.72)"
                strokeWidth="1.1"
                transform={`rotate(${item * 4 - 7} 130 42)`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: item * 0.08, ease: [0.65, 0, 0.35, 1] }}
              />
            ))}
          </motion.svg>
        </div>
        <div className="h-px w-full bg-white/42" />
      </div>
    </Reveal>
  );
}

function DemoPreviewCard({ title, subtitle, image, light = false, delay = 0, size = "small" }) {
  const isTop = size === "top";

  return (
    <Reveal delay={delay} amount={0.16}>
      <motion.a
        href="#start"
        whileHover={{ y: -7, scale: 1.012 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group relative block w-full overflow-hidden rounded-[7px] bg-[#120707] shadow-[0_22px_60px_rgba(0,0,0,0.42)]"
        style={{ height: isTop ? "clamp(210px, 25vw, 320px)" : "clamp(175px, 16.5vw, 225px)" }}
      >
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${light ? "opacity-100" : "opacity-90"}`}
        />
        <div className={`absolute inset-0 ${light ? "bg-black/0" : "bg-black/12"}`} />

        <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between text-[7px] font-black uppercase tracking-[0.15em] sm:left-5 sm:right-5 sm:top-5">
          <span className={light ? "text-black" : "text-white"}>MGHRTZ</span>
          <div className={`hidden items-center gap-4 ${light ? "text-black/70" : "text-white/82"} lg:flex`}>
            <span>Homepage</span>
            <span>Blog</span>
            <span>Episodes</span>
            <span>Shop</span>
            <span>Pages</span>
            <span>Events</span>
            <span>Video</span>
          </div>
          <div className="flex items-center gap-3">
            <Search className={`h-3 w-3 ${light ? "text-black" : "text-white"}`} />
            <span className={`${light ? "bg-black text-white" : "bg-white text-black"} rounded-[2px] px-2 py-1 text-[6px]`}>More</span>
          </div>
        </div>

        {subtitle && (
          <p className={`absolute left-6 top-[18%] z-10 max-w-[310px] text-[10px] font-black uppercase leading-[1.4] tracking-[-0.015em] sm:text-[12px] ${light ? "text-black" : "text-white"}`}>
            {subtitle}
          </p>
        )}

        <div className="absolute inset-x-5 bottom-5 z-10 sm:inset-x-6 sm:bottom-6">
          <h3 className={`font-black uppercase leading-[0.78] tracking-[-0.11em] ${light ? "text-black/76" : "text-white/62"} ${isTop ? "text-[clamp(2.25rem,4.6vw,4.9rem)]" : "text-[clamp(1.45rem,2.55vw,3rem)]"}`}>
            {title}
          </h3>
        </div>
      </motion.a>
    </Reveal>
  );
}

function HomeDemosSection() {
  const topDemos = [
    {
      title: "Monitz Mediabox",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=90",
      size: "top",
      light: true,
    },
    {
      title: "With Kileen Stein @ Talk With W",
      subtitle: "New episodes every Tuesday duration: 45–60 minutes",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1400&q=90",
      size: "top",
    },
  ];

  const lowerDemos = [
    {
      title: "Jane Miranda",
      image: images.stage,
      size: "small",
    },
    {
      title: "Junox",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=90",
      size: "small",
      light: true,
    },
    {
      title: "Mira Brich",
      subtitle: "Voice Actor",
      image: images.headphones,
      size: "small",
    },
    {
      title: "Honest Tech Reviews For Real People.",
      image: images.host,
      size: "small",
    },
    {
      title: "Efficiency. Simplified.",
      image: images.headphones,
      size: "small",
      light: true,
    },
    {
      title: "2024 Travel Tech",
      image: images.device,
      size: "small",
    },
  ];

  return (
    <section id="demos" className="bg-[#070000] px-5 pb-20 pt-12 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-[1320px]">
        <HomeTemplatesHeading />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-9">
          {topDemos.map((demo, index) => (
            <DemoPreviewCard key={demo.title} {...demo} delay={index * 0.045} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-9 lg:grid-cols-3 lg:gap-9">
          {lowerDemos.map((demo, index) => (
            <DemoPreviewCard key={demo.title} {...demo} delay={(index + 2) * 0.045} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-[#F6F3D8] px-5 py-20 text-[#383838] sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-16 md:grid-cols-3 md:gap-10 lg:gap-14">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={index * 0.08}>
              <article className="min-h-[300px]">
                <Icon strokeWidth={1.35} className="mb-12 h-14 w-14 text-[#626262]" />
                <h2 className="text-[24px] font-black leading-tight tracking-[-0.05em] sm:text-[28px]">{feature.title}</h2>
                <p className="mt-6 max-w-[430px] text-[16px] font-medium leading-[1.58] text-[#666] sm:text-[18px]">{feature.body}</p>
                <div className="mt-12">
                  <StartText />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ShowcaseMiniNav() {
  return (
    <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 py-4 text-[8px] font-black uppercase tracking-[0.16em] text-white/86">
      <span>MGHRTZ</span>
      <div className="hidden items-center gap-4 opacity-70 md:flex">
        <span>Home</span>
        <span>Blog</span>
        <span>Episodes</span>
        <span>Shop</span>
        <span>Pages</span>
      </div>
      <span className="rounded-[2px] bg-white px-2 py-1 text-[6px] text-black">More</span>
    </div>
  );
}

function SponsorCard() {
  const logos = ["Advance Media", "Abstract Logo", "Energy", "Abstract Logo", "Workspace", "Energy"];

  return (
    <motion.article whileHover={{ y: -8 }} className="inner-showcase-card h-[392px] w-[270px] lg:h-[430px] lg:w-[310px]">
      <ShowcaseMiniNav />
      <div className="h-[38%] overflow-hidden">
        <img src={images.studio} alt="Sponsors preview" className="h-full w-full object-cover opacity-55" />
      </div>
      <div className="grid h-[62%] grid-cols-2 content-center gap-x-9 gap-y-9 bg-[#090202] px-9 py-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-3 text-white/82">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/50 text-[10px]">✦</span>
            <span className="text-[10px] font-black uppercase leading-[1.1] tracking-[0.18em]">{logo}</span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function StudioCard() {
  return (
    <motion.article whileHover={{ y: -8 }} className="inner-showcase-card h-[392px] w-[270px] lg:h-[430px] lg:w-[310px]">
      <ShowcaseMiniNav />
      <div className="relative h-[38%] overflow-hidden">
        <img src={images.stage} alt="Studio header" className="h-full w-full object-cover opacity-65" />
        <h3 className="absolute -bottom-3 left-6 text-[76px] font-black uppercase leading-none tracking-[-0.12em] text-white/35">Teen</h3>
      </div>
      <div className="bg-[#080000] p-7 text-white">
        <div className="grid grid-cols-2 gap-7 text-[11px] leading-[1.45] text-white/76">
          <div>
            <p className="mb-3 text-[12px] font-black text-white">Creator Lab</p>
            <p>PulseHeadphones • Leading Audio Brands • Creator-first workspace</p>
          </div>
          <div>
            <p className="mb-3 text-[12px] font-black text-white">Studio</p>
            <p>MegaHertz Studio<br />123 Tech District Avenue<br />United States</p>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <img src={images.podcastWide} alt="Studio one" className="h-[86px] w-full rounded-[4px] object-cover" />
          <img src={images.creator} alt="Studio two" className="h-[86px] w-full rounded-[4px] object-cover" />
        </div>
      </div>
    </motion.article>
  );
}

function ComingSoonCard() {
  return (
    <motion.article whileHover={{ y: -8 }} className="inner-showcase-card relative h-[392px] w-[270px] lg:h-[430px] lg:w-[310px]">
      <img src={images.headphones} alt="Coming soon" className="h-full w-full object-cover opacity-78" />
      <div className="absolute inset-0 bg-black/28" />
      <ShowcaseMiniNav />
      <div className="absolute inset-x-6 bottom-12 text-white">
        <h3 className="text-[42px] font-black uppercase leading-[0.88] tracking-[-0.08em] lg:text-[50px]">Coming Soon!</h3>
        <p className="mt-3 text-[13px] font-black">Stay tuned for the big reveal!</p>
      </div>
    </motion.article>
  );
}

function PressCard() {
  return (
    <motion.article whileHover={{ y: -8 }} className="inner-showcase-card h-[392px] w-[270px] lg:h-[430px] lg:w-[310px]">
      <ShowcaseMiniNav />
      <div className="h-[35%] overflow-hidden">
        <img src={images.host} alt="Press and media" className="h-full w-full object-cover opacity-62" />
      </div>
      <div className="bg-[#080000] p-7 text-white">
        <h3 className="text-[14px] font-black">Press &amp; Media</h3>
        <p className="mt-4 max-w-[220px] text-[11px] font-semibold leading-[1.35] text-white/76">
          For interviews, press features, tech reviews, or access to our media kit, contact us here.
        </p>
        <div className="mt-6 space-y-4 text-[9px] font-bold uppercase tracking-[0.08em] text-white/70">
          <div className="border-b border-white/25 pb-2">Name</div>
          <div className="grid grid-cols-2 gap-5">
            <div className="border-b border-white/25 pb-2">Email</div>
            <div className="border-b border-white/25 pb-2">Phone</div>
          </div>
          <div className="border-b border-white/25 pb-7">Message</div>
        </div>
        <button className="mt-5 h-8 w-full rounded-[3px] bg-[#F34E32] text-right pr-5 text-[8px] font-black uppercase text-white">Send</button>
      </div>
    </motion.article>
  );
}

function FAQCard() {
  const questions = [
    "Is demo content included?",
    "Is it easy to install?",
    "Can I easily change colors?",
    "Do you offer support for this theme?",
    "What if my shipment gets lost?",
    "Is it the perfect theme for me?",
  ];
  return (
    <motion.article whileHover={{ y: -8 }} className="inner-showcase-card h-[392px] w-[270px] lg:h-[430px] lg:w-[310px]">
      <ShowcaseMiniNav />
      <div className="h-[68%] bg-[#080000] pt-16 text-white">
        {questions.map((question) => (
          <div key={question} className="border-b border-white/18 px-8 py-4 text-[11px] font-black leading-tight text-white/82">{question}</div>
        ))}
      </div>
      <div className="relative grid h-[32%] place-items-end overflow-hidden bg-[#101310] p-7 text-white">
        <h3 className="text-[24px] font-black leading-[0.95] tracking-[-0.055em]">Join Our Podcast Family</h3>
        <div className="pointer-events-none absolute bottom-5 left-16 h-12 w-40 rounded-[50%] border border-white/50 rotate-[-8deg]" />
      </div>
    </motion.article>
  );
}

function SubscribeCard() {
  return (
    <motion.article whileHover={{ y: -8 }} className="inner-showcase-card h-[392px] w-[270px] lg:h-[430px] lg:w-[310px]">
      <ShowcaseMiniNav />
      <div className="relative h-full overflow-hidden">
        <img src={images.podcastWide} alt="Subscribe page" className="h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-black/46" />
        <div className="absolute inset-x-7 bottom-8 text-white">
          <p className="text-[12px] font-black uppercase tracking-[0.16em] text-white/62">Join Our Podcast Family</p>
          <h3 className="mt-5 text-[36px] font-black leading-[0.88] tracking-[-0.08em]">Published System Pages That Keep Your Brand Consistent</h3>
          <button className="mt-7 rounded-[4px] bg-[#F34E32] px-5 py-3 text-[10px] font-black uppercase">Subscribe Now</button>
        </div>
      </div>
    </motion.article>
  );
}

function InnerPagesShowcase() {
  const cards = [
    <SponsorCard key="sponsors" />,
    <StudioCard key="studio" />,
    <ComingSoonCard key="coming" />,
    <PressCard key="press" />,
    <FAQCard key="faq" />,
    <SubscribeCard key="subscribe" />,
  ];

  return (
    <section className="relative overflow-hidden bg-[#1b1b1b] px-5 pb-24 pt-20 text-[#F6F3D8] sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mx-5 overflow-visible sm:-mx-8 lg:-mx-10"
        >
          <div className="flex items-start gap-5 overflow-visible pl-5 sm:gap-6 sm:pl-8 lg:gap-8 lg:pl-10">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.78, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                {card}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 grid gap-14 lg:mt-24 lg:grid-cols-2 lg:gap-24">
          <Reveal amount={0.28}>
            <div className="max-w-[460px]">
              <h2 className="text-[32px] font-black leading-tight tracking-[-0.06em] sm:text-[40px]">Inner Pages</h2>
              <p className="mt-4 text-[19px] font-black leading-[1.45] tracking-[-0.035em] text-[#F6F3D8]/95 sm:text-[24px]">
                Build Trust and Tell Your Story with Ready-to-Use Inner Pages
              </p>
            </div>
          </Reveal>

          <Reveal amount={0.28} delay={0.08}>
            <div className="max-w-[460px] lg:ml-auto">
              <h2 className="text-[32px] font-black leading-tight tracking-[-0.06em] sm:text-[40px]">Utility Pages</h2>
              <p className="mt-4 text-[19px] font-black leading-[1.45] tracking-[-0.035em] text-[#F6F3D8]/95 sm:text-[24px]">
                Polished System Pages That Keep Your Brand Consistent
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BrowserFrame({ variant = "episodes", large = false }) {
  const data = {
    episodes: {
      main: images.meetup,
      small: [images.host, images.studio, images.creator, images.headphones, images.device, images.podcastWide],
      title: "Episode 10: Concert Tech — How Live Shows Are Evolving",
      accent: "#b80000",
    },
    videos: {
      main: images.device,
      small: [images.creator, images.studio, images.headphones, images.meetup],
      title: "2024 Travel Tech",
      accent: "#f30026",
    },
    events: {
      main: images.stage,
      small: [images.meetup, images.host, images.creator, images.studio],
      title: "National Comedy Tour — Boston",
      accent: "#F34E32",
    },
    shop: {
      main: images.product,
      small: [images.product, images.headphones, images.device, images.studio],
      title: "MGHRTZ Premium Hoodie",
      accent: "#F34E32",
    },
  }[variant];

  if (variant === "shop") {
    return (
      <div className={`relative overflow-hidden rounded-[8px] bg-[#080000] text-white shadow-[0_22px_55px_rgba(0,0,0,0.32)] ${large ? "h-[500px] w-full" : "h-[360px] w-full"}`}>
        <TinyNav />
        <div className="grid h-full grid-cols-[1fr_0.95fr] pt-16">
          <div className="grid grid-rows-3 gap-[2px] bg-white/5">
            <img src={data.main} alt="Product" className="h-full w-full object-cover grayscale" />
            <img src={data.main} alt="Product detail" className="h-full w-full object-cover grayscale" />
            <img src={data.main} alt="Product detail" className="h-full w-full object-cover grayscale" />
          </div>
          <div className="p-8">
            <h3 className="mt-12 text-[22px] font-black">{data.title}</h3>
            <p className="mt-3 text-sm font-black text-[#F34E32]">$29.90</p>
            <p className="mt-7 text-xs leading-6 text-white/62">A soft creator hoodie designed for studio days, video sets, and podcast launches.</p>
            <div className="mt-7 flex gap-2">
              {["S", "M", "L", "XL"].map((s) => <span key={s} className="grid h-8 w-8 place-items-center border border-white/20 text-xs">{s}</span>)}
            </div>
            <button className="mt-7 w-full rounded-[4px] bg-[#F34E32] py-4 text-xs font-black uppercase">Add to cart</button>
            <div className="mt-10 space-y-4 text-sm font-bold text-white/70">
              <p className="border-t border-white/15 pt-4">Description</p>
              <p className="border-t border-white/15 pt-4">Additional Information</p>
              <p className="border-t border-white/15 pt-4">Reviews (1)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[8px] bg-[#080000] text-white shadow-[0_22px_55px_rgba(0,0,0,0.32)] ${large ? "h-[500px] w-full" : "h-[360px] w-full"}`}>
      <TinyNav />
      <div className="h-full pt-16">
        {variant === "episodes" && (
          <div className="mx-6 mb-5 grid h-[104px] grid-cols-[130px_1fr_170px] overflow-hidden rounded-sm bg-[#b80000]">
            <div className="grid place-items-center bg-white p-4 text-center text-2xl font-black leading-none text-[#b80000]">TED<br />TALKS<br />DAILY</div>
            <div className="flex flex-col justify-center px-7">
              <p className="text-[12px] font-bold text-white/70">daily practice that could rewire your brain</p>
              <div className="mt-4 h-1.5 w-full bg-white/18"><div className="h-full w-[68%] bg-white" /></div>
            </div>
            <div className="flex items-center p-5 text-[18px] font-black leading-tight">{data.title}</div>
          </div>
        )}

        {variant === "videos" && (
          <div className="mx-6 grid grid-cols-[1fr_180px] gap-5">
            <div className="relative h-[220px] overflow-hidden rounded-sm">
              <img src={data.main} alt="Video player" className="h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-16 w-16 place-items-center rounded-full border border-white/70 bg-black/35"><Play className="ml-1 h-7 w-7 fill-white" /></div>
              </div>
              <p className="absolute bottom-7 left-8 text-3xl font-black uppercase tracking-[-0.08em]">{data.title}</p>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-black uppercase text-white/50">New Products</p>
              {data.small.slice(0, 4).map((img, idx) => (
                <div key={idx} className="flex gap-2">
                  <img src={img} alt="Product" className="h-12 w-12 object-cover" />
                  <div className="h-2.5 flex-1 bg-white/16" />
                </div>
              ))}
            </div>
          </div>
        )}

        {variant !== "videos" && variant !== "episodes" && (
          <div className="mx-6">
            <img src={data.main} alt="Main screen" className="h-[245px] w-full rounded-sm object-cover opacity-78" />
            <div className="mt-5 grid grid-cols-[160px_1fr] gap-7">
              <div className="space-y-3 text-[11px] font-bold text-white/60">
                <button className="rounded-[3px] bg-[#F34E32] px-5 py-3 text-white">Tickets</button>
                <p>Venue</p>
                <p>Date</p>
                <p>Speaker</p>
              </div>
              <div>
                <h3 className="text-[24px] font-black leading-tight tracking-[-0.05em]">{data.title}</h3>
                <p className="mt-4 text-xs leading-5 text-white/55">Crafted for connection, schedule clarity, and audience engagement.</p>
              </div>
            </div>
          </div>
        )}

        {variant === "episodes" && (
          <div className="mx-6 grid grid-cols-[1fr_1.45fr] gap-5">
            <img src={images.podcastWide} alt="Podcast" className="h-[290px] w-full object-cover" />
            <div className="grid grid-cols-3 gap-3">
              {data.small.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden">
                  <img src={img} alt="Episode" className="h-full min-h-[132px] w-full object-cover opacity-75" />
                  <p className="absolute bottom-3 left-3 right-3 text-[12px] font-black leading-tight">Episode {idx + 1}: The Future of Audio</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MockupStack({ variant, side = "right", theme = "light" }) {
  const isLeft = side === "left";
  return (
    <div className="relative min-h-[540px] w-full">
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute top-[6%] w-[72%] ${isLeft ? "left-[5%]" : "right-[6%]"}`}
      >
        <BrowserFrame variant={variant} large />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 90, x: isLeft ? 80 : -80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 0.9, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute top-[28%] w-[74%] ${isLeft ? "left-[23%]" : "right-[1%]"}`}
      >
        <BrowserFrame variant={variant === "episodes" ? "episodes" : variant} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8, delay: 0.24 }}
        className={`absolute bottom-[11%] h-px w-[58%] origin-left ${theme === "dark" ? "bg-white/20" : "bg-black/15"} ${isLeft ? "left-[5%]" : "right-[8%]"}`}
      />
    </div>
  );
}

const sections = [
  {
    id: "episodes",
    title: "Episodes",
    variant: "episodes",
    bg: CREAM,
    color: "#3E3E3E",
    stroke: "#555",
    text: "Craft episodic content with style. MegaHertz gives you flexible layouts, audio/video embeds, and intuitive navigation so your audience can follow your show effortlessly.",
    side: "right",
  },
  {
    id: "videos",
    title: "Videos",
    variant: "videos",
    bg: DEEP,
    color: "#FFFFFF",
    stroke: "#FFFFFF",
    text: "Showcase your visuals with impact. From cinematic presentations to quick clips, MegaHertz delivers immersive video pages built to highlight creativity and keep viewers engaged.",
    side: "left",
    dark: true,
  },
  {
    id: "events",
    title: "Events",
    variant: "events",
    bg: CREAM,
    color: "#3E3E3E",
    stroke: "#555",
    text: "Promote your upcoming dates with clarity. Whether it’s a live recording, workshop, or performance, MegaHertz provides polished event pages that make your schedule easy to explore.",
    side: "right",
  },
  {
    id: "shop",
    title: "Shop & Blog",
    variant: "shop",
    bg: WHITE_CREAM,
    color: "#3E3E3E",
    stroke: "#555",
    text: "Share your ideas and sell your products in one place. MegaHertz offers streamlined blog layouts and a modern store experience designed to grow your brand and revenue.",
    side: "left",
  },
];

function FeatureSection({ section }) {
  const imageFirst = section.side === "left";
  const line = section.dark ? "bg-white/24" : "bg-black/22";
  const textColor = section.dark ? "text-white" : "text-[#3F3F3F]";
  const paraColor = section.dark ? "text-white/88" : "text-[#686868]";

  return (
    <section id={section.id} style={{ backgroundColor: section.bg }} className={`overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-32 ${textColor}`}>
      <div className={`mx-auto grid max-w-[1760px] items-center gap-14 lg:grid-cols-2 lg:gap-20 ${imageFirst ? "" : ""}`}>
        <div className={`${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
          <Reveal>
            <ScribbleTitle color={section.color} stroke={section.stroke}>{section.title}</ScribbleTitle>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-9 h-px w-full origin-left ${line}`}
            />
            <p className={`mt-8 max-w-[700px] text-[18px] font-semibold leading-[1.55] tracking-[-0.025em] sm:text-[23px] ${paraColor}`}>{section.text}</p>
            <div className="mt-12">
              <Button>Start Now</Button>
            </div>
          </Reveal>
        </div>
        <div className={`${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
          <MockupStack variant={section.variant} side={section.side} theme={section.dark ? "dark" : "light"} />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    kicker: "Beautiful Work",
    quote: "At first I had trouble installing the theme, they helped me and I am delighted. I love the theme, it is exactly what I wanted as a design, it is great to use. It is beautiful work! I recommend without hesitation. Thanks to them!",
    name: "pascale pajoul",
    location: "Morvan",
  },
  {
    kicker: "Great Theme",
    quote: "Great theme can do a lot with, got plenty of features and is easy to configure. Support is great i had some problems as a wordpress newbie but support solved everything.",
    name: "kontakt952",
    location: "Gaintab",
  },
  {
    kicker: "Happy Experience",
    quote: "I'm happy to say the setup has been quite positive. The site runs smoothly, looks polished, and gives creators a strong visual identity.",
    name: "JW_2022",
    location: "Vanzof",
  },
  {
    kicker: "Solid Theme",
    quote: "A solid theme for my media company website. I had a small issue and support was quick to fix it. It makes the addition of another simple and looks good out of the box.",
    name: "Harranh",
    location: "Toronto",
  },
  {
    kicker: "Clean Design",
    quote: "Beautifully made layouts, clear sections, and strong typography. It gives the brand a professional podcast identity immediately.",
    name: "studio wave",
    location: "Berlin",
  },
  {
    kicker: "Works Very Well",
    quote: "The design works very well for audio creators. Pages feel modern and focused, and the visual rhythm keeps visitors moving.",
    name: "northern media",
    location: "London",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  const prev = testimonials[(active - 1 + testimonials.length) % testimonials.length];
  const next = testimonials[(active + 1) % testimonials.length];

  return (
    <section id="testimonials" className="overflow-hidden bg-[#F6F3D8] px-5 pb-12 pt-14 text-[#3F3F3F] sm:px-8 lg:px-10 lg:pb-14 lg:pt-16">
      <Reveal className="text-center">
        <ScribbleTitle color="#3F3F3F" stroke="#4E4E4E" center>Testimonials</ScribbleTitle>
        <p className="mx-auto mt-5 max-w-[620px] text-[16px] italic leading-6 text-[#656565] sm:text-[18px]" style={{ fontFamily: "Georgia, serif" }}>
          See What Our Users Have to Say About the WolfThemes Experience
        </p>
      </Reveal>

      <div className="relative mx-auto mt-7 max-w-[820px] overflow-visible">
        <div className="grid grid-cols-[72px_minmax(0,560px)_72px] justify-center gap-3 md:grid-cols-[96px_minmax(0,560px)_96px]">
          {[prev, current, next].map((item, index) => {
            const isCenter = index === 1;
            return (
              <motion.article
                key={`${item.name}-${active}-${index}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: isCenter ? 1 : 0.28, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`min-h-[180px] rounded-[8px] bg-[#160000] p-5 text-white sm:p-6 lg:min-h-[205px] lg:p-6 ${isCenter ? "" : "overflow-hidden blur-[0.1px]"}`}
              >
                <p className="text-[15px] italic text-white/75 sm:text-[17px]" style={{ fontFamily: "Georgia, serif" }}>{item.kicker}</p>
                <p className={`mt-4 font-black leading-[1.34] tracking-[-0.055em] ${isCenter ? "text-[16px] sm:text-[19px] lg:text-[21px]" : "text-[18px] opacity-45"}`}>
                  {item.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-[46px] w-[46px] place-items-center rounded-full bg-[#182018] text-[#8CFF58]">
                    <span className="text-2xl font-black italic">ξ</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold tracking-[-0.03em] sm:text-[16px]">{item.name}</p>
                    <p className="mt-1 text-[14px] font-semibold text-white/60 sm:text-[16px]">{item.location}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="rounded-full border border-black/40 px-3 py-1 text-[14px] font-medium leading-none text-black">
            {active + 1} / {testimonials.length}
          </div>
          <div className="flex items-center gap-4 text-black">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setActive((value) => (value - 1 + testimonials.length) % testimonials.length)}
              className="transition hover:-translate-x-1 hover:text-[#F34E32]"
            >
              <ChevronLeft className="h-8 w-8 stroke-[1.25]" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setActive((value) => (value + 1) % testimonials.length)}
              className="transition hover:translate-x-1 hover:text-[#F34E32]"
            >
              <ChevronRight className="h-8 w-8 stroke-[1.25]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAFooter() {
  return (
    <footer id="start" className="relative overflow-hidden bg-[#070000] text-white">
      <section className="relative min-h-screen px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <img src={images.cta} alt="Podcast microphones studio" className="absolute inset-0 h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-black/52" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_52%,rgba(255,200,75,0.32),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.85),transparent_45%,rgba(0,0,0,0.48))]" />

        <Reveal className="relative z-10 mx-auto flex min-h-[calc(100vh-14rem)] max-w-[1500px] flex-col justify-center text-center">
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 lg:mb-20">
            <p className="text-[20px] font-black uppercase tracking-[-0.04em] sm:text-[24px]">Megahertz</p>
            <p className="text-[20px] font-bold italic sm:text-[24px]" style={{ fontFamily: "Georgia, serif" }}>For Audio & Video Content Creators</p>
          </div>
          <h2 className="mx-auto max-w-[1180px] text-[clamp(2.35rem,5vw,5.35rem)] font-black uppercase leading-[1.06] tracking-[-0.07em]">
            More than a theme.<br />A complete creator platform.
          </h2>
          <p className="mx-auto mt-8 max-w-[760px] text-[clamp(1.15rem,1.55vw,1.85rem)] font-black leading-tight tracking-[-0.045em]">
            Build a Professional Website That Grow with your Show
          </p>
          <div className="mt-12 flex justify-center">
            <Button className="min-h-[60px] px-9 text-[16px]">Get Megahertz Now</Button>
          </div>
        </Reveal>

        <div className="relative z-10 mx-auto mt-10 flex max-w-[1500px] flex-col gap-8 border-t border-white/15 pb-6 pt-8 text-white/70 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[520px] text-[17px] font-medium leading-[1.55] text-white/52 sm:text-[19px]">
            With over a decade of experience in crafting high-quality WordPress themes, I'm dedicated to helping creative professionals showcase their talent online.
          </p>
          <nav className="flex flex-wrap gap-x-7 gap-y-4 text-[11px] font-black uppercase tracking-[0.16em] text-white/65">
            <a href="#episodes" className="hover:text-[#F34E32]">Episodes</a>
            <a href="#videos" className="hover:text-[#F34E32]">Videos</a>
            <a href="#events" className="hover:text-[#F34E32]">Events</a>
            <a href="#shop" className="hover:text-[#F34E32]">Shop</a>
            <a href="#testimonials" className="hover:text-[#F34E32]">Reviews</a>
          </nav>
        </div>
      </section>
    </footer>
  );
}

function MobileNote() {
  return (
    <div className="fixed left-3 top-3 z-[60] hidden rounded-full bg-[#111]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-xl backdrop-blur-sm sm:hidden">
      MegaHertz
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#070000] antialiased selection:bg-[#F34E32] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Manrope, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #070000; }
        * { box-sizing: border-box; }
        .home-templates-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 34px;
        }
        .home-template-card-wrap--top {
          grid-column: span 6;
        }
        .home-template-card-wrap--small {
          grid-column: span 4;
        }
        .home-template-card {
          position: relative;
          display: block;
          overflow: hidden;
          border-radius: 7px;
          background: #120707;
          box-shadow: 0 22px 60px rgba(0,0,0,0.42);
          width: 100%;
        }
        .home-template-card--top {
          height: clamp(250px, 30vw, 390px);
        }
        .home-template-card--small {
          height: clamp(210px, 20vw, 270px);
        }
        .home-template-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .home-template-card__title {
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.78;
          letter-spacing: -0.11em;
        }
        .home-template-card__title--top {
          font-size: clamp(3rem, 6.2vw, 6.8rem);
        }
        .home-template-card__title--small {
          font-size: clamp(2.1rem, 3.35vw, 4.3rem);
        }
        @media (max-width: 900px) {
          .home-templates-grid { grid-template-columns: 1fr; gap: 24px; }
          .home-template-card-wrap--top,
          .home-template-card-wrap--small { grid-column: span 1; }
          .home-template-card--top,
          .home-template-card--small { height: 260px; }
        }
        img { display: block; }
        @media (max-width: 1023px) {
          .grid-cols-\[72px_minmax\(0\,560px\)_72px\], .md\:grid-cols-\[96px_minmax\(0\,560px\)_96px\] { grid-template-columns: minmax(0, 560px) !important; justify-content: center; }
          .grid-cols-\[72px_minmax\(0\,560px\)_72px\] article:first-child,
          .grid-cols-\[72px_minmax\(0\,560px\)_72px\] article:last-child { display: none; }
        }
      `}</style>
      <MobileNote />
      <BackToTop />
      <DemoGallery />
      <HomeDemosSection />
      <Features />
      <InnerPagesShowcase />
      {sections.map((section) => (
        <FeatureSection key={section.id} section={section} />
      ))}
      <Testimonials />
      <CTAFooter />
    </main>
  );
}
