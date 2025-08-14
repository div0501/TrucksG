export default function Card({ 
  children, 
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  ...props 
}) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const variantStyles = {
    default: {
      backgroundColor: 'var(--color-surface)',
      borderColor: 'var(--color-border)',
      boxShadow: 'var(--shadow-sm)'
    },
    elevated: {
      backgroundColor: 'var(--color-background)',
      borderColor: 'var(--color-border)',
      boxShadow: 'var(--shadow-md)'
    },
    outlined: {
      backgroundColor: 'var(--color-background)',
      borderColor: 'var(--color-border)',
      boxShadow: 'none'
    }
  };

  const hoverClasses = hover 
    ? "hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300 cursor-pointer" 
    : "";

  const baseClasses = [
    "rounded-xl border transition-all duration-200 ease-out",
    paddingClasses[padding],
    hoverClasses,
    className
  ].join(" ");

  return (
    <div 
      className={baseClasses}
      style={variantStyles[variant]}
      {...props}
    >
      {children}
    </div>
  );
}
