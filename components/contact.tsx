import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-card-foreground mb-8 uppercase tracking-wide">Get In Touch</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-background neo-shadow neo-border p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wide">Let's Work Together</h3>

            <p className="text-foreground mb-6 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted neo-border-accent rounded">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">EMAIL</p>
                  <p className="text-sm font-medium">alex@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted neo-border-accent rounded">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">PHONE</p>
                  <p className="text-sm font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted neo-border-accent rounded">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">LOCATION</p>
                  <p className="text-sm font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary neo-shadow p-6 ww">
            <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">Response Time</h3>
            <p className="text-sm mb-4">I typically respond within 24 hours during business days.</p>
            <div className="flex gap-2">
              <span className="bg-primary-foreground text-primary px-2 py-1 text-xs font-bold rounded">FAST</span>
              <span className="bg-primary-foreground text-primary px-2 py-1 text-xs font-bold rounded">RELIABLE</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-background neo-shadow neo-border p-6">
          <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">Send Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wide">
                Name
              </label>
              <Input id="name" placeholder="Your Name" className="neo-border bg-muted" />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wide">
                Email
              </label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="neo-border bg-muted" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wide">
                Subject
              </label>
              <Input id="subject" placeholder="Project Inquiry" className="neo-border bg-muted" />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wide">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={4}
                className="neo-border bg-muted resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full neo-shadow neo-border bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold uppercase tracking-wide"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
