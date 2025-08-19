"use client";
import React from "react";  

export default function Footer() {
  const year = new Date().getFullYear(); 

  return (
    <footer
      className={`relative overflow-hidden border-t border-card-hover bg-card text-card-hover`}
    >
      <div className="relative border-t border-card-hover">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-6 text-sm text-card-disabled md:flex-row lg:px-8">
          <p className="font-inter">
            © {year} - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
