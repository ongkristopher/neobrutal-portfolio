"use client";

import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/ongkristopher/30min";

export function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div ref={headerRef}>
        <h2 className="text-4xl font-bold text-card-foreground mb-2 uppercase">
          Contact
        </h2>
        <p className="text-foreground mb-8 leading-relaxed">
          Book a time with me directly using the calendar below.
        </p>
      </div>

      <div className="border-2 border-border rounded-base shadow-shadow overflow-hidden">
        <iframe
          src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=ffffff`}
          className="w-full"
          style={{ height: "830px" }}
          frameBorder="0"
          title="Schedule a meeting with Kristopher Ong"
        />
      </div>
    </div>
  );
}
