"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypographyH3 } from "@/components/custom/Typography";
import { CustomersTable } from "@/components/tables/CustomersTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function getEmptyCustomer() {
  return {
    companyName: "",
    firstName: "",
    lastName: "",
    phone1: "",
    phone2: "",
    email1: "",
    email2: "",
    website: "",
    notes: "",
    billingAddress: "",
    shippingAddress: "",
  };
}

const initialCustomers = [
  {
    companyName: "ABC Pvt Ltd",
    firstName: "Amol",
    lastName: "Mahor",
    phone1: "9876543210",
    phone2: "1234567890",
    email1: "amol@example.com",
    email2: "contact@abc.com",
    website: "https://abc.com",
    notes: "Important client",
    billingAddress: "123 Main St, Pune",
    shippingAddress: "456 Service Ln, Mumbai",
  },
];

export function CurrentSalesCustomers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [formData, setFormData] = useState(getEmptyCustomer());
  const [errors, setErrors] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      (name === "phone1" || name === "phone2") &&
      value &&
      !/^\d*$/.test(value)
    )
      return;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.phone1.trim()) {
      newErrors.phone1 = "Phone No 1 is required";
    } else if (!/^\d{10}$/.test(formData.phone1)) {
      newErrors.phone1 = "Phone No 1 must be 10 digits";
    }

    if (formData.phone2 && !/^\d{10}$/.test(formData.phone2)) {
      newErrors.phone2 = "Phone No 2 must be 10 digits";
    }

    if (!formData.email1.trim()) {
      newErrors.email1 = "Contact Email 1 is required";
    } else if (!emailRegex.test(formData.email1)) {
      newErrors.email1 = "Invalid email format";
    }

    if (formData.email2 && !emailRegex.test(formData.email2)) {
      newErrors.email2 = "Invalid email format";
    }

    if (!formData.billingAddress.trim()) {
      newErrors.billingAddress = "Billing Address is required";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editingIndex !== null) {
      const updated = [...customers];
      updated[editingIndex] = formData;
      setCustomers(updated);
    } else {
      setCustomers((prev) => [...prev, formData]);
    }

    setFormData(getEmptyCustomer());
    setErrors({});
    setEditingIndex(null);
    setDialogOpen(false);
  };

  const handleEdit = (index) => {
    const selected = customers[index];
    if (selected) {
      setFormData({ ...selected });
      setEditingIndex(index);
      setErrors({});
      setDialogOpen(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <TypographyH3>Customer Details</TypographyH3>
        <Button
          className="gap-2"
          onClick={() => {
            setFormData(getEmptyCustomer());
            setEditingIndex(null);
            setDialogOpen(true);
          }}
        >
          <Plus className="w-4 h-4" />
          Create
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-5xl">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <TypographyH3 className="text-start">
              {editingIndex !== null ? "Edit Customer" : "Add New Customer"}
            </TypographyH3>
          </DialogHeader>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 overflow-y-auto max-h-[70vh]">
            <div className="sm:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {["companyName", "firstName", "lastName"].map((field) => (
                <div className="grid gap-2" key={field}>
                  <Label htmlFor={field}>
                    {field === "companyName"
                      ? "Company Name"
                      : field === "firstName"
                      ? "First Name"
                      : "Last Name"}
                  </Label>
                  <Input
                    id={field}
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                  />
                  {errors[field] && (
                    <span className="text-xs text-red-500">
                      {errors[field]}
                    </span>
                  )}
                </div>
              ))}

              <div className="grid gap-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="billingAddress">Billing Address</Label>
                <Textarea
                  id="billingAddress"
                  name="billingAddress"
                  value={formData.billingAddress || ""}
                  onChange={handleChange}
                />
                {errors.billingAddress && (
                  <span className="text-xs text-red-500">
                    {errors.billingAddress}
                  </span>
                )}
              </div>

              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="shippingAddress">Shipping Address</Label>
                <Textarea
                  id="shippingAddress"
                  name="shippingAddress"
                  value={formData.shippingAddress || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-4 sm:border sm:p-4 rounded-md grid gap-4">
              {["phone1", "phone2", "email1", "email2", "website"].map(
                (field) => (
                  <div key={field} className="grid gap-2">
                    <Label htmlFor={field}>
                      {field === "phone1"
                        ? "Phone No 1"
                        : field === "phone2"
                        ? "Phone No 2"
                        : field === "email1"
                        ? "Contact Email 1"
                        : field === "email2"
                        ? "Contact Email 2"
                        : "Website"}
                    </Label>
                    <Input
                      id={field}
                      name={field}
                      value={formData[field] || ""}
                      onChange={handleChange}
                    />
                    {errors[field] && (
                      <span className="text-xs text-red-500">
                        {errors[field]}
                      </span>
                    )}
                  </div>
                )
              )}

              <div className="grid gap-3">
                <Button className="w-full" onClick={handleSubmit}>
                  {editingIndex !== null ? "Update" : "Save"}
                </Button>
                <Button
                  className="w-full"
                  variant="destructive"
                  onClick={() => {
                    setFormData(getEmptyCustomer());
                    setErrors({});
                    setEditingIndex(null);
                    setDialogOpen(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <CustomersTable customers={customers} onEdit={handleEdit} />
    </div>
  );
}
