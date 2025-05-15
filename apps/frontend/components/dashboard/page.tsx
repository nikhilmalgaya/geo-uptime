"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Activity,
  AlertCircle,
  Bell,
  CheckCircle,
  Clock,
  Globe,
  Home,
  LineChart,
  LogOut,
  Settings,
  User,
  XCircle,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

// Mock data for websites
const websites = [
  {
    id: 1,
    name: "Main Website",
    url: "https://example.com",
    status: "up", // up or down
    uptime: "99.98%",
    responseTime: "187ms",
    lastChecked: "2 minutes ago",
    // Last 10 status checks (true = up, false = down)
    statusHistory: [true, true, true, false, true, true, true, true, true, true],
  },
  {
    id: 2,
    name: "API Service",
    url: "https://api.example.com",
    status: "down",
    uptime: "98.76%",
    responseTime: "543ms",
    lastChecked: "1 minute ago",
    statusHistory: [false, false, true, true, true, true, false, true, true, true],
  },
  {
    id: 3,
    name: "Customer Portal",
    url: "https://portal.example.com",
    status: "up",
    uptime: "99.92%",
    responseTime: "210ms",
    lastChecked: "3 minutes ago",
    statusHistory: [true, true, true, true, true, true, true, true, true, true],
  },
]

export default function Dashboard() {
  const [selectedWebsite, setSelectedWebsite] = useState(websites[0])

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar>
          <SidebarHeader className="border-b">
            <div className="flex items-center gap-2 px-2 py-3">
              <Zap className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold">BetterUptime</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                      <Link href="/dashboard">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Globe className="h-4 w-4" />
                        <span>Websites</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Bell className="h-4 w-4" />
                        <span>Alerts</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <LineChart className="h-4 w-4" />
                        <span>Reports</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Your Websites</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {websites.map((website) => (
                    <SidebarMenuItem key={website.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={selectedWebsite.id === website.id}
                        onClick={() => setSelectedWebsite(website)}
                      >
                        <button>
                          {website.status === "up" ? (
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span>{website.name}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="flex items-center gap-2 font-semibold">Website Monitoring Dashboard</div>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="icon">
                <User className="h-4 w-4" />
                <span className="sr-only">User</span>
              </Button>
            </div>
          </header>

          <main className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{selectedWebsite.name}</CardTitle>
                  <CardDescription>{selectedWebsite.url}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  {selectedWebsite.status === "up" ? (
                    <>
                      <div className="h-4 w-4 rounded-full bg-emerald-500"></div>
                      <span className="font-medium text-emerald-500">Online</span>
                    </>
                  ) : (
                    <>
                      <div className="h-4 w-4 rounded-full bg-red-500"></div>
                      <span className="font-medium text-red-500">Offline</span>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="mb-2 text-sm font-medium">Last 30 Minutes Status</h3>
                  <div className="flex gap-1">
                    {selectedWebsite.statusHistory.map((status, index) => (
                      <div
                        key={index}
                        className={`h-12 w-full rounded-sm ${status ? "bg-emerald-500" : "bg-red-500"}`}
                        title={`Check ${index + 1}: ${status ? "Online" : "Offline"}`}
                      ></div>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>30 minutes ago</span>
                    <span>Now</span>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Uptime</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold">{selectedWebsite.uptime}</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Response Time</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold">{selectedWebsite.responseTime}</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Last Checked</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold">{selectedWebsite.lastChecked}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-full md:col-span-2">
              <CardHeader>
                <CardTitle>Recent Incidents</CardTitle>
                <CardDescription>View recent downtime incidents for {selectedWebsite.name}</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedWebsite.status === "down" ? (
                  <div className="rounded-md border border-red-200 bg-red-50 p-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-500" />
                      <h3 className="font-medium text-red-700">Ongoing Incident</h3>
                    </div>
                    <p className="mt-2 text-sm text-red-600">
                      Your website is currently experiencing downtime. Our system detected an issue approximately 15
                      minutes ago. We'll notify you when it's back online.
                    </p>
                  </div>
                ) : selectedWebsite.statusHistory.includes(false) ? (
                  <div className="rounded-md border border-amber-200 bg-amber-50 p-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      <h3 className="font-medium text-amber-700">Recent Incident Resolved</h3>
                    </div>
                    <p className="mt-2 text-sm text-amber-600">
                      Your website experienced a brief downtime in the last 30 minutes, but is now back online. Total
                      downtime: 3 minutes.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 p-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                      <h3 className="font-medium text-emerald-700">All Systems Operational</h3>
                    </div>
                    <p className="mt-2 text-sm text-emerald-600">
                      No incidents reported in the last 24 hours. Your website is running smoothly.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button className="justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Configure Alerts
                </Button>
                <Button variant="outline" className="justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Monitor Settings
                </Button>
                <Button variant="outline" className="justify-start">
                  <LineChart className="mr-2 h-4 w-4" />
                  View Detailed Reports
                </Button>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
