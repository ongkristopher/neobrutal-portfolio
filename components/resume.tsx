import { BookOpen, GraduationCap, Briefcase, Calendar } from "lucide-react";
import { experiences, education } from "@/data/experiences";

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
          <ul className="list-none">
            {experiences.map((experience, idx) => (
              <li
                key={idx}
                className="relative pl-8 pb-4 before:content-[''] before:absolute before:left-0 before:w-[2px] before:bg-foreground first:before:-inset-y-[30px] before:-inset-y-[15px] last:before:inset-y-full after:content-[''] after:w-3 after:h-3 after:rounded-full after:border-2 after:bg-background after:absolute after:top-1.5 after:-left-[0.3rem]"
              >
                <div className="bg-background border-2 border-border rounded-base shadow-shadow p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h4 className="font-bold text-xl text-foreground">
                        {experience.company}
                      </h4>
                      <h5 className="flex items-center gap-1.5 font-semibold text-md text-foreground">
                        <Briefcase className="h-3.5 w-3.5 shrink-0" />
                        {experience.position}
                      </h5>
                    </div>
                    <span className="flex items-center gap-1.5 text-md font-medium text-muted-foreground whitespace-nowrap">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      {experience.duration}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {experience.tasks.map((task, index) => (
                      <li key={index} className="text-md text-foreground">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Education Header */}
        <div className="flex items-center gap-3 mb-6 z-10 relative">
          <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
            <GraduationCap className="h-4 w-4 text-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground uppercase">
            Education
          </h3>
        </div>
        <div className="px-3.5">
          <ul className="list-none">
            {education.map((edu, idx) => (
              <li
                key={idx}
                className="relative pl-8 pb-4 before:content-[''] before:absolute before:left-0 before:w-[2px] before:bg-foreground before:-top-[30px] before:bottom-[calc(100%-0.75rem)] after:content-[''] after:w-3 after:h-3 after:rounded-full after:border-2 after:bg-background after:absolute after:top-1.5 after:-left-[0.3rem]"
              >
                <div className="bg-background border-2 border-border rounded-base shadow-shadow p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h4 className="font-bold text-xl text-foreground">
                        {edu.school}
                      </h4>
                      <h5 className="font-semibold text-md text-foreground">
                        {edu.degree}
                      </h5>
                      <p className="text-md text-foreground">{edu.location}</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-md font-medium text-muted-foreground whitespace-nowrap">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
