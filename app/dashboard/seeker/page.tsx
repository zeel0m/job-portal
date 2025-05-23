"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobList } from "@/components/job-list"
import { withAuth } from "@/lib/auth-middleware"
import { useAuth } from "@/lib/auth-context"
import { Briefcase, Star, CheckCircle, Sparkles, FileCheck } from "lucide-react"

function SeekerDashboardPage() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <p className="text-muted-foreground mt-1">Find and track your job opportunities</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-background border-border/50 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Profile Match</CardTitle>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">85%</div>
            <p className="text-sm text-muted-foreground">Match with recommended jobs</p>
          </CardContent>
        </Card>

        <Card className="bg-background border-border/50 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Saved Jobs</CardTitle>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Jobs saved for later</p>
          </CardContent>
        </Card>

        <Card className="bg-background border-border/50 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Applications</CardTitle>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <FileCheck className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted-foreground">Jobs you've applied to</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recommended" className="space-y-6">
        <TabsList className="bg-muted/50 p-1 h-auto">
          <TabsTrigger
            value="recommended"
            className="py-2 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Recommended
          </TabsTrigger>
          <TabsTrigger
            value="saved"
            className="py-2 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Saved Jobs
          </TabsTrigger>
          <TabsTrigger
            value="applied"
            className="py-2 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Applied Jobs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-6">
          <Card className="bg-gradient-to-r from-primary/5 to-background border-primary/20 shadow-sm overflow-hidden">
            <div className="h-1 bg-primary/30"></div>
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle>Jobs Matching Your Profile</CardTitle>
                  <CardDescription>Based on your skills and preferences</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <JobList featured={true} />
        </TabsContent>

        <TabsContent value="saved">
          <Card className="border-border/50 shadow-sm overflow-hidden">
            <div className="h-1 bg-primary/30"></div>
            <CardHeader>
              <div className="flex items-center">
                <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle>Saved Jobs</CardTitle>
                  <CardDescription>Jobs you've saved for later</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 bg-muted/30 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                  <Star className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No saved jobs yet</h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  When you find jobs you're interested in, save them to review later. Click the bookmark icon on any job
                  card to save it.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applied">
          <Card className="border-border/50 shadow-sm overflow-hidden">
            <div className="h-1 bg-primary/30"></div>
            <CardHeader>
              <div className="flex items-center">
                <div className="mr-3 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle>Applied Jobs</CardTitle>
                  <CardDescription>Track the status of your job applications</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 bg-muted/30 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                  <CheckCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No applications yet</h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  When you apply for jobs, they'll appear here so you can track your application status and follow up as
                  needed.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default withAuth(SeekerDashboardPage, "seeker")
