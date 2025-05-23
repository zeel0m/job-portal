import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JobList } from "@/components/job-list"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find Your Next <span className="text-primary">Opportunity</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Connect with top companies and discover your perfect job match. Whether you're looking for a new role or
            hiring talent, we've got you covered.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/jobs">Browse Jobs</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/auth/signin">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Latest Job Listings</h2>
          <p className="mt-2 text-muted-foreground">Explore the newest opportunities on our platform</p>
        </div>
        <JobList featured={true} limit={6} />
      </section>

      <section className="bg-muted py-12 -mx-4 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">For Employers</h2>
          <p className="mt-4 text-muted-foreground">
            Post your job listings and reach thousands of qualified candidates
          </p>
          <Button asChild className="mt-6" size="lg">
            <Link href="/auth/signup?role=provider">Post a Job</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
