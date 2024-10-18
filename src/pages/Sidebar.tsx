import React from "react"
import { Bell, MessageSquare, User, Search, Mail, BarChart2, Settings, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white flex flex-col border-r">
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold text-orange-500">ELT Global</h1>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <nav className="flex-1">
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-gray-500">GENERAL</h2>
        </div>
        <ul className="space-y-1">
          <li>
            <Button variant="ghost" className="w-full justify-start text-orange-500 bg-orange-100">
              <BarChart2 className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Search className="mr-2 h-4 w-4" />
              Find
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Mail className="mr-2 h-4 w-4" />
              Inbox
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart2 className="mr-2 h-4 w-4" />
              Analytics
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </li>
        </ul>
      </nav>
      <div className="border-t p-4">
        <div className="flex justify-between">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}