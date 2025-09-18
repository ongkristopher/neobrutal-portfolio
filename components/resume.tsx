import { BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Resume() {
  const experiences = [
    {
      company: "Arcanys",
      duration: "September 2021 - Present",
      position: "Senior Web Developer",
      tasks: [
        "Developed various UI pages for our client's web application",
        "Collaborated with cross-functional teams to implement new features and improve user experience.",
        "Contributed to client's web app designs in terms of creating mockups",
        "Participated in peer reviews and code reviews",
      ],
    },
    {
      company: "Northeast Business Solutions, Inc",
      duration: "December 2017 - September 2021",
      position: "Senior Web Developer",
      tasks: [
        "Developed a maintainable RESTful APIs using NodeJS (express.js)",
        "Developed and maintained existing web pages develop in different front-end solution architecture (Web forms, MVC, Angular, Bootstrap, jQuery)",
        "Created and enhanced existing Stored Procedures on MySQL",
        "Developed emergency patch or hot fixes when issue arises",
        "Implemented Google Analytics on our website",
        "Developed company website",
      ],
    },
    {
      company: "Forthmedia Interactive Development",
      duration: "May 2017 - November 2021",
      position: "Junior Web Developer",
      tasks: [
        "Developed and maintained existing web pages develop in different front-end solution architecture (Web forms, MVC, Bootstrap, jQuery)",
        "Created and enhanced existing designs for client's website",
        "Developed emergency patch or hot fixes when issue arises",
        "Implemented Google Analytics on our website",
      ],
    },
    {
      company: "Edukasyon.ph",
      duration: "April 2016 - June 2016",
      position: "Junior Web Developer (Intern)",
      tasks: [
        "Assisted developers in creating mock-ups",
        "Trained to be a front-end designer. Used to convert .psd files into HTML & CSS files",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-8 uppercase tracking-wide">
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
        <section className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 z-10 relative">
            <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
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
                  <Card className="w-full">
                    <CardContent>
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
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6">
          <div className="flex items-center gap-3 mb-6 z-10 relative">
            <div className="w-8 h-8 rounded bg-background border-2 border-border flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
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
        </div>
      </article>
    </div>
  );
}
