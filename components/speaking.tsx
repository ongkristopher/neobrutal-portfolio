"use client";

import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { speakingEngagements } from "@/data/experiences";

export function Speaking() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-2 uppercase">
        Speaking Engagements
      </h2>
      <p className="text-foreground mb-8 leading-relaxed">
        Talks and sessions I&apos;ve delivered at universities and tech events.
      </p>

      <div className="flex flex-col gap-6">
        {speakingEngagements.map((engagement, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-background border-2 border-border rounded-base shadow-shadow overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-56 bg-muted border-b-2 border-border overflow-hidden">
              {engagement.image ? (
                <>
                  {/* Blurred background */}
                  <Image
                    src={engagement.image}
                    alt=""
                    fill
                    className="object-cover blur-md scale-110 brightness-75"
                    aria-hidden
                  />
                  {/* Foreground image */}
                  <Image
                    src={engagement.image}
                    alt={engagement.title}
                    fill
                    className="object-contain relative"
                  />
                </>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                    No photo yet
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="font-bold text-lg uppercase mb-3 text-foreground leading-snug">
                {engagement.title}
              </h3>

              <div className="flex flex-col gap-1 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {engagement.venue}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  {engagement.date}
                </span>
              </div>

              <ul className="list-disc pl-5 space-y-1">
                {engagement.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm text-foreground">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
