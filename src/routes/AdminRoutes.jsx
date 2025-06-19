import AssignInventary from "@/pages/admin/AssignInventary";
import AdminPage from "@/pages/admin/Page";
import EmployeeDirectory from "@/pages/admin/EmployeeDirectory";
import RolePermissions from "@/pages/admin/RolePermissions";
import Invitations from "@/pages/admin/Invitations";

export const adminEmployeeRoutes = [
    { path: "members", element: <EmployeeDirectory /> },
    { path: "permissions", element: <RolePermissions /> },
    { path: "invitations", element: <Invitations /> },
];

export const adminInventoryRoutes = [
    { path: "inventory", element: <AssignInventary /> },
];

export const adminBaseRoutes = [
    { path: "myteam/*", element: <AdminPage />, children: adminEmployeeRoutes },
    { path: "*", element: <AssignInventary />, children: adminInventoryRoutes },
];
