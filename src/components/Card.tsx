interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 ${
        hover 
          ? "hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5" 
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

