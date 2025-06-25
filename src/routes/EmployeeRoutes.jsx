import { Routes, Route } from "react-router-dom";
import Profile from "@/pages/employees/Profile";
import Inventory from "@/pages/employees/Inventory";
import DocumentsList from "@/pages/employees/DocumentsList";
import HolidayEmp from "@/pages/employees/Holiday";
import Handbook from "@/pages/employees/Handbook";
import LeavesPolicy from "@/pages/employees/LeavesPolicy";
import Reimbursements from "@/pages/employees/Reimbursements";

import { EmployeeTabs } from "@/components/custom/tabs/Tabs";

export default function EmployeeRoutes() {
    return (
        <Routes>
            <Route path="settings/*" element={<EmployeeTabs />}>
                <Route path="profile" element={<Profile />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="documents" element={<DocumentsList />} />
                <Route path="org-holidays" element={<HolidayEmp />} />
                <Route path="employee-handbook" element={<Handbook />} />
                <Route path="leaves-policy" element={<LeavesPolicy />} />
                <Route path="reimbursements" element={<Reimbursements />} />
            </Route>
        </Routes>
    );
}