// chat
import ChatWidget from "@/pages/employees/chatbot/ChatWidget";

// /attendance
import AttendanceCapture from "@/pages/employees/attendance/AttendanceCapture";

// settings
import { Routes, Route } from "react-router-dom";
import Profile from "@/pages/employees/settings/Profile";
import Inventory from "@/pages/employees/settings/Inventory";
import DocumentsList from "@/pages/employees/settings/DocumentsList";
import HolidayEmp from "@/pages/employees/settings/Holiday";
import Handbook from "@/pages/employees/settings/Handbook";
import LeavesPolicy from "@/pages/employees/settings/LeavesPolicy";
import Reimbursements from "@/pages/employees/settings/Reimbursements";

import { EmployeeTabs } from "@/components/custom/tabs/Tabs";
import Dashboard from "@/pages/employees/dashboard/Dashboard";

export default function EmployeeRoutes() {
    return (
        <Routes>
            <Route path="" element={<Dashboard />} />

            <Route path="chat" element={<ChatWidget />} />

            <Route path="attendance" element={<AttendanceCapture />} />

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