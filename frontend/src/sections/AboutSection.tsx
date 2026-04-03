import Section from "../components/SectionProp";

export default function AboutSection() {
  return (
    <Section bgColor="bg-white" overlay="" id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbHDIG80AGXY2EJoBZCGIuIBeLCLdo38ehQtPu66XBzE60NRyaRVDXLGz64H41UmjPjhz84Zv20cOTKq7lgmq7B6m5e7XEcqYzwTnWVrk9Eh3vautcGT24wFESDQZIHvCgS_j-kczsJ-MQjRYUDYe3umjjn9r4X5Z0eEr4RaTY84gS72WQwpZ7p5ae-2i7cPxOFGf8ykv3kPraaBqCImx1wiSpjEhcN7uubGDsi60PKjfZn-ZrcGoHz-n8OQKDleYnZS6W36HmLftx"
              alt="Open Bible on a dark wood table with candlelight"
              loading="lazy"
            />
          </div>
          {/* Floating stat */}
          <div className="absolute -bottom-8 -right-8 w-30 h-fit aspect-square bg-surface-container-high p-8 flex flex-col justify-end rounded-lg shadow-2xl">
            <p className="font-headline text-4xl text-tertiary italic">20+</p>
            <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">
              Years of Community
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-10">
          <span className="text-tertiary font-label text-sm tracking-[0.3em] uppercase">
            About Our Parish
          </span>
          <h2 className="font-headline text-5xl md:text-6xl text-foreground leading-tight">
            Rooted in Tradition, <br />
            <span className="italic">Built for the Future.</span>
          </h2>
          <div className="space-y-6 font-body text-on-surface-variant leading-relaxed text-lg">
            <p>
              At RCCG LP17 HQ, we believe in creating a space where the ancient truths of
              scripture meet the complexities of modern life. Our mission is to raise a generation
              of believers who are spiritually vibrant and socially relevant.
            </p>
            <p>
              Whether you are seeking answers, looking for a community, or searching for a home,
              you are welcome here. We are more than a church; we are a family dedicated to the
              pursuit of God's presence.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="text-tertiary font-bold tracking-widest uppercase text-xs border-b border-tertiary pb-1 hover:text-foreground hover:border-foreground transition-all duration-300"
            >
              Read Our Vision
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
