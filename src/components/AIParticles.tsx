export function AIParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      {/* Conexiones entre partículas */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="hsl(var(--magenta))" strokeWidth="1" />
        <line x1="50%" y1="20%" x2="60%" y2="80%" stroke="hsl(var(--accent))" strokeWidth="1" />
        <line x1="30%" y1="60%" x2="70%" y2="40%" stroke="hsl(var(--pink))" strokeWidth="1" />
      </svg>
    </div>
  );
}
