"use client";

import { useState } from "react";

/**
 * Capabilities PDF is not yet in public/ — show "Coming Soon" and optional toast on click.
 */
export function CapabilitiesPdfLink() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="relative inline-flex">
      <span
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && handleClick(e as unknown as React.MouseEvent)}
        className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-500 cursor-not-allowed shrink-0"
        aria-label="Capabilities PDF coming soon"
      >
        Download PDF (Coming Soon)
      </span>
      {showToast && (
        <span
          className="absolute left-0 right-0 top-full mt-2 rounded-lg bg-slate-800 px-3 py-2 text-xs text-white shadow-lg z-10"
          role="status"
          aria-live="polite"
        >
          PDF will be available soon. Contact us for a copy.
        </span>
      )}
    </div>
  );
}
