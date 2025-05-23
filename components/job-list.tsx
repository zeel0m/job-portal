"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getAllJobs, getFeaturedJobs, searchJobs, type Job } from "@/lib/data"
import { MapPin, Briefcase, Calendar, Search, BookmarkPlus } from "lucide-react"

interface JobListProps {
  featured?: boolean
  providerId?: string
  limit?: number
}

export function JobList({ featured = false, providerId, limit }: JobListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  let jobsToDisplay = featured ? getFeaturedJobs() : getAllJobs()

  if (providerId) {
    jobsToDisplay = jobsToDisplay.filter((job) => job.providerId === providerId)
  }

  if (searchQuery) {
    jobsToDisplay = searchJobs(searchQuery)
  }

  if (limit) {
    jobsToDisplay = jobsToDisplay.slice(0, limit)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-6">
      {!featured && (
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search jobs by title, company, or location..."
              className="pl-8 h-11 bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}

      {jobsToDisplay.length === 0 ? (
        <div className="text-center py-16 bg-muted/30 rounded-lg border border-border/50">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
            <Briefcase className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">No jobs found</h3>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            {searchQuery
              ? "Try adjusting your search terms or browse all available positions"
              : providerId
                ? "You haven't posted any jobs yet. Create your first job listing to get started."
                : "Check back later for new opportunities or try different search criteria."}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobsToDisplay.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}

function JobCard({ job }: { job: Job }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return "Today"
    } else if (diffDays === 1) {
      return "Yesterday"
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)} weeks ago`
    } else {
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(date)
    }
  }

  // Determine badge color based on job type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Full-time":
        return "default"
      case "Part-time":
        return "secondary"
      case "Contract":
        return "outline"
      case "Freelance":
        return "destructive"
      case "Internship":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      {job.featured && (
        <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 text-center">Featured</div>
      )}
      <CardHeader className="pb-2 relative">
        <div className="absolute right-6 top-6">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <BookmarkPlus className="h-4 w-4" />
            <span className="sr-only">Save job</span>
          </Button>
        </div>
        <div className="flex justify-between items-start pr-8">
          <CardTitle className="text-xl">
            <Link href={`/jobs/${job.id}`} className="hover:text-primary transition-colors">
              {job.title}
            </Link>
          </CardTitle>
        </div>
        <div className="text-lg font-medium">{job.company}</div>
        <Badge variant={getBadgeVariant(job.type)} className="mt-2">
          {job.type}
        </Badge>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-primary/70" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4 text-primary/70" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-primary/70" />
            <span>Posted {formatDate(job.postedAt)}</span>
          </div>
        </div>
        <div className="mt-4 line-clamp-3 text-sm">{job.description}</div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
          <Link href={`/jobs/${job.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
