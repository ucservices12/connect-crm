import OrganazationDetails from "@/pages/organazation/OrganazationDetails";
import Branding from "@/pages/organazation/Branding";
import PagesControl from "@/pages/organazation/PagesControl";
import ConfigureLeaveType from "@/pages/organazation/ConfigureLeaveType";
import DocumentList from "@/pages/organazation/DocumentList";
import Policy from "@/pages/organazation/Policy";
import Holiday from "@/pages/organazation/Holiday";
import Bussinessday from "@/pages/organazation/BussinessDay";
import DocumentSequence from "@/pages/organazation/DocumentSequence";
import SkillSets from "@/pages/organazation/SkillSets";
import LeaveManagement from "@/pages/organazation/LeaveManagement";
import Domains from "@/pages/organazation/Domains";
import DepartmentEmails from "@/pages/organazation/Emails";
import { Page } from "@/App";

export const adminSettingsRoutes = [
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
