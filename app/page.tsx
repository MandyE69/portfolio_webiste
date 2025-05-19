import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ExternalLink,
  Code,
  Cpu,
  Globe,
  Server,
  Download,
  Check,
  Zap,
  Lightbulb,
  Facebook,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-[var(--font-kaushan)]">Madhav Gyawali</div>
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
              <ThemeToggle />
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Profile Picture on the left */}
            <div className="md:order-10 order-1 md:-mt-6">
              <div className="relative w-80 h-80 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/230 animate-spin-slow"></div>
                <div className="absolute inset-[3px] rounded-full bg-background"></div>
                <div className="absolute inset-[7px] rounded-full overflow-hidden">
                  <img
                    src="/madhav.jpg?height=320&width=320"
                    alt="Madhav Gyawali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content on the right */}
            <div className="md:order-2 order-2 md:text-left text-center flex-1">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Madhav Gyawali</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">CSIT Student & Tech Enthusiast</p>
              <p className="text-muted-foreground mb-8">
                I'm a passionate computer science student with a deep interest in web development, artificial
                intelligence, and cloud technologies. I love building innovative solutions that solve real-world
                problems and am constantly exploring new technologies to expand my skill set. Currently pursuing my CSIT
                degree while working on exciting projects and contributing to the tech community.
              </p>
              <div className="flex flex-wrap gap-4 md:justify-start justify-center">
                <Button asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Download className="h-4 w-4" />
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
              <div className="flex gap-4 mt-6 md:justify-start justify-center">
                <Link href="https://github.com/MandyE69" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/madhav-gyawali-549744212/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                {/* <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link> */}
                <Link href="https://www.facebook.com/mandip.gyawali.2025/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/mah.madhavv/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-4">
                Hello! I'm Madhav Gyawali, a passionate Computer Science and Information Technology student with a deep
                enthusiasm for technology and innovation.
              </p>
              <p className="text-muted-foreground mb-4">
                I'm constantly exploring new technologies and frameworks, with a particular interest in web development,
                artificial intelligence, and cloud computing.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding or studying, you can find me participating in hackathons, contributing to
                open-source projects, or exploring the latest tech trends.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <Code className="h-4 w-4" />
                  </span>
                  <span>Passionate about full-stack development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <Cpu className="h-4 w-4" />
                  </span>
                  <span>Exploring machine learning and AI</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <Globe className="h-4 w-4" />
                  </span>
                  <span>Active in tech communities and events</span>
                </li>
                {/* <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5">
                    <Server className="h-4 w-4" />
                  </span>
                  <span>Experienced with cloud platforms</span>
                </li> */}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-6 w-6 mr-3 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-semibold">Confident</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Technologies I work with regularly and have strong expertise in.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>CSS</Badge>
                  <Badge>Python</Badge>
                  <Badge>Git</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-6 w-6 mr-3 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <Zap className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-semibold">Intermediate</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Technologies I've used in multiple projects with good understanding.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>React</Badge>
                  <Badge>Express</Badge>
                  <Badge>Java</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>RESTful API</Badge>
                  <Badge>Django</Badge>
                  <Badge>Flask</Badge>
                  <Badge>Supabase</Badge>
                  <Badge>TypeScript</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-6 w-6 mr-3 rounded-full bg-amber-500 flex items-center justify-center text-white">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-semibold">Exploring</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Technologies I'm currently learning and experimenting with.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Machine Learning</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>CI/CD</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-muted">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">ShopWise: Product Recommendation System in ML</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/MandyE69/ShopWise-_product_recommendation_system" aria-label="View code">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    {/* <Button variant="ghost" size="icon" asChild>
                      <Link href="#" aria-label="View live demo">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button> */}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  ShopWise is a machine learning-based product recommendation system designed to enhance the shopping experience by suggesting relevant products based on user input. It leverages content-based filtering techniques to provide personalized recommendations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Flask</Badge>
                  <Badge variant="outline">Bootstrap</Badge>
                  <Badge variant="outline">Jupyter notebook</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-muted">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">Superhero_website</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/MandyE69/Superhero_website" aria-label="View code">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://mandye69.github.io/Superhero_website/" aria-label="View live demo">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                 Simple website for superheroes and anime fans.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HTML5</Badge>
                  <Badge variant="outline">CSS3</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-muted">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">Portfolio Website</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/MandyE69/MadhavGyawali" aria-label="View code">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://madhavgyawali9.com.np" aria-label="View live demo">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Personal Portfolio Website
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TailwindCSS</Badge>
                  <Badge variant="outline">React</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 bg-muted">
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">E-Pustakalaya</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/MandyE69/MadhavGyawali" aria-label="View code">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  E
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TailwindCSS</Badge>
                  <Badge variant="outline">React</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="https://github.com/MandyE69" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </Link>
            </Button>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-muted pl-8 pb-10">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
              <div className="mb-2">
                <Badge className="mb-2">2021 - Present</Badge>
                <h3 className="text-xl font-semibold">Bachelor of Computer Science and Information Technology</h3>
                <p className="text-muted-foreground">Tribhuvan University, Nepal</p>
              </div>
              <p className="mt-4">
                Focusing on core computer science principles, software development, and information systems. Maintaining
                a strong academic record while participating in various tech clubs and events.
              </p>
            </div>
            <div className="relative border-l border-muted pl-8 pb-10">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
              <div className="mb-2">
                <Badge className="mb-2">2025</Badge>
                <h3 className="text-xl font-semibold">HackFest Participant</h3>
                <p className="text-muted-foreground">CSITIAN HackFest 2025</p>
              </div>
              <p className="mt-4">
                ..
              </p>
            </div>
            <div className="relative border-l border-muted pl-8">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
              <div className="mb-2">
                <Badge className="mb-2">2018 - 2021</Badge>
                <h3 className="text-xl font-semibold">Secondary Level +2 Computer Science</h3>
                <p className="text-muted-foreground">Narayani Model Secondary School</p>
              </div>
              <p className="mt-4">
                Graduated with distinction in Science and Mathematics. Participated in various tech workshops that sparked my interest in computer science.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                    <a href="mailto:madhavgyawali436@gmail.com" className="hover:text-primary transition-colors">
                      madhavgyawali436@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-muted-foreground" />
                    <a
                      href="https://www.linkedin.com/in/madhav-gyawali-549744212/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/madhav-gyawali
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3 text-muted-foreground" />
                    <a
                      href="https://github.com/MandyE69"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/madhavgyawali
                    </a>
                  </div>
                  {/* <div className="flex items-center">
                    <Twitter className="h-5 w-5 mr-3 text-muted-foreground" />
                    <a
                      href="https://twitter.com/madhavgyawali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      twitter.com/madhavgyawali
                    </a>
                  </div> */}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Madhav Gyawali. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/MandyE69" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/madhav-gyawali-549744212/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            {/* <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
            </Link> */}
            <Link href="mailto:madhavgyawali436@gmail.com">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
