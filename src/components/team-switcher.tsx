"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function TeamSwitcher({ data }) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(data?.teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-accent-foreground cursor-pointer data-[state=open]:text-white hover:bg-accent-foreground bg-accent-foreground"
            >
              <p className="grid flex-1 text-center text-accent font-normal text-xs leading-normal">
                {activeTeam.name}
              </p>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) mt-3 p-3 min-w-56 rounded-lg bg-accent-foreground z-50 border-none text-white"
            align="start"
            side={isMobile ? "bottom" : ""}
            sideOffset={4}
          >
            {data?.navMain.map((team, index) => (
              <div
                key={index}
                className="gap-2 p-3 text-sm font-semibold cursor-pointer"
              >
                {team.title}
              </div>
            ))}
            <div className="grid gap-3 mt-4">
              <Button className="w-full bg-white/10 hover:bg-white/10 " variant="outlined">
                Switch Organazation
                <ChevronsUpDown />
              </Button>
              <Button className="w-full bg-white/10 hover:bg-white/10 " variant="outlined">
                Create Workspace
                <Plus />
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
