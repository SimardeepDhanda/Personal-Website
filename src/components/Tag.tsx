interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white text-gray-700 border border-gray-200 transition-colors ${className}`}
    >
      {children}
    </span>
  );
}

