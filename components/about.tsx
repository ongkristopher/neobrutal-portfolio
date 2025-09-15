import { SplinePointer, SquareCode } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function About() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-8 uppercase tracking-wide">
        About Me
      </h2>

      <div className="grid gap-8">
        <div className="space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            I'm a <span className="text-primary font-bold">Web Developer</span>{" "}
            and UI/UX Designer from Bulacan, Philippines! Working in web
            development. I enjoy turning complex problems into simple, beautiful
            and intuitive designs.
          </p>

          <p className="text-lg text-foreground leading-relaxed">
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive.
          </p>

          <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6">
            <h3 className="text-xl font-bold text-accent-foreground mb-4 uppercase tracking-wide">
              What I'm Doing
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="w-full max-w-sm">
                <CardContent>
                  <div className="w-8 h-8 bg-primary rounded mb-3 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      <SplinePointer />
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Web Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Crafting mockups with designs inspired by market trends,
                    always focused on delivering a presentable and user-friendly
                    UI/UX.
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full max-w-sm">
                <CardContent>
                  <div className="w-8 h-8 bg-primary rounded mb-3 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      <SquareCode />
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">
                    Web Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Creating pixel-perfect websites from mockups, keeping up
                    with modern technologies, and applying my experience from
                    working with professional teams.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-base text-main-foreground border-2 border-border bg-main shadow-shadow p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wide">
              Testimonials
            </h3>
            <div className="space-y-4">
              <Card className="w-full">
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage
                        src="/Rikard_web-768x768.jpg.webp"
                        alt="Rikard Windh"
                      />
                      <AvatarFallback>RK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-foreground">
                        Rikard Windh
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        COO, Traxmate
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground">
                    "Kristopher has helped us a lot with front-end work in the
                    Traxmate product and in the Combain Indoor. New Alert Edit
                    for example. Alert Types page. Building model pages and
                    Survey Pages. Kristopher was also part of the design team."
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src="/extel-logo.svg" alt="Extel Insights" />
                      <AvatarFallback>EI</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-foreground">Peer Review</h4>
                      <p className="text-sm text-muted-foreground">
                        Developers, Extel Insights
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground">Best contributions:</p>
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-3 w-3 translate-y-1 rounded-full bg-main border-2 border-border" />
                    <div className="space-y-1">
                      <p className="text-sm">
                        His contribution on Conference Roster frontend work, as
                        well as designing mockups for a number of features
                      </p>
                    </div>
                    <span className="flex h-3 w-3 translate-y-1 rounded-full bg-main border-2 border-border" />
                    <div className="space-y-1">
                      <p className="text-sm">
                        His major contribution this time around has been on the
                        frontend work for the CMS migration from Brightspot to
                        Directus
                      </p>
                    </div>
                    <span className="flex h-3 w-3 translate-y-1 rounded-full bg-main border-2 border-border" />
                    <div className="space-y-1">
                      <p className="text-sm">
                        His key contribution is supporting the CMS migration
                        front-end.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
