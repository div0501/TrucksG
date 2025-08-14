import Link from "next/link";

export default function Button({
  children,
  href,
  variant = 'solid',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) {
  const baseClasses = [
    "inline-flex items-center justify-center gap-2 font-medium",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "transition-all duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "relative overflow-hidden"
  ].join(" ");

  const sizeClasses = {
    sm: "px-3 py-2 text-sm rounded-md",
    md: "px-4 py-2.5 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-lg"
  };

  const variantStyles = {
    solid: {
      backgroundColor: "var(--color-primary)",
      color: "white",
      borderColor: "var(--color-primary)",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--color-text)",
      borderColor: "var(--color-border)",
      border: "1px solid"
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--color-text)",
    }
  };

  const hoverStyles = {
    solid: "hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0",
    outline: "hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm",
    ghost: "hover:bg-gray-50"
  };

  const focusRingStyles = {
    solid: "focus-visible:ring-primary/50",
    outline: "focus-visible:ring-primary/50",
    ghost: "focus-visible:ring-primary/50"
  };

  const combinedClassName = [
    baseClasses,
    sizeClasses[size],
    hoverStyles[variant],
    focusRingStyles[variant],
    className
  ].join(" ");

  const LoadingSpinner = () => (
    <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
  );

  const buttonContent = (
    <>
      {loading && <LoadingSpinner />}
      <span className={loading ? "opacity-70" : ""}>{children}</span>
      {variant === 'solid' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
      )}
    </>
  );

  const commonProps = {
    className: combinedClassName,
    style: variantStyles[variant],
    disabled: disabled || loading,
    'aria-label': ariaLabel,
    ...props
  };

  if (href && !disabled) {
    return (
      <Link href={href} className={`${combinedClassName} group`} style={variantStyles[variant]} aria-label={ariaLabel}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button {...commonProps} className={`${combinedClassName} group`}>
      {buttonContent}
    </button>
  );
}
