type SectionProps = {
  children: React.ReactNode;
  bgColor?: string;
  bgImage?: string;
  bgPosition?: string;
  bgSize?: string;
  overlay?: string;
  className?: string;
  id?: string | undefined;
};

export default function Section({
  children,
  id,
  bgColor = "bg-white",
  bgImage,
  bgPosition = "center",
  bgSize = "cover",
  overlay = "",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 ${bgColor} ${className ?? ""}`.trim()}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: bgSize,
              backgroundPosition: bgPosition,
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {overlay && (
        <div className={`absolute inset-0 ${overlay}`} />
      )}

      <div className="relative max-w-6xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}