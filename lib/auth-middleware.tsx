"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

export function withAuth(Component: React.ComponentType, requiredRole?: "seeker" | "provider") {
  return function AuthenticatedComponent(props: any) {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!loading && !user) {
        router.push("/auth/signin")
      } else if (!loading && user && requiredRole && user.role !== requiredRole) {
        // Redirect to appropriate dashboard if user has wrong role
        router.push(user.role === "seeker" ? "/dashboard/seeker" : "/dashboard/provider")
      }
    }, [user, loading, router])

    // Show nothing while checking authentication
    if (loading || !user) {
      return null
    }

    // If role is required and user doesn't have it, show nothing (will redirect)
    if (requiredRole && user.role !== requiredRole) {
      return null
    }

    // User is authenticated and has correct role, render the component
    return <Component {...props} />
  }
}
