import {
    SquareTerminal as SquareTerminalIcon,
    ClipboardList as ClipboardListIcon,
    Goal as GoalIcon,
    Clock as ClockIcon,
    Globe as GlobeIcon,
    MessageCircle as MessageCircleIcon,
    Calendar as CalendarIcon,
    Settings2 as Settings2Icon,
    UserCheck as UserCheckIcon,
    BookOpen,
    FileText as FileTextIcon,
    Users2,
    FileArchive,
    Briefcase as BriefcaseIcon,
    UserPlus as UserPlusIcon,
    FileQuestion,
    DollarSign,
    CreditCard,
    Wallet,
    ShoppingCart,
    BarChart,
    ListChecks,
    Bot,
    Target,
    BadgeIndianRupee,
    TicketsPlane,
    Settings,
    HandCoins,
    CirclePercent,
    ChartSpline,
    Kanban,
} from "lucide-react"

// Subroute meta: icon and url
export const subRouteMeta = {
    Dashboard: { icon: SquareTerminalIcon, url: "/" },
    organizations: { icon: Users2, url: "/superadmin/organizations/list" },
    Forms: { icon: FileTextIcon, url: "/forms" },
    Tasks: { icon: ClipboardListIcon, url: "/employee/tasks" },
    Goals: { icon: GoalIcon, url: "/employee/goals/dashboard" },
    "Log Hours": { icon: ClockIcon, url: "/employee/loghours" },
    "Website Pages": { icon: GlobeIcon, url: "/employee/blogs" },
    Chat: { icon: MessageCircleIcon, url: "/employee/chat" },
    Calendar: { icon: CalendarIcon, url: "/employee/calendar/leaves" },
    Settings: { icon: Settings, url: "/employee/settings/profile" },
    Attendance: { icon: UserCheckIcon, url: "/employee/attendance" },
    Projects: { icon: Target, url: "/projects" },
    "My Courses": { icon: BookOpen, url: "/learning/mycourses" },
    "Manage Courses": { icon: FileTextIcon, url: "/learning/courses" },
    Employees: { icon: Users2, url: "/admin/myteam/members" },
    "Admin Settings": { icon: Settings2Icon, url: "/admin/settings" },
    Inventory: { icon: FileArchive, url: "/admin/inventory" },
    Jobs: { icon: BriefcaseIcon, url: "/hiring/jobs" },
    Candidates: { icon: UserPlusIcon, url: "/hiring/candidates" },
    "Question Papers": { icon: FileQuestion, url: "/hiring/question-papers" },
    "Finance Board": { icon: HandCoins, url: "/finance/board" },
    Transactions: { icon: CreditCard, url: "/finance/transactions" },
    Payrolls: { icon: Wallet, url: "/finance/payrolls" },
    Purchases: { icon: ShoppingCart, url: "/finance/purchases" },
    Income: { icon: BadgeIndianRupee, url: "/finance/income" },
    Reports: { icon: TicketsPlane, url: "/finance/reports/profit-loss" },
    Setting: { icon: Settings, url: "/finance/reports/settings" },
    Requests: { icon: ListChecks, url: "/requests" },
    Marketing: { icon: GlobeIcon, url: "/marketing" },
    Subscribers: { icon: Users2, url: "/subscribers" },
    Campaigns: { icon: ClipboardListIcon, url: "/campaigns" },
    Scheduling: { icon: CalendarIcon, url: "/scheduling" },
    "Social Posts": { icon: MessageCircleIcon, url: "/social-posts" },
    Blogs: { icon: FileTextIcon, url: "/blogs" },
    "Sales Board": { icon: Kanban, url: "/sales-board" },
    Contacts: { icon: Users2, url: "/contacts" },
    "My Things": { icon: Bot, url: "/my-things" },
    "Current Sales": { icon: CirclePercent, url: "/current-sales" },
    "Future Sales": { icon: ChartSpline, url: "/future-sales" },
    "Sales Settings": { icon: Settings2Icon, url: "/sales-settings" },
    "Website Stuff": { icon: GlobeIcon, url: "/website-stuff" },
    // Add more as needed
}

// Role access: which modules each role can access
export const roleAccess = {
    employee: [
        "employee", "projects", "learning"
    ],
    manager: [
        "employee", "projects", "finance", "sales"
    ],
    admin: [
        "employee", "projects", "learning", "administration", "hiring", "finance", "marketing", "sales", "serviceRequest", "superadmin"
    ],
    hrAdmin: [
        "employee", "hiring", "learning", "administration"
    ],
    sales: [
        "sales", "employee",
    ],
    hr: [
        "hiring", "employee"
    ],
    finance: [
        "finance", "employee"
    ],
    superadmin: [
        "superadmin"
    ]
}

