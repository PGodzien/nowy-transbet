'use client';

import { useState } from 'react';

/*
 * Shows the video thumbnail and loads the YouTube player only after a click,
 * so the page does not pull YouTube scripts or cookies on load.
 */
export default function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Odtwórz film: ${title}`}
      className="group absolute inset-0 cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbnail */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/20" />
      <span className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center bg-brand text-black transition-transform duration-300 group-hover:scale-110">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
          <path d="M7 4.5v15l12-7.5z" />
        </svg>
      </span>
    </button>
  );
}
