import SalesDashboard from "@/pages/sales/SalesDashboard";
import CurrentSalesPayment from "@/pages/sales/current-sales/CurrentSalesPayment";
import { CurrentSalesCustomers } from "@/pages/sales/current-sales/CurrentSalesCustomers";
import CurrentSalesInvoices from "@/pages/sales/current-sales/CurrentSalesInvoices";
import { CurrentSalesStatements } from "@/pages/sales/current-sales/CurrentSalesStatements";
import { CreateInvoice } from "@/pages/sales/current-sales/CreateInvoice";
import { EditInvoice } from "@/pages/sales/current-sales/Editinvoice";

import { FutureSalesEstimate } from "@/pages/sales/future-sales/FutureSalesEstimate";
import Deals from "@/pages/sales/future-sales/Deals";
import Proposals from "@/pages/sales/future-sales/Proposals";
import ProposalDocument from "@/pages/sales/future-sales/ProposalDocument";
import { CreateEstimate } from "@/pages/sales/future-sales/CreateEstimate";
import { EditEstimate } from "@/pages/sales/future-sales/EditEstimate";

// sales setttings
import ProductService from "@/pages/sales/sales-settings/ProductService";
import Taxes from "@/pages/sales/sales-settings/Taxes";
import Customers from "@/pages/sales/sales-settings/Customers";
import ChooseCurrency from "@/pages/sales/sales-settings/ChooseCurrency";
import Footer from "@/pages/sales/sales-settings/Footer";
import NotesAndTerms from "@/pages/sales/sales-settings/NotesAndTerms";
import Industries from "@/pages/sales/sales-settings/Industries";
import VerifyEmails from "@/pages/sales/sales-settings/VerifyEmails";
import MeetingLinks from "@/pages/sales/sales-settings/MeetingLinks";

export const currentSalesRoutes = [
    { path: "", element: <CurrentSalesPayment /> },
    { path: "statements", element: <CurrentSalesStatements /> },
    { path: "customers", element: <CurrentSalesCustomers /> },
    { path: "invoices", element: <CurrentSalesInvoices /> },
    { path: "invoices/create", element: <CreateInvoice /> },
    { path: "invoices/update/:id", element: <EditInvoice /> },
];

export const futureSalesRoutes = [
    { path: "", element: <FutureSalesEstimate /> },
    { path: "deals", element: <Deals /> },
    { path: "proposals", element: <Proposals /> },
    { path: "proposals/create/:id", element: <ProposalDocument /> },
    { path: "estimates/create", element: <CreateEstimate /> },
    { path: "estimates/update/:id", element: <EditEstimate /> },
];

export const salesSettingsRoutes = [
    { path: "", element: <ProductService /> },
    { path: "taxes", element: <Taxes /> },
    { path: "customers", element: <Customers /> },
    { path: "choose-currency", element: <ChooseCurrency /> },
    { path: "footer", element: <Footer /> },
    { path: "notes-and-terms", element: <NotesAndTerms /> },
    { path: "industries", element: <Industries /> },
    { path: "verify-emails", element: <VerifyEmails /> },
    { path: "meeting-links", element: <MeetingLinks /> },
];

export const salesMainRoutes = [{ path: "sales-board", element: <SalesDashboard /> }];
