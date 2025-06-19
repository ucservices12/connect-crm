import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import {
  userPermissions,
  subRouteMeta,
} from "./pages/permissions/PagesPermission";

// tabs per pages
import {
  OrganazationTabs,
  EmployeeTabs,
  CurrentSalesTabs,
} from "./components/custom/tabs/Tabs";

// employee
import Profile from "./pages/employees/Profile";
import Inventory from "./pages/employees/Inventory";
import DocumentsList from "./pages/employees/DocumentsList";
import HolidayEmp from "./pages/employees/Holiday";
import Handbook from "./pages/employees/Handbook";
import LeavesPolicy from "./pages/employees/LeavesPolicy";
import Reimbursements from "./pages/employees/Reimbursements";

// organazation
import OrganazationDetails from "./pages/organazation/OrganazationDetails";
import Branding from "./pages/organazation/Branding";
import PagesControl from "./pages/organazation/PagesControl";
import ConfigureLeaveType from "./pages/organazation/ConfigureLeaveType";
import DocumentList from "./pages/organazation/DocumentList";
import Policy from "./pages/organazation/Policy";
import Holiday from "./pages/organazation/Holiday";
import Bussinessday from "./pages/organazation/BussinessDay";
import DocumentSequence from "./pages/organazation/DocumentSequence";
import SkillSets from "./pages/organazation/SkillSets";
import LeaveManagement from "./pages/organazation/LeaveManagement";
import Domains from "./pages/organazation/Domains";
import DepartmentEmails from "./pages/organazation/Emails";

// admin
import AdminPage from "./pages/admin/Page";
import EmployeeDirectory from "./pages/admin/EmployeeDirectory";
import RolePermissions from "./pages/admin/RolePermissions";
import Invitations from "./pages/admin/Invitations";
import AssignInventary from "./pages/admin/AssignInventary";

// sales
import SalesDashboard from "./pages/sales/SalesDashboard";
import Contacts from "./pages/sales/Contacts";
// current sales
import CurrentSalesPayment from "./pages/sales/current-sales/CurrentSalesPayment";
import { CurrentSalesCustomers } from "./pages/sales/current-sales/CurrentSalesCustomers";
import CurrentSalesInvoices from "./pages/sales/current-sales/CurrentSalesInvoices";
import { CurrentSalesStatements } from "./pages/sales/current-sales/CurrentSalesStatements";
import { CreateInvoice } from "./pages/sales/current-sales/CreateInvoice";
import { EditInvoice } from "./pages/sales/current-sales/Editinvoice";

function Page({ title }) {
  return (
    <h1 className="scroll-m-20 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
      {title}
    </h1>
  );
}

function getAllRoutes(permissions) {
  const allRoutes = [];
  Object.keys(permissions).forEach((key) => {
    if (Array.isArray(permissions[key])) {
      permissions[key].forEach((sub) => {
        if (subRouteMeta[sub]) {
          allRoutes.push({
            path: subRouteMeta[sub].url,
            title: sub,
          });
        }
      });
    }
  });
  return allRoutes;
}

// employee routes
const employeeSettingsRoutes = [
  { path: "profile", element: <Profile /> },
  { path: "inventory", element: <Inventory /> },
  { path: "documents", element: <DocumentsList /> },
  { path: "org-holidays", element: <HolidayEmp /> },
  { path: "employee-handbook", element: <Handbook /> },
  { path: "leaves-policy", element: <LeavesPolicy /> },
  { path: "reimbursements", element: <Reimbursements /> },
];

// admin routes
const adminEmployeeDirectory = [
  { path: "members", element: <EmployeeDirectory /> },
  { path: "permissions", element: <RolePermissions /> },
  { path: "invitations", element: <Invitations /> },
];

const assignedEmployeeData = [
  { path: "inventory", element: <AssignInventary /> },
];

const adminSettingsRoutes = [
  { path: "", element: <OrganazationDetails /> },
  { path: "branding", element: <Branding /> },
  { path: "pages-control", element: <PagesControl /> },
  { path: "billing", element: <Page title="Billing" /> },
  { path: "leave-type", element: <ConfigureLeaveType /> },
  { path: "document-list", element: <DocumentList /> },
  { path: "policy", element: <Policy /> },
  { path: "holidays", element: <Holiday /> },
  { path: "business-days", element: <Bussinessday /> },
  { path: "document-sequence", element: <DocumentSequence /> },
  { path: "skill-sets", element: <SkillSets /> },
  { path: "leave-management", element: <LeaveManagement /> },
  { path: "domain", element: <Domains /> },
  { path: "record-face", element: <Page title="Record Face" /> },
  { path: "email-settings", element: <DepartmentEmails /> },
];

const currentSalesRoute = [
  { path: "", element: <CurrentSalesPayment /> },
  { path: "statements", element: <CurrentSalesStatements /> },
  { path: "customers", element: <CurrentSalesCustomers /> },
  { path: "invoices", element: <CurrentSalesInvoices /> },
  { path: "invoices/create", element: <CreateInvoice /> },
  { path: "invoices/update/:id", element: <EditInvoice /> },
];

export default function App() {
  const allRoutes = getAllRoutes(userPermissions);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Page title="Home" />} />

          {/* Employee Settings */}
          <Route path="employee/settings/*" element={<EmployeeTabs />}>
            {employeeSettingsRoutes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Route>

          {/* Admin Settings */}
          <Route path="admin/settings/*" element={<OrganazationTabs />}>
            {adminSettingsRoutes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Route>
          <Route path="admin/myteam/*" element={<AdminPage />}>
            {adminEmployeeDirectory.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Route>
          <Route path="admin/*" element={<AssignInventary />}>
            {assignedEmployeeData.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Route>

          {/* sales */}
          <Route path="sales-board" element={<SalesDashboard />} />

          <Route path="current-sales/*" element={<CurrentSalesTabs />}>
            {currentSalesRoute.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Route>

          {/* Other dynamic routes */}
          {allRoutes
            .filter(
              (route) =>
                !route.path.startsWith("/employee/settings/") &&
                !route.path.startsWith("/admin/settings/") &&
                !route.path.startsWith("/admin/myteam/") &&
                !route.path.startsWith("/admin/") &&
                !route.path.startsWith("/")
            )
            .map((route) => (
              <Route
                key={route.path}
                path={
                  route.path.startsWith("/") ? route.path.slice(1) : route.path
                }
                element={<Page title={route.title} />}
              />
            ))}
        </Route>
      </Routes>
    </div>
  );
}
