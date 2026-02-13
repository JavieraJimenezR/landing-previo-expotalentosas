import { Heart } from 'lucide-react';

export function MatchHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-magenta opacity-60 heart-pop"
          style={{
            left: `${20 + i * 15}%`,
            top: `${40 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.3}s`,
            width: '20px',
            height: '20px',
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
}
