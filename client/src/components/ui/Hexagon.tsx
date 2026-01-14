import { cn } from "@/lib/utils";

interface HexagonProps {
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'outline' | 'ghost';
  color?: 'gold' | 'yellow' | 'orange' | 'black' | 'white';
  animate?: boolean;
  onClick?: () => void;
}

const sizeClasses = {
  sm: 'w-12 h-14',
  md: 'w-20 h-24',
  lg: 'w-32 h-36',
  xl: 'w-48 h-56',
};

export function Hexagon({
  className,
  children,
  size = 'md',
  variant = 'solid',
  color = 'gold',
  animate = false,
  onClick,
}: HexagonProps) {
  const colorMap = {
    gold: {
      solid: 'bg-bhive-gold text-bhive-black',
      outline: 'border-2 border-bhive-gold text-bhive-gold bg-transparent',
      ghost: 'bg-bhive-gold/10 text-bhive-gold',
    },
    yellow: {
      solid: 'bg-bhive-yellow text-white',
      outline: 'border-2 border-bhive-yellow text-bhive-yellow bg-transparent',
      ghost: 'bg-bhive-yellow/10 text-bhive-yellow',
    },
    orange: {
      solid: 'bg-bhive-orange text-white',
      outline: 'border-2 border-bhive-orange text-bhive-orange bg-transparent',
      ghost: 'bg-bhive-orange/10 text-bhive-orange',
    },
    black: {
      solid: 'bg-bhive-black text-white',
      outline: 'border-2 border-bhive-black text-bhive-black bg-transparent',
      ghost: 'bg-bhive-black/10 text-bhive-black',
    },
    white: {
      solid: 'bg-white text-bhive-black',
      outline: 'border-2 border-white text-white bg-transparent',
      ghost: 'bg-white/10 text-white',
    },
  };

  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        sizeClasses[size],
        animate && 'animate-pulse-glow',
        onClick && 'cursor-pointer transition-transform hover:scale-105',
        className
      )}
      onClick={onClick}
      style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}
    >
      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center',
          colorMap[color][variant]
        )}
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function HexagonIcon({
  className,
  color = 'currentColor',
  size = 24,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
        fill={color}
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
}

export function HoneycombPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none opacity-5',
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104' viewBox='0 0 60 104'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f6c614' fill-opacity='1'%3E%3Cpath d='M30 0l30 17.32v34.64L30 69.28 0 51.96V17.32L30 0zm0 5.77l-25 14.43v28.86l25 14.43 25-14.43V20.2L30 5.77zm0 34.64l-15-8.66v-17.32l15-8.66 15 8.66v17.32l-15 8.66z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 104px',
      }}
    />
  );
}
