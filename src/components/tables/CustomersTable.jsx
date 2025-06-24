"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"
import { useLocation } from "react-router-dom"

export function CustomersTable({ customers = [], onEdit, onDelete }) {
  const location = useLocation()

  return (
    <Table>
      <TableHeader className="bg-[#FBFCFE]">
        <TableRow>
          <TableHead className="whitespace-nowrap">Company Name</TableHead>
          <TableHead className="whitespace-nowrap">First Name</TableHead>
          <TableHead className="whitespace-nowrap">Last Name</TableHead>
          <TableHead className="whitespace-nowrap">Phone No 1</TableHead>
          <TableHead className="whitespace-nowrap">Phone No 2</TableHead>
          <TableHead className="whitespace-nowrap">Contact Email 1</TableHead>
          <TableHead className="whitespace-nowrap">Contact Email 2</TableHead>
          <TableHead className="whitespace-nowrap">Website</TableHead>
          <TableHead className="whitespace-nowrap">Notes</TableHead>
          {location.pathname !== "/sales-board" && (
            <TableHead className="text-center whitespace-nowrap">Action</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.length > 0 ? (
          customers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell>{customer?.companyName ?? ""}</TableCell>
              <TableCell>{customer?.firstName ?? ""}</TableCell>
              <TableCell>{customer?.lastName ?? ""}</TableCell>
              <TableCell>{customer?.phone1 ?? ""}</TableCell>
              <TableCell>{customer?.phone2 ?? ""}</TableCell>
              <TableCell>{customer?.email1 ?? ""}</TableCell>
              <TableCell>{customer?.email2 ?? ""}</TableCell>
              <TableCell>{customer?.website ?? ""}</TableCell>
              <TableCell>{customer?.notes ?? ""}</TableCell>
              {location.pathname !== "/sales-board" && (
                <TableCell className="flex gap-2 justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit?.(index)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete?.(index)}
                  >
                    <Trash className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={10}
              className="text-center text-muted-foreground py-6"
            >
              No customers found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
