import { Routes, Route } from "react-router-dom";
import OverviewBoard from "@/pages/finance/OverviewBoard";
import Transactions from "@/pages/finance/Transactions";
import { PurchasesTabs } from "@/components/custom/tabs/Tabs";
import Bills from "@/pages/finance/Purchases/Bills";
import Reimbursements from "@/pages/finance/Purchases/Reimbursements";

export default function FinanceRoutes() {
    return (
        <Routes>
            <Route path="transactions" element={<Transactions />} />
            <Route path="board" element={<OverviewBoard />} />
            <Route path="purchases/*" element={<PurchasesTabs />}>
                <Route index element={<Bills />} />
                <Route path="bills" element={<Bills />} />
                <Route path="reimbursement" element={<Reimbursements />} />
            </Route>
        </Routes>
    );
}