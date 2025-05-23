"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobList } from "@/components/job-list"
import { withAuth } from "@/lib/auth-middleware"
import { useAuth } from "@/lib/auth-context"
import { Briefcase, Star } from "lucide-react"

function SeekerDashboardPage() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <p className="text-muted-foreground mt-1">Find and track your job opportunities</p>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList className="mb-8">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
          <TabsTrigger value="applied">Applied Jobs</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-6">
          <Card className="bg-muted/50 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Jobs Matching Your Profile
              </CardTitle>
              <CardDescription>Based on your skills and preferences</CardDescription>
            </CardHeader>
          </Card>

          <JobList featured={true} />
        </TabsContent>

        <TabsContent value="saved">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="mr-2 h-5 w-5 text-yellow-500" />
                Saved Jobs
              </CardTitle>
              <CardDescription>Jobs you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No saved jobs yet</h3>
                <p className="text-muted-foreground mt-2">Jobs you save will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applied">
          <Card>
            <CardHeader>
              <CardTitle>Applied Jobs</CardTitle>
              <CardDescription>Track the status of your job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No applications yet</h3>
                <p className="text-muted-foreground mt-2">Jobs you apply to will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default withAuth(SeekerDashboardPage, "seeker")
