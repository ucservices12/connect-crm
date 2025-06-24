"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TypographyH3 } from "@/components/custom/Typography";

export default function TagsDialog({ open, setOpen, onSave, defaultValue = "" }) {
    const [tagLabel, setTagLabel] = React.useState(defaultValue);

    React.useEffect(() => {
        setTagLabel(defaultValue);
    }, [defaultValue, open]);

    const handleSubmit = () => {
        if (tagLabel.trim()) {
            onSave(tagLabel.trim());
            setTagLabel("");
            setOpen(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <TypographyH3 className="text-start">
                        {defaultValue ? "Edit Tag" : "Create Tag"}
                    </TypographyH3>
                    <DialogTitle />
                    <DialogDescription />
                </DialogHeader>

                <div className="space-y-3">
                    <Label htmlFor="tagLabel">Tag Label</Label>
                    <Input
                        id="tagLabel"
                        value={tagLabel}
                        onChange={(e) => setTagLabel(e.target.value)}
                        placeholder="e.g. Qualified Lead"
                    />
                </div>

                <DialogFooter className="flex justify-end pt-4 space-x-2">
                    <Button variant="destructive" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>
                        {defaultValue ? "Update" : "Save"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
