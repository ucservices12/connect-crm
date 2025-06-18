import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Bell, HelpCircle } from "lucide-react"
import { IoPersonSharp } from "react-icons/io5"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="flex h-17 shadow-md px-4 sm:px-8 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16">
            <div className="flex items-center gap-2 sm:hidden">
                <SidebarTrigger />
            </div>
            <div className="flex justify-end gap-6 items-center w-full">
                <Link to='#'>
                    <Button size="sm">
                        <HelpCircle />
                        Help
                    </Button>
                </Link>
                <div className="relative cursor-pointer">
                    <Bell size={24} className="font-bold" />
                    <span className="absolute -top-2 -right-1 w-3 h-3 bg-red-600 rounded-full" />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex relative items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-muted">
                            <IoPersonSharp className="text-gray-600" />
                            <span className="absolute -bottom-0 right-0 w-3 h-3 bg-green-700 rounded-full border-2 border-white" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-fit mr-10 p-4" align="start">
                        <DropdownMenuGroup>
                            <div className="flex gap-2 mb-3">
                                <div className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-muted ml-2">
                                    <IoPersonSharp className="text-gray-600" />
                                </div>
                                <div>
                                    <span className="block text-base font-medium">Amol Mahor</span>
                                    <p className="text-muted-foreground text-sm">amolmahor50@gmail.com</p>
                                </div>
                            </div>
                            <Link to='/employee/settings/profile'>
                                <DropdownMenuItem className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                                    Profile
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
