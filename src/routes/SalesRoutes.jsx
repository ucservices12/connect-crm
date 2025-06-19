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
import { CreateEstimate } from "@/pages/sales/future-sales/CreateEstimate";
import { EditEstimate } from "@/pages/sales/future-sales/EditEstimate";

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
    { path: "estimates/create", element: <CreateEstimate /> },
    { path: "estimates/update/:id", element: <EditEstimate /> },
];

export const salesMainRoutes = [{ path: "sales-board", element: <SalesDashboard /> }];
