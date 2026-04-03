type SectionProps = {
  children: React.ReactNode;
  bgColor?: string;
  bgImage?: string;
  overlay?: string;
  className?: string;
  id?: string | undefined;
};

export default function Section({
  children,
    id,
  bgColor = "bg-white",
  bgImage,
  overlay = "bg-gradient-to-l from-black/70 via-black/50 to-transparent"
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 ${bgColor}`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {bgImage && (
        <div className={`absolute inset-0 ${overlay}`} />
      )}

      <div className="relative max-w-6xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}