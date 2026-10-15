"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

const VIDEO_ID = "mOnhxbOze4k"; // TRANSBET BETONIARNIE - 30-LECIE FIRMY
const TEXT =
  "Chcemy się dla Was wciąż rozwijać, a tymczasem zapraszamy na krótki seans. W filmie usłyszycie o kilku ciekawostkach, które dotyczą naszego rozwoju! Dziękujemy wszystkim za zaangażowanie w projekcie!";

/* "Thank you for your trust / 30 years" tile in the partners grid. Opens the anniversary film in a dialog;
   YouTube loads only after the click. */
export default function ThirtyYearsTile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Odtwórz film: 30 lat na rynku"
        className="group flex h-full min-h-32 w-full cursor-pointer flex-col justify-between bg-brand px-5 py-5 text-left text-black transition-colors hover:bg-brand-hover sm:px-6"
      >
        <span className="font-mono text-[8px] tracking-[0.18em] text-black/45 uppercase">/ Dziękujemy za zaufanie</span>
        <span className="flex items-end justify-between gap-4">
          <span>
            <span className="block text-xl leading-none font-semibold tracking-[-0.03em] sm:text-2xl">30 lat na rynku</span>
            <span className="mt-2 hidden text-sm text-black/60 sm:block">Zobacz film o naszym rozwoju</span>
          </span>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/70 transition-colors duration-300 group-hover:bg-black group-hover:text-brand">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor">
              <path d="M7 4.5v15l12-7.5z" />
            </svg>
          </span>
        </span>
      </button>

      {open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label="30 lat na rynku — film"
              className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 sm:p-8"
              onClick={() => setOpen(false)}
            >
              <div
                className="w-full max-w-5xl bg-black text-white"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                    title="TRANSBET BETONIARNIE - 30-LECIE FIRMY"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col gap-3 border-t border-white/15 px-6 py-6 sm:flex-row sm:items-start sm:gap-10 sm:px-8">
                  <p className="shrink-0 text-2xl font-medium tracking-[-0.03em]">
                    <span className="text-brand">30 lat</span> na rynku
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                    {TEXT}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Zamknij film"
                className="absolute top-0 right-[4vw] grid h-16 w-16 cursor-pointer place-items-center bg-brand text-black"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
