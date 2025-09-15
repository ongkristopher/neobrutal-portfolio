import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card neo-border border-b-0 border-l-0 border-r-0 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-card-foreground mb-8 font-sans uppercase">Alex Chen</h3>

          <p className="text-lg text-foreground mb-8">Building the web, one pixel at a time.</p>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              className="neo-border bg-background hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="neo-border bg-background hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="neo-border bg-background hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="neo-border bg-background hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="mailto:alex@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="bg-accent neo-border-accent p-4 inline-block">
            <p className="text-accent-foreground font-semibold">© 2024 Alex Chen. Built with Next.js & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
