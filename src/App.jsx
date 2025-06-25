import { Routes, Route } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import AuthLayout from "./layouts/AuthLayout";
import { useAuth } from "@/hooks/useAuth";

import { userPermissions, subRouteMeta } from "@/pages/permissions/PagesPermission";
import SalesRoutes from "@/routes/SalesRoutes";
import FinanceRoutes from "@/routes/FinanceRoutes";
import AdminRoutes from "@/routes/AdminRoutes";
import EmployeeRoutes from "@/routes/EmployeeRoutes";

export function Page({ title }) {
  return (
    <h1 className="scroll-m-20 text-md sm:text-2xl font-bold tracking-tight text-balance">
      {title} Comming soon....
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

export default function App() {
  const { isAuthenticated } = useAuth();
  const allRoutes = getAllRoutes(userPermissions);

  const renderNestedRoutes = (routes) =>
    routes.map((r) => <Route key={r.path} path={r.path} element={r.element} />);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<AuthLayout />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Page title="Home" />} />

        {/* employee */}
        <Route path="employee/*" element={<EmployeeRoutes />} />

        {/* All admin routes handled in AdminRoutes */}
        <Route path="admin/*" element={<AdminRoutes />} />

        {/* All sales routes handled in SalesRoutes */}
        <Route path="/*" element={<SalesRoutes />} />

        <Route path="finance/*" element={<FinanceRoutes />} />

        {/* Fallback Routes from Permission */}
        {allRoutes
          .filter(
            (route) =>
              !route.path.startsWith("/employee/settings/") &&
              !route.path.startsWith("/admin/settings/") &&
              !route.path.startsWith("/admin/") &&
              !route.path.startsWith("/contacts") &&
              !route.path.startsWith("/current-sales") &&
              !route.path.startsWith("/future-sales") &&
              !route.path.startsWith("/sales-settings") &&
              !route.path.startsWith("/finance") &&
              !route.path.startsWith("/sales-board")
          )
          .map((route) => (
            <Route
              key={route.path}
              path={route.path.startsWith("/") ? route.path.slice(1) : route.path}
              element={<Page title={route.title} />}
            />
          ))}
      </Route>
    </Routes>
  );
}