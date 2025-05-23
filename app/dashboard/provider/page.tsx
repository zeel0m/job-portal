"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobList } from "@/components/job-list"
import { withAuth } from "@/lib/auth-middleware"
import { useAuth } from "@/lib/auth-context"
import { Plus, BarChart3, Users, FileText } from "lucide-react"

function ProviderDashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("jobs")

  if (!user) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Provider Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your job listings and applications</p>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/dashboard/provider/post-job">
            <Plus className="mr-2 h-4 w-4" />
            Post a New Job
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-background border-border/50 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Active Jobs</CardTitle>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-sm text-muted-foreground">Jobs currently active</p>
          </CardContent>
        </Card>

        <Card className="bg-background border-border/50 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Applications</CardTitle>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">Total applications received</p>
          </CardContent>
        </Card>

        <Card className="bg-background border-border/50 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Views</CardTitle>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">254</div>
            <p className="text-sm text-muted-foreground">Job listing views this week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="jobs" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/50 p-1 h-auto">
          <TabsTrigger
            value="jobs"
            className="py-2 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            My Jobs
          </TabsTrigger>
          <TabsTrigger
            value="applications"
            className="py-2 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Applications
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="py-2 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
          >
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-6">
          <JobList providerId={user.id} />
        </TabsContent>

        <TabsContent value="applications">
          <Card className="border-border/50 shadow-sm overflow-hidden">
            <div className="h-1 bg-primary/30"></div>
            <CardHeader>
              <CardTitle>Job Applications</CardTitle>
              <CardDescription>View and manage applications for your job listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 bg-muted/30 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No applications yet</h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  Applications from job seekers will appear here. Make sure your job listings are active and visible.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="border-border/50 shadow-sm overflow-hidden">
            <div className="h-1 bg-primary/30"></div>
            <CardHeader>
              <CardTitle>Job Analytics</CardTitle>
              <CardDescription>Track the performance of your job listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 bg-muted/30 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                  <BarChart3 className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">Analytics coming soon</h3>
                <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                  We're working on providing detailed analytics for your job listings. Check back soon for insights on
                  views, applications, and more.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default withAuth(ProviderDashboardPage, "provider")
