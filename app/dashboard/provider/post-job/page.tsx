"use client"

import { JobForm } from "@/components/job-form"
import { withAuth } from "@/lib/auth-middleware"

function PostJobPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Post a New Job</h1>
        <p className="text-muted-foreground mt-1">Create a new job listing to find the perfect candidate</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <JobForm />
      </div>
    </div>
  )
}

export default withAuth(PostJobPage, "provider")
