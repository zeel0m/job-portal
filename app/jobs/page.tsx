import { JobList } from "@/components/job-list"

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Browse Jobs</h1>
        <p className="text-muted-foreground mt-2">Find the perfect opportunity from our curated list of positions</p>
      </div>

      <JobList />
    </div>
  )
}
