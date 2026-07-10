const crossMarks = [
  "left-[12%] top-[12%]",
  "right-[10%] top-[19%]",
  "right-[8%] bottom-[12%]",
  "left-[6%] bottom-[6%]",
];

export default function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden select-none"
    >
      <div
        className="absolute inset-0 opacity-[0.4] text-muted"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute top-[-18%] right-[-8%] h-[620px] w-[620px] rounded-full border border-accent/10" />
      <div className="absolute top-[-10%] right-[2%] h-[420px] w-[420px] rounded-full border border-accent/15" />
      <div className="absolute right-[16%] bottom-[-15%] h-[360px] w-[360px] rounded-full border border-edge" />

      <div className="absolute top-1/4 right-[8%] font-display text-[420px] leading-none font-black text-accent/[0.06]">
        M
      </div>

      {crossMarks.map((position) => (
        <span
          key={position}
          className={`absolute ${position} font-mono text-sm text-muted/60`}
        >
          +
        </span>
      ))}
    </div>
  );
}
