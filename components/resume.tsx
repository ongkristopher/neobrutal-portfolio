import { BookOpen } from "lucide-react";
import { experiences } from "@/data/experiences";
// import { GraduationCap } from "lucide-react";
// import { Card, CardContent } from "./ui/card";

export function Resume() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-8 uppercase">
        Resume
      </h2>

      <article className="space-y-8">
        <p className="text-lg text-foreground leading-relaxed">
          Results-driven Web Developer with a proven track record in the
          software industry. Expert in building responsive, high-performance
          sites using CSS, PHP, HTML5, JavaScript and MySQL. Holds a B.Sc. in
          Computer Science from Norzagaray College and excels at translating
          complex requirements into maintainable code.
        </p>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 z-10 relative">
          <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
            <BookOpen className="h-4 w-4 text-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground uppercase">
            Experience
          </h3>
        </div>
        <div className="px-3.5">
          {/* Timeline */}
          <ul className="list-none">
            {experiences.map((experience, idx) => (
              <li
                key={idx}
                className="relative pl-8 pb-4 before:content-[''] before:absolute before:left-0 before:w-[2px] before:bg-foreground first:before:-inset-y-[30px] before:-inset-y-[15px] last:before:inset-y-full after:content-[''] after:w-3 after:h-3 after:rounded-full after:border-2 after:bg-background after:absolute after:top-1.5 after:-left-[0.3rem]"
              >
                <h4 className="font-bold text-lg text-foreground">
                  {experience.company}
                </h4>
                <h5 className="font-bold text-sm text-foreground/70">
                  {experience.position}
                </h5>
                <span className="text-sm text-foreground/80">
                  {experience.duration}
                </span>
                <ul className="list-disc pl-8">
                  {experience.tasks.map((task, index) => (
                    <li key={index} className="text-md">
                      {task}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6">
          <div className="flex items-center gap-3 mb-6 z-10 relative">
            <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground uppercase">
              Education
            </h3>
          </div>
          <div className="">
            <Card className="w-full">
              <CardContent>
                <h4 className="font-bold text-foreground">
                  Norzagaray College
                </h4>
                <h4 className="text-sm font-bold text-foreground/70">
                  Norzagaray, Bulacan, Philippines
                </h4>
                <h4 className="text-sm font-bold text-foreground/80 mb-2">
                  May 2017
                </h4>
                <p className="text-md text-muted-foreground">
                  Bachelor of Science in Computer Science
                </p>
              </CardContent>
            </Card>
          </div>
        </div> */}
      </article>
    </div>
  );
}
