// src/components/ui/Container.jsx
import React from "react";
import { cn } from "@/lib/utils";

/**
 * A responsive container that keeps content centered and padded.
 * Automatically adjusts horizontal padding on breakpoints.
 */
const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
