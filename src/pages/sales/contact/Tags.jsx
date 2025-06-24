import { useState } from "react";
import { Pencil, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import TagsDialog from "@/components/custom/dialog/TagsDialog";
import { TypographyH3 } from "@/components/custom/Typography";

export default function Tags() {
    const [tags, setTags] = useState(["Urgent", "Follow-Up", "VIP"]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleSave = (newTag) => {
        if (editingIndex !== null) {
            const updated = [...tags];
            updated[editingIndex] = newTag;
            setTags(updated);
        } else {
            setTags([...tags, newTag]);
        }
        setDialogOpen(false);
        setEditingIndex(null);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setDialogOpen(true);
    };

    const handleDelete = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const currentEditValue = editingIndex !== null ? tags[editingIndex] : "";

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <TypographyH3>Tags Details</TypographyH3>
                <Button
                    onClick={() => {
                        setEditingIndex(null); // Clear editing index
                        setDialogOpen(true);
                    }}
                >
                    <Plus />
                    Create
                </Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Label</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tags.map((tag, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-center">{tag}</TableCell>
                            <TableCell className="text-center space-x-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(index)}
                                >
                                    <Pencil className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(index)}
                                >
                                    <Trash className="w-4 h-4 text-red-500" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <TagsDialog
                open={dialogOpen}
                setOpen={setDialogOpen}
                defaultValue={currentEditValue}
                onSave={handleSave}
            />
        </div>
    );
}
