"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  role: "seeker" | "provider"
}

type AuthContextType = {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string, role: "seeker" | "provider") => Promise<void>
  signOut: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating authentication for demo purposes
      const mockUsers = [
        { id: "1", name: "John Seeker", email: "seeker@example.com", password: "password", role: "seeker" },
        { id: "2", name: "Jane Provider", email: "provider@example.com", password: "password", role: "provider" },
      ]

      const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

      if (!foundUser) {
        throw new Error("Invalid credentials")
      }

      const { password: _, ...userWithoutPassword } = foundUser

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))
      setUser(userWithoutPassword as User)

      // Redirect based on role
      if (userWithoutPassword.role === "provider") {
        router.push("/dashboard/provider")
      } else {
        router.push("/dashboard/seeker")
      }
    } catch (error) {
      console.error("Sign in error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (name: string, email: string, password: string, role: "seeker" | "provider") => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating registration for demo purposes
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        role,
      }

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(newUser))
      setUser(newUser)

      // Redirect based on role
      if (role === "provider") {
        router.push("/dashboard/provider")
      } else {
        router.push("/dashboard/seeker")
      }
    } catch (error) {
      console.error("Sign up error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
