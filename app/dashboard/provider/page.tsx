"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobList } from "@/components/job-list"
import { withAuth } from "@/lib/auth-middleware"
import { useAuth } from "@/lib/auth-context"
import { Plus } from "lucide-react"

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
        <Button asChild>
          <Link href="/dashboard/provider/post-job">
            <Plus className="mr-2 h-4 w-4" />
            Post a New Job
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="jobs" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="jobs">My Jobs</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-6">
          <JobList providerId={user.id} />
        </TabsContent>

        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Job Applications</CardTitle>
              <CardDescription>View and manage applications for your job listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No applications yet</h3>
                <p className="text-muted-foreground mt-2">Applications from job seekers will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Job Analytics</CardTitle>
              <CardDescription>Track the performance of your job listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">Analytics coming soon</h3>
                <p className="text-muted-foreground mt-2">
                  We're working on providing detailed analytics for your job listings
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
