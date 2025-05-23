import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getJobById } from "@/lib/data"
import { MapPin, Briefcase, Calendar, Building, ArrowLeft, BookmarkPlus, Share2 } from "lucide-react"

export default function JobPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id)

  if (!job) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4 group">
          <Link href="/jobs">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to jobs
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <div className="flex items-center mt-2">
              <Building className="mr-2 h-4 w-4 text-primary" />
              <span className="text-lg">{job.company}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant={getBadgeVariant(job.type)} className="text-sm">
              {job.type}
            </Badge>
            {job.featured && (
              <Badge variant="secondary" className="text-sm">
                Featured
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <Card className="overflow-hidden border-border/50 shadow-sm">
            <div className="h-2 bg-primary"></div>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="bg-border/50" />

                <div>
                  <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="overflow-hidden border-border/50 shadow-sm sticky top-20">
            <div className="h-2 bg-primary"></div>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Job Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">{job.location}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Salary</div>
                    <div className="text-muted-foreground">{job.salary}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-0.5 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">Posted On</div>
                    <div className="text-muted-foreground">{formatDate(job.postedAt)}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button className="w-full" size="lg">
                  Apply Now
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm">
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
