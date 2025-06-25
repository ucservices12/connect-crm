"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Separator } from "@/components/ui/separator";
import { TypographyH3 } from "@/components/custom/Typography";
import { ArrowLeft, Printer, Send } from "lucide-react";
import html2pdf from "html2pdf.js";

export default function Invoicedetails() {
    const invoiceRef = useRef(null);

    const invoiceData = {
        invoiceNumber: "Uc Services Pvt Ltd-2025-2",
        poNumber: "Uc Services Pvt Ltd-2025-2",
        invoiceDate: "June 18, 2025",
        paymentDate: "June 17, 2025",
        dueDate: "June 24, 2025",
        amountDue: "3090.00",
        company: {
            name: "Uc Services Pvt Ltd",
            logo: "/logo.png",
            addressLines: [
                "Office no.02, 15, Zeroboy Chowk",
                "Above HDFC Bank, Nehru Nagar",
                "Pimpri Colony, Pune",
                "Pimpri-Chinchwad, Maharashtra 411018",
                "Contact: +91 7709222331, +91 9270033002",
            ],
        },
        customer: {
            name: "Tata motors",
            contactPerson: "Amol Mahor",
            address: "Pune maharashtra 15367c",
            contact: "73663738",
        },
        items: [
            {
                name: "Shop Act",
                description: "Naming conventions",
                quantity: 1,
                price: 3000,
                taxLabel: "Government tax : 3%",
                taxAmount: 90,
                amount: 3000,
            },
        ],
        notes: "Notes and follow the my terms",
    };

    const subtotal = invoiceData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxTotal = invoiceData.items.reduce((sum, item) => sum + item.taxAmount, 0);
    const total = subtotal + taxTotal;

    const handleDownloadPDF = () => {
        if (invoiceRef.current) {
            html2pdf()
                .set({
                    margin: [0.5, 0.5, 0.5, 0.5],
                    filename: `${invoiceData.invoiceNumber.replace(/\s+/g, "_")}.pdf`,
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
                    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
                })
                .from(invoiceRef.current)
                .save();
        }
    };

    const handleBack = () => window.history.back();

    return (
        <div className="min-h-screen bg-gray-50 py-4 px-2 sm:px-6 flex flex-col items-center">
            {/* Top Actions */}
            <div className="w-full max-w-3xl mb-6 print:hidden">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div className="flex sm:flex-row flex-col gap-2 w-full sm:w-auto">
                        <Button onClick={handleBack} variant="outline" className="flex-1 sm:flex-none">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                        <Button className="flex-1 sm:flex-none">
                            <Send className="mr-2 h-4 w-4" />
                            Send Invoice
                        </Button>
                        <Button onClick={handleDownloadPDF} className="flex-1 sm:flex-none">
                            <Printer className="mr-2 h-4 w-4" />
                            Download
                        </Button>
                    </div>
                    <div className="flex flex-col items-end mt-2 sm:mt-0">
                        <StatusBadge status="paid" />
                        <TypographyH3 className="mt-1 text-base sm:text-xl">{invoiceData.invoiceNumber}</TypographyH3>
                    </div>
                </div>
            </div>

            {/* Invoice Container */}
            <div
                ref={invoiceRef}
                className="bg-card border p-4 sm:max-w-3xl text-xs sm:text-sm print:shadow-none print:rounded-none print:p-0 print:w-[210mm] print:max-w-none"
                style={{
                    minHeight: "297mm",
                    width: "210mm",
                    margin: "auto",
                }}
            >
                {/* Invoice Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-primary">INVOICE</h1>
                </div>

                {/* Company & Invoice Info */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                        <img src={invoiceData.company.logo} alt="Logo" className="h-12 mb-2" />
                        <p className="font-bold">{invoiceData.company.name}</p>
                        <div className="text-xs space-y-1 mt-1">
                            {invoiceData.company.addressLines.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 text-right">
                        <p>
                            <span className="font-semibold">Invoice Number:</span> {invoiceData.invoiceNumber}
                        </p>
                        <p>
                            <span className="font-semibold">PO/SO Number:</span> {invoiceData.poNumber}
                        </p>
                        <p>
                            <span className="font-semibold">Invoice Date:</span> {invoiceData.invoiceDate}
                        </p>
                        <p>
                            <span className="font-semibold">Payment Due:</span> {invoiceData.paymentDate}
                        </p>
                        <p>
                            <span className="font-semibold">Due Date:</span> {invoiceData.dueDate}
                        </p>
                        <p className="font-semibold mt-2 sm:text-base text-primary text-sm">
                            Amount Due (INR): ₹{invoiceData.amountDue}
                        </p>
                    </div>
                </div>

                {/* Bill To */}
                <div className="my-6">
                    <p className="font-semibold">Bill To,</p>
                    <p className="font-bold">{invoiceData.customer.name}</p>
                    <p>{invoiceData.customer.contactPerson}</p>
                    <p>{invoiceData.customer.address}</p>
                    <p>Contact: {invoiceData.customer.contact}</p>
                </div>

                {/* Table - Scrollable Horizontally */}
                <div className="mt-6">
                    <div className="overflow-x-auto">
                        <div className="min-w-[600px]">
                            <div className="grid grid-cols-6 bg-primary text-white text-xs sm:text-sm py-2 px-3 rounded-t">
                                <div>Items</div>
                                <div>Description</div>
                                <div>Quantity</div>
                                <div>Price</div>
                                <div>Tax Details</div>
                                <div>Amount</div>
                            </div>
                            {invoiceData.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-6 border-b py-2 px-3 items-start text-xs sm:text-sm bg-white"
                                >
                                    <div>{item.name}</div>
                                    <div>{item.description}</div>
                                    <div>{item.quantity}</div>
                                    <div>₹{item.price.toFixed(2)}</div>
                                    <div>
                                        <p>{item.taxLabel}</p>
                                        <p className="text-muted-foreground text-[11px]">₹{item.taxAmount.toFixed(2)}</p>
                                    </div>
                                    <div>₹{item.amount.toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Totals */}
                <div className="mt-6 flex flex-col items-end">
                    <div className="w-full sm:w-1/2 space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax Amount:</span>
                            <span>₹{taxTotal.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                            <span>Total:</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-base mt-2">
                            <span>Amount Due (INR):</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                <div className="mt-8">
                    <p className="font-semibold mb-1">Notes / Terms</p>
                    <ul className="list-disc list-inside">
                        <li>{invoiceData.notes}</li>
                    </ul>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-xs text-muted-foreground">Testing data</div>
            </div>
        </div>
    );
}