// Permissions object (simulate from backend)
export const userPermissions = {
    employee: true,
    employeeSubRoutes: [
        "Dashboard", "Tasks", "Goals", "Log Hours", "Website Pages", "Chat", "Calendar", "Settings", "Attendance"
    ],
    projects: true,
    projectSubRoutes: [
        "Projects"
    ],
    finance: true,
    financeSubRoutes: [
        "Finance Board", "Transactions", "Payrolls", "Purchases", "Income", "Reports", "Setting"
    ],
    hiring: true,
    hiringSubRoutes: [
        "Jobs", "Candidates", "Question Papers"
    ],
    learning: true,
    learningSubRoutes: [
        "My Courses", "Manage Courses"
    ],
    marketing: true,
    marketingSubRoutes: [
        "Marketing", "Subscribers", "Campaigns", "Scheduling", "Social Posts", "Blogs"
    ],
    sales: true,
    salesSubRoutes: [
        "Sales Board", "Contacts", "My Things", "Current Sales", "Future Sales", "Sales Settings", "Website Stuff"
    ],
    administration: true,
    administrationSubRoutes: [
        "Employees", "Admin Settings", "Inventory"
    ],
    serviceRequest: true,
    serviceRequestSubRoutes: [
        "Requests"
    ],
    superadmin: true,
    superadminSubRoutes: [
        "Dashboard", "organizations", "Forms"
    ],
    // CRUD permissions example (simulate)
    permissions: {
        employee_crud: { createAllowed: true, updateAllowed: true, deleteAllowed: true },
        project_crud: { createAllowed: true, updateAllowed: true, deleteAllowed: true },
        // ...add more as needed
    }
}

// Define the order of modules for sidebar/steps
const MODULE_ORDER = [
    "employee",        // My Stuff
    "projects",        // Projects
    "learning",        // Learning
    "administration",  // Administration
    "hiring",          // Hiring
    "finance",         // Finance
    "marketing",       // Marketing
    "sales",           // Sales
    "serviceRequest",  // Service Requests
    "superadmin"       // Super Admin
]

// Utility: Get all allowed routes for a role, ordered by MODULE_ORDER
export function getRoutesForRole(role) {
    const modules = roleAccess[role] || []
    let routes = []

    MODULE_ORDER.forEach(module => {
        if (modules.includes(module) && userPermissions[module]) {
            const subKey = `${module}SubRoutes`
            const subRoutes = userPermissions[subKey] || []
            subRoutes.forEach(sub => {
                if (subRouteMeta[sub]) {
                    let crudKey = `${module}_crud`
                    let permissions = userPermissions.permissions?.[crudKey] || null
                    routes.push({
                        name: sub,
                        icon: subRouteMeta[sub].icon,
                        url: subRouteMeta[sub].url,
                        module,
                        permissions,
                    })
                }
            })
        }
    })

    // Service Requests (if allowed and not already included)
    if (modules.includes("serviceRequest") && userPermissions.serviceRequest) {
        (userPermissions.serviceRequestSubRoutes || []).forEach(sub => {
            if (subRouteMeta[sub]) {
                routes.push({
                    name: sub,
                    icon: subRouteMeta[sub].icon,
                    url: subRouteMeta[sub].url,
                    module: "serviceRequest",
                    permissions: null,
                })
            }
        })
    }

    // Super Admin (if allowed)
    if (modules.includes("superadmin") && userPermissions.superadmin) {
        (userPermissions.superadminSubRoutes || []).forEach(sub => {
            if (subRouteMeta[sub]) {
                routes.push({
                    name: sub,
                    icon: subRouteMeta[sub].icon,
                    url: subRouteMeta[sub].url,
                    module: "superadmin",
                    permissions: null,
                })
            }
        })
    }

    // Remove duplicates by url
    const seen = new Set()
    const uniqueRoutes = []
    for (const route of routes) {
        if (!seen.has(route.url)) {
            seen.add(route.url)
            uniqueRoutes.push(route)
        }
    }

    return uniqueRoutes
}

// Example usage:
// const adminRoutes = getRoutesForRole('admin')
// console.log(adminRoutes)