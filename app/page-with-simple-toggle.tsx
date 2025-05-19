import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SimpleThemeToggle } from "@/components/simple-theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Madhav Gyawali</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <SimpleThemeToggle />
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Rest of the page content... */}
    </div>
  )
}
