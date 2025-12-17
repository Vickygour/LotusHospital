// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";

// --- MANUAL IMPORTS BASED ON YOUR PATH ---
import g1 from "../assets/gallery5.jpg";
import g2 from "../assets/gallery13.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery1.jpg";
import g6 from "../assets/gallery6.jpg";
import g7 from "../assets/gallery7.jpg";
import g8 from "../assets/gallery8.jpg";
import g9 from "../assets/gallery9.jpg";
import g10 from "../assets/gallery10.jpg";
import g11 from "../assets/gallery11.jpg";
import g12 from "../assets/gallery2.jpg"; // as you had

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

export default function Gallery() {
  const [current, setCurrent] = useState(null);

  // optional: lock scroll when modal open
  useEffect(() => {
    if (current !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [current]);

  const open = (index) => setCurrent(index);
  const close = () => setCurrent(null);

  const prev = (e) => {
    e?.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e?.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div className="py-12 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#283B6A] mb-8 text-center">
        Medical Gallery
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mt-3">
        Explore health in visuals at Lotus Hospital’s Medical Gallery. A visual
        journey to well-being awaits.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.03] transition-all duration-200"
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={img}
              className="w-full h-40 object-cover"
              alt={`Gallery ${i + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {current !== null && (
        <div
          id="modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
          onClick={close} // clicking backdrop closes
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking content
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-3 right-3 z-30 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-transform active:scale-95"
            >
              <span className="text-lg font-bold">✕</span>
            </button>

            {/* Left arrow (hidden on very small screens) */}
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center bg-white/80 hover:bg-white rounded-full w-12 h-12 shadow-lg"
            >
              <span className="text-2xl select-none">←</span>
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center bg-white/80 hover:bg-white rounded-full w-12 h-12 shadow-lg"
            >
              <span className="text-2xl select-none">→</span>
            </button>

            {/* Image container */}
            <div className="rounded-xl overflow-hidden bg-black/90 shadow-2xl">
              <img
                src={images[current]}
                alt={`Gallery large ${current + 1}`}
                className="w-full max-h-[80vh] object-contain transition-transform duration-300 ease-out"
                style={{ borderRadius: 12 }}
              />
            </div>

            {/* Footer: caption + counter */}
            <div className="mt-3 flex items-center justify-between text-sm text-white/90">
              <div className="flex items-center gap-3">
                {/* small thumbnail */}
                <div className="w-12 h-8 rounded overflow-hidden bg-white/10">
                  <img
                    src={images[current]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Lotus Hospital</div>
                  <div className="text-xs text-white/70">Medical Gallery</div>
                </div>
              </div>

              <div className="text-xs text-white/80">
                {current + 1} / {images.length}
              </div>
            </div>

            {/* Mobile arrow bar: visible on small screens */}
            <div className="mt-4 flex items-center justify-between gap-4 sm:hidden">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex-1 bg-white/90 py-2 rounded-md shadow"
              >
                ← Previous
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="flex-1 bg-white/90 py-2 rounded-md shadow"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
