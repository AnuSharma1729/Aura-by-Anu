import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, FileText, Zap, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import heroImage from "@assets/generated_images/minimalist_abstract_representation_of_a_resume_being_optimized.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Zap className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold text-foreground tracking-tight">ResuMatch</span>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Link href="/login">
                <Button variant="ghost" className="text-sm font-medium">Log in</Button>
              </Link>
              <Link href="/builder">
                <Button className="font-medium">Build Resume</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Beat the ATS. <br/>
                <span className="text-primary">Get the Interview.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Create perfectly optimized resumes tailored to your dream job description. 
                Our ATS-friendly formats ensure your application never gets lost in the digital pile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/builder">
                  <Button size="lg" className="h-12 px-8 text-base">
                    Create Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  View Samples
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                      U{i}
                    </div>
                  ))}
                </div>
                <p>Trusted by 10,000+ job seekers</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl transform translate-x-10 translate-y-10" />
              <img 
                src={heroImage} 
                alt="Resume Optimization Illustration" 
                className="relative z-10 rounded-2xl shadow-2xl border border-slate-100 max-h-[500px] w-auto object-contain bg-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Use ResuMatch?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just format your resume; we engineer it to pass Applicant Tracking Systems and impress recruiters.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Target className="h-6 w-6 text-primary" />}
              title="Job Description Matching"
              description="Paste the job description and we'll highlight keywords you need to include to increase your match score."
            />
            <FeatureCard 
              icon={<FileText className="h-6 w-6 text-primary" />}
              title="ATS-Friendly Templates"
              description="Clean, parseable formats designed specifically for machine readability. No complex columns or unreadable graphics."
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="Instant Optimization"
              description="Get real-time feedback on your resume's strength and actionable tips to improve it instantly."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Start for free, upgrade for power.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Free"
              price="$0"
              description="Perfect for your first application."
              features={[
                "1 ATS-Optimized Resume",
                "Basic Keyword Matching",
                "PDF Export",
                "Standard Template"
              ]}
              cta="Get Started Free"
              variant="outline"
            />
            <PricingCard 
              title="Pro Monthly"
              price="$19"
              period="/mo"
              description="For active job seekers."
              features={[
                "Unlimited Resumes",
                "Advanced Keyword Analysis",
                "Cover Letter Generator",
                "All Premium Templates",
                "Priority Support"
              ]}
              cta="Go Pro"
              popular={true}
              variant="default"
            />
            <PricingCard 
              title="Pro Annual"
              price="$12"
              period="/mo"
              description="Best value for long-term growth."
              features={[
                "Everything in Pro",
                "LinkedIn Profile Optimization",
                "Career Coaching Session (1x)",
                "Save 40% vs Monthly"
              ]}
              cta="Get Pro Annual"
              variant="outline"
              footer="Billed $144 yearly"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold tracking-tight">ResuMatch</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Helping professionals land their dream jobs with technology-driven resume optimization.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ATS Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resume Examples</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-white border shadow-sm flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function PricingCard({ title, price, period = "", description, features, cta, popular = false, variant = "outline", footer }: any) {
  return (
    <Card className={`relative flex flex-col ${popular ? 'border-primary shadow-lg scale-105 z-10' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full" variant={popular ? "default" : "outline"}>{cta}</Button>
        {footer && <p className="text-xs text-center text-muted-foreground">{footer}</p>}
      </CardFooter>
    </Card>
  );
}
