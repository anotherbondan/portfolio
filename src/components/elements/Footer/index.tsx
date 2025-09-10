"use client";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`border-card-hover bg-card text-card-hover relative overflow-hidden border-t`}
    >
      <div className="border-card-hover relative border-t">
        <div className="text-card-disabled mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 py-6 text-sm md:flex-row lg:px-8">
          <p className="font-inter">© {year} - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
