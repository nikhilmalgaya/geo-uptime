import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, CheckCircle, Clock, Code, LineChart, Shield, Smartphone, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-3 md:py-6 lg:py-8 xl:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  99.9% Uptime Guarantee
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Never miss a beat with your website monitoring
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  BetterUptime monitors your websites, APIs, and services every 30 seconds and alerts you when they go
                  down.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Start Monitoring Now
                  </Button>
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs font-medium">BetterUptime Dashboard</div>
                    <div />
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Dashboard Preview"
                    className="aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need to stay online</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides comprehensive monitoring and alerting to ensure your services are always
                  available.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Bell className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">Instant Alerts</h3>
                <p className="text-center text-muted-foreground">
                  Get notified immediately when your services go down via SMS, email, Slack, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-emerald-100 p-3">
                  <LineChart className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">Detailed Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Track uptime, response times, and performance with comprehensive dashboards.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">SSL Monitoring</h3>
                <p className="text-center text-muted-foreground">
                  Monitor SSL certificates and get alerts before they expire to prevent security issues.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Smartphone className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">Mobile App</h3>
                <p className="text-center text-muted-foreground">
                  Manage your monitoring on the go with our iOS and Android applications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Code className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">API Access</h3>
                <p className="text-center text-muted-foreground">
                  Integrate with our API to build custom monitoring solutions for your specific needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Clock className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold">Status Pages</h3>
                <p className="text-center text-muted-foreground">
                  Create beautiful status pages to keep your customers informed about service status.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple setup, powerful monitoring</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started in minutes and start monitoring your services right away.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700">
                  1
                </div>
                <h3 className="text-xl font-bold">Add your endpoints</h3>
                <p className="text-center text-muted-foreground">
                  Enter the URLs of the websites, APIs, or services you want to monitor.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700">
                  2
                </div>
                <h3 className="text-xl font-bold">Configure alerts</h3>
                <p className="text-center text-muted-foreground">
                  Set up notification channels and alert conditions based on your requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700">
                  3
                </div>
                <h3 className="text-xl font-bold">Relax and focus</h3>
                <p className="text-center text-muted-foreground">
                  We'll monitor your services 24/7 and alert you only when there's an issue.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="relative overflow-hidden rounded-xl border bg-background shadow-xl">
                <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-medium">Setup Process</div>
                  <div />
                </div>
                <Image
                  src="/placeholder.svg?height=300&width=800"
                  width={800}
                  height={300}
                  alt="Setup Process"
                  className="aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your business. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">For small websites and personal projects</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>10 monitors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>1-minute check intervals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Email & SMS alerts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>1 status page</span>
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-lg ring-2 ring-emerald-500">
                <div className="mb-4">
                  <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700">
                    Most Popular
                  </div>
                  <h3 className="mt-2 text-2xl font-bold">Professional</h3>
                  <p className="text-muted-foreground">For growing businesses and teams</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>50 monitors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>30-second check intervals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>All notification channels</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>5 status pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>API access</span>
                  </li>
                </ul>
                <Button className="mt-auto bg-emerald-600 hover:bg-emerald-700">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For large organizations with advanced needs</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Unlimited monitors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>10-second check intervals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Unlimited status pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="mt-auto" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by thousands of companies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about BetterUptime.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col rounded-lg border p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="italic text-muted-foreground">
                    "BetterUptime has been a game-changer for our team. We've reduced our downtime by 80% and our
                    response time to incidents has improved dramatically."
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">DevOps Lead, E-commerce Plus</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="italic text-muted-foreground">
                    "The status pages and incident management features have helped us maintain transparency with our
                    customers. Our support tickets have decreased by 30%."
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Founder, StartupHub</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="italic text-muted-foreground">
                    "As a small startup, we needed a monitoring solution that was easy to set up but powerful enough for
                    our needs. BetterUptime delivers exactly that."
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">David Wilson</h4>
                    <p className="text-sm text-muted-foreground">IT Director, Global Retail</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="italic text-muted-foreground">
                    "The enterprise features and custom integrations have allowed us to create a monitoring system that
                    perfectly fits our complex infrastructure."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to never miss downtime again?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of companies that trust BetterUptime to monitor their services.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                    Start Free Trial
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">14-day free trial. No credit card required.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-emerald-500" />
            <span className="text-lg font-bold">BetterUptime</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} BetterUptime. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
