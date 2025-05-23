export type Job = {
  id: string
  title: string
  company: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship"
  salary: string
  description: string
  requirements: string[]
  responsibilities: string[]
  postedAt: string
  providerId: string
  featured?: boolean
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description:
      "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications.",
    requirements: [
      "5+ years of experience with React",
      "Strong knowledge of JavaScript/TypeScript",
      "Experience with state management libraries",
      "Understanding of responsive design principles",
    ],
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable components and libraries",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with backend developers and designers",
    ],
    postedAt: "2023-05-15T10:00:00Z",
    providerId: "2",
    featured: true,
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    description: "Join our backend team to build scalable and efficient server-side applications.",
    requirements: [
      "3+ years of experience with Node.js",
      "Knowledge of database systems",
      "Experience with RESTful APIs",
      "Understanding of server architecture",
    ],
    responsibilities: [
      "Design and implement backend services",
      "Optimize database queries",
      "Ensure high performance and responsiveness",
      "Collaborate with frontend developers",
    ],
    postedAt: "2023-05-10T14:30:00Z",
    providerId: "2",
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "CreativeMinds",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "We're seeking a talented UX/UI Designer to create amazing user experiences.",
    requirements: [
      "Portfolio demonstrating UX/UI skills",
      "Experience with design tools (Figma, Sketch)",
      "Understanding of user-centered design principles",
      "Knowledge of HTML/CSS is a plus",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and user flows",
      "Conduct user research and testing",
      "Collaborate with developers to implement designs",
      "Maintain design systems",
    ],
    postedAt: "2023-05-08T09:15:00Z",
    providerId: "3",
    featured: true,
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX (Hybrid)",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
    requirements: [
      "Experience with AWS or Azure",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Experience with CI/CD pipelines",
      "Understanding of infrastructure as code",
    ],
    responsibilities: [
      "Manage cloud infrastructure",
      "Implement and maintain CI/CD pipelines",
      "Monitor system performance",
      "Troubleshoot and resolve infrastructure issues",
    ],
    postedAt: "2023-05-05T11:45:00Z",
    providerId: "4",
  },
  {
    id: "5",
    title: "Product Manager",
    company: "InnovateCo",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    description: "Lead product development from conception to launch, working with cross-functional teams.",
    requirements: [
      "3+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Excellent communication abilities",
      "Technical background preferred",
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Gather and prioritize requirements",
      "Work with engineering, design, and marketing teams",
      "Analyze market trends and competition",
    ],
    postedAt: "2023-05-03T13:20:00Z",
    providerId: "5",
    featured: true,
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Remote",
    type: "Full-time",
    salary: "$125,000 - $155,000",
    description: "Apply your expertise in data science to extract insights from our vast datasets.",
    requirements: [
      "Advanced degree in a quantitative field",
      "Experience with Python and data science libraries",
      "Knowledge of machine learning algorithms",
      "Strong statistical background",
    ],
    responsibilities: [
      "Develop and implement data models",
      "Extract insights from complex datasets",
      "Create visualizations and reports",
      "Collaborate with engineering and product teams",
    ],
    postedAt: "2023-05-01T10:30:00Z",
    providerId: "6",
  },
  {
    id: "7",
    title: "Marketing Specialist",
    company: "GrowthHackers",
    location: "Miami, FL (Hybrid)",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description: "Join our marketing team to help grow our brand and acquire new customers.",
    requirements: [
      "2+ years of marketing experience",
      "Knowledge of digital marketing channels",
      "Experience with marketing analytics",
      "Creative thinking and problem-solving skills",
    ],
    responsibilities: [
      "Plan and execute marketing campaigns",
      "Manage social media presence",
      "Analyze campaign performance",
      "Collaborate with content and design teams",
    ],
    postedAt: "2023-04-28T15:45:00Z",
    providerId: "7",
  },
  {
    id: "8",
    title: "Mobile Developer (iOS)",
    company: "AppWorks",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description: "Build and maintain our iOS applications, ensuring high-quality user experiences.",
    requirements: [
      "3+ years of iOS development experience",
      "Proficiency in Swift",
      "Understanding of iOS frameworks",
      "Experience with RESTful APIs",
    ],
    responsibilities: [
      "Develop and maintain iOS applications",
      "Implement new features and functionality",
      "Ensure code quality and performance",
      "Collaborate with design and backend teams",
    ],
    postedAt: "2023-04-25T09:00:00Z",
    providerId: "8",
    featured: true,
  },
  {
    id: "9",
    title: "Content Writer",
    company: "WordCraft",
    location: "Remote",
    type: "Part-time",
    salary: "$25 - $35 per hour",
    description: "Create engaging content for our blog, social media, and marketing materials.",
    requirements: [
      "Strong writing and editing skills",
      "Experience creating content for digital platforms",
      "SEO knowledge",
      "Ability to meet deadlines",
    ],
    responsibilities: [
      "Write blog posts and articles",
      "Create social media content",
      "Edit and proofread content",
      "Research industry trends",
    ],
    postedAt: "2023-04-22T14:15:00Z",
    providerId: "9",
  },
  {
    id: "10",
    title: "Customer Support Specialist",
    company: "ServiceFirst",
    location: "Denver, CO (Remote)",
    type: "Full-time",
    salary: "$50,000 - $65,000",
    description: "Provide exceptional support to our customers, helping them resolve issues and maximize value.",
    requirements: [
      "1+ years of customer support experience",
      "Excellent communication skills",
      "Problem-solving abilities",
      "Patience and empathy",
    ],
    responsibilities: [
      "Respond to customer inquiries",
      "Troubleshoot and resolve issues",
      "Document customer feedback",
      "Collaborate with product and engineering teams",
    ],
    postedAt: "2023-04-20T11:30:00Z",
    providerId: "10",
  },
]

// Helper functions to work with the data
export function getAllJobs() {
  return jobs
}

export function getFeaturedJobs() {
  return jobs.filter((job) => job.featured)
}

export function getJobById(id: string) {
  return jobs.find((job) => job.id === id)
}

export function getJobsByProviderId(providerId: string) {
  return jobs.filter((job) => job.providerId === providerId)
}

export function searchJobs(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(lowercaseQuery) ||
      job.company.toLowerCase().includes(lowercaseQuery) ||
      job.location.toLowerCase().includes(lowercaseQuery) ||
      job.description.toLowerCase().includes(lowercaseQuery),
  )
}
