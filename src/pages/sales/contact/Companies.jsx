import { useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CompanyDialog from "@/components/custom/dialog/CompanyDialog";
import { TypographyH3 } from "@/components/custom/Typography";

export default function Companies() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [companies, setCompanies] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleSave = (company) => {
        if (editingIndex !== null) {
            const updated = [...companies];
            updated[editingIndex] = company;
            setCompanies(updated);
        } else {
            setCompanies([...companies, company]);
        }
        setDialogOpen(false);
        setEditingIndex(null);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setDialogOpen(true);
    };

    const handleDelete = (index) => {
        setCompanies(companies.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <TypographyH3>Companies Details</TypographyH3>
                <Button onClick={() => setDialogOpen(true)}>
                    <Plus /> Create
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Domain</TableHead>
                        <TableHead>Latitude</TableHead>
                        <TableHead>Longitude</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.map((company, i) => (
                        <TableRow key={i}>
                            <TableCell>{company.name}</TableCell>
                            <TableCell>{company.address}</TableCell>
                            <TableCell>{company.domain}</TableCell>
                            <TableCell>{company.latitude}</TableCell>
                            <TableCell>{company.longitude}</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button variant="ghost" size="icon" onClick={() => handleEdit(i)}>
                                    <Pencil className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => handleDelete(i)}>
                                    <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <CompanyDialog
                open={dialogOpen}
                setOpen={setDialogOpen}
                defaultData={editingIndex !== null ? companies[editingIndex] : null}
                onSave={handleSave}
            />
        </div>
    );
}
