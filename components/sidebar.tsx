"use client"

import { useState } from "react"
import { MapPin, Menu, X, Linkedin , CalendarDays, Layers, Globe} from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const startDate = new Date("2017-05-08");
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < startDate.getDate())
  ) {
    years--;
    months += 12;
  }

  const experience = `${years} year${years !== 1 ? "s" : ""} ${months} month${
    months !== 1 ? "s" : ""
    }`;
  const name = "Kristopher Ong";
  const position = "Web Developer";
  const currentStack = ['Angular', "Next.js"];
  const location = "Norzagaray, Bulacan, Philippines";

  return (
    <>
      <div className="lg:hidden rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow m-4 p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-card-foreground uppercase tracking-wide">
          {name}
        </h1>
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          variant="default"
          size="sm"
          className="neo-border neo-shadow-sm"
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </Button>
      </div>

      <aside
        className={`
        lg:w-80 rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-4 lg:p-8 m-4 h-fit lg:sticky lg:top-4
        ${isMobileMenuOpen ? "block" : "hidden lg:block"}
      `}
      >
        {/* Profile Section */}
        <div className="text-center mb-6 lg:mb-8">
          <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow overflow-hidden bg-muted">
            <img
              src="/ongkristopher.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="hidden lg:block text-2xl font-bold text-card-foreground mb-2 uppercase tracking-wide">
            {name}
          </h1>
          <Badge className="uppercase" variant="neutral">
            <Globe />
            {position}
          </Badge>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
          <div className="bg-background flex items-center gap-3 p-2 lg:p-3 rounded-base text-main-foreground border-2 border-border shadow-shadow">
            <CalendarDays className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
            <div>
              <p className="font-bold text-xs text-muted-foreground uppercase tracking-wide">
                Years of experience
              </p>
              <p className="text-xs lg:text-sm font-medium">{experience}</p>
            </div>
          </div>

          <div className="bg-background flex items-center gap-3 p-2 lg:p-3 rounded-base text-main-foreground border-2 border-border shadow-shadow">
            <Layers className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
            <div>
              <p className="font-bold text-xs text-muted-foreground uppercase tracking-wide">
                Current Tech Stack
              </p>
              <p className="text-xs lg:text-sm font-medium">
                {currentStack.join(", ")}
              </p>
            </div>
          </div>

          <div className="bg-background flex items-center gap-3 p-2 lg:p-3 rounded-base text-main-foreground border-2 border-border shadow-shadow">
            <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
            <div>
              <p className="font-bold text-xs text-muted-foreground uppercase tracking-wide">
                LOCATION
              </p>
              <p className="text-xs lg:text-sm font-medium">{location}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 justify-center">
          <Link
            href="https://github.com/ongkristopher"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background p-2 rounded-base border border-border shadow-shadow hover:opacity-80 transition"
          >
            <SiGithub className="w-4 h-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/ongkristopher"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background p-2 rounded-base border border-border shadow-shadow hover:opacity-80 transition"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}
