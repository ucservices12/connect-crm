import Profile from "@/pages/employees/Profile";
import Inventory from "@/pages/employees/Inventory";
import DocumentsList from "@/pages/employees/DocumentsList";
import HolidayEmp from "@/pages/employees/Holiday";
import Handbook from "@/pages/employees/Handbook";
import LeavesPolicy from "@/pages/employees/LeavesPolicy";
import Reimbursements from "@/pages/employees/Reimbursements";

export const employeeSettingsRoutes = [
    { path: "profile", element: <Profile /> },
    { path: "inventory", element: <Inventory /> },
    { path: "documents", element: <DocumentsList /> },
    { path: "org-holidays", element: <HolidayEmp /> },
    { path: "employee-handbook", element: <Handbook /> },
    { path: "leaves-policy", element: <LeavesPolicy /> },
    { path: "reimbursements", element: <Reimbursements /> },
];
