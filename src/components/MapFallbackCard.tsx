"use client";

import Image from "next/image";

const DEFAULT_IMAGE_GLOBAL =
  "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800";
const DEFAULT_IMAGE_US =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800";

export function MapFallbackCard({
  sourceUrl,
  sourceLabel,
  imageUrl,
  variant = "global",
  reason,
}: {
  sourceUrl: string;
  sourceLabel: string;
  imageUrl?: string;
  variant?: "global" | "us";
  reason?: string;
}) {
  const img = imageUrl ?? (variant === "us" ? DEFAULT_IMAGE_US : DEFAULT_IMAGE_GLOBAL);

  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-slate-200 bg-slate-50 overflow-hidden aspect-video focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label={`${sourceLabel} – Görmek için tıkla`}
    >
      <div className="relative w-full h-full min-h-[240px]">
        <Image
          src={img}
          alt={sourceLabel}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-slate-900/50 flex flex-col items-center justify-center gap-2 p-4">
          <span className="text-white font-semibold text-center text-lg drop-shadow">
            {sourceLabel}
          </span>
          <span className="text-white/95 text-center text-sm font-medium px-4 py-2 rounded-lg bg-accent/90">
            Görmek için tıkla
          </span>
          {reason && (
            <span className="text-white/80 text-center text-xs max-w-md">
              {reason}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
