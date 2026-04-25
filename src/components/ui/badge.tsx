import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold";

  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
