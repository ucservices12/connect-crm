// components/pages/IndustryTable.tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Plus, Trash } from "lucide-react"
import { useState } from "react"
import { TypographyH3 } from "@/components/custom/Typography"
import IndustryDialog from "@/components/custom/dialog/IndustryDialog"

export default function Industries() {
    const [openDialog, setOpenDialog] = useState(false)
    const [industries, setIndustries] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const handleAddOrEditIndustry = (name) => {
        if (editIndex !== null) {
            // Editing existing industry
            const updated = [...industries]
            updated[editIndex] = name
            setIndustries(updated)
            setEditIndex(null)
        } else {
            // Adding new industry
            setIndustries((prev) => [...prev, name])
        }
        setOpenDialog(false)
    }

    const handleEdit = (index) => {
        setEditIndex(index)
        setOpenDialog(true)
    }

    const handleDelete = (index) => {
        setIndustries((prev) => prev.filter((_, i) => i !== index))
    }

    const getInitialIndustry = () => {
        return editIndex !== null ? industries[editIndex] : ""
    }

    return (
        <div>
            <div className="flex justify-between mb-4">
                <TypographyH3>Industries</TypographyH3>
                <Button
                    onClick={() => {
                        setEditIndex(null)
                        setOpenDialog(true)
                    }}
                >
                    <Plus />
                    Create
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Industry</TableHead>
                        <TableHead className="text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {industries.map((industry, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-center">{industry}</TableCell>
                            <TableCell className="text-center space-x-2">
                                <Button variant="ghost" size="icon" onClick={() => handleEdit(index)}>
                                    <Pencil />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-red-600"
                                    onClick={() => handleDelete(index)}
                                >
                                    <Trash />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Dialog to create or edit industry */}
            <IndustryDialog
                open={openDialog}
                onClose={() => {
                    setOpenDialog(false)
                    setEditIndex(null)
                }}
                onSave={handleAddOrEditIndustry}
                initialValue={getInitialIndustry()}
            />
        </div>
    )
}
