import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JobList } from "@/components/job-list"
import { ArrowRight, Briefcase, Building, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-no-repeat bg-cover opacity-10 z-0"></div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Find your dream job today
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Discover Your Next{" "}
              <span className="text-primary relative">
                Career Move
                <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 -z-10 transform -rotate-1"></span>
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
              Connect with top companies and discover your perfect job match. Your next opportunity is just a click
              away.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="/jobs">
                  Browse Jobs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link href="/auth/signin">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold">1,000+</h3>
              <p className="text-muted-foreground">Active Job Listings</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-muted-foreground">Companies Hiring</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-bold">10,000+</h3>
              <p className="text-muted-foreground">Job Seekers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold">Featured Opportunities</h2>
              <p className="mt-2 text-muted-foreground text-lg">Explore the newest opportunities on our platform</p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0">
              <Link href="/jobs" className="flex items-center">
                View all jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <JobList featured={true} limit={6} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">For Employers</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Post your job listings and reach thousands of qualified candidates ready to join your team
            </p>
            <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-base">
              <Link href="/auth/signup?role=provider">
                Post a Job
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
