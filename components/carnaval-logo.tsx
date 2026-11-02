import React from "react";

export function CarnavalLogo({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-secondary-foreground/20 rounded-full blur-md"></div>
      <img
        src="/logo-dark-transparent.png"
        alt="Carnaval da Chittagong College Logo"
        className="w-full h-full object-contain relative z-10 dark:block hidden"
      />
      <img
        src="/logo-light-transparent.png"
        alt="Carnaval da Chittagong College Logo"
        className="w-full h-full object-contain relative z-10 dark:hidden block"
      />
    </div>
  );
}
