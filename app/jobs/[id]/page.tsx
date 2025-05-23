import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getJobById } from "@/lib/data"
import { MapPin, Briefcase, Calendar, Building, ArrowLeft } from "lucide-react"

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/jobs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to jobs
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <div className="flex items-center mt-2">
              <Building className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-lg">{job.company}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant={job.type === "Full-time" ? "default" : "outline"} className="text-sm">
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
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                <Separator />

                <div>
                  <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Job Details</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">{job.location}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Briefcase className="mr-3 h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium">Salary</div>
                    <div className="text-muted-foreground">{job.salary}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="mr-3 h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium">Posted On</div>
                    <div className="text-muted-foreground">{formatDate(job.postedAt)}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  )
}
