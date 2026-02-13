import { Calendar, ChevronDown } from 'lucide-react';
import { addExpoTalentosasToCalendar } from '../utils/calendarUtils';

interface AddToCalendarButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AddToCalendarButton({ 
  variant = 'secondary', 
  size = 'md',
  className = '' 
}: AddToCalendarButtonProps) {
  
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary text-white border-2 border-primary shadow-[4px_4px_0px_0px_hsl(var(--accent))] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary/5',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const handleClick = () => {
    addExpoTalentosasToCalendar();
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label="Agregar Expo Talentosas a mi calendario"
    >
      <Calendar className="w-5 h-5" />
      <span>Agregar al Calendario</span>
      <ChevronDown className="w-4 h-4" />
    </button>
  );
}
