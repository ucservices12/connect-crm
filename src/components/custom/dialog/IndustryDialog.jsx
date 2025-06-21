import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { TypographyH3 } from "@/components/custom/Typography"
import { useEffect, useState } from "react"

export default function IndustryDialog({ open, onClose, onSave, initialValue = "" }) {
    const [industry, setIndustry] = useState("")

    useEffect(() => {
        if (open) {
            setIndustry(initialValue)
        }
    }, [open, initialValue])

    const handleSave = () => {
        if (industry.trim()) {
            onSave(industry)
            setIndustry("")
        }
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <TypographyH3 className="text-start">
                        {initialValue ? "Edit Industry" : "Add Industry"}
                    </TypographyH3>
                    <DialogTitle />
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-8">
                        <div className="grid gap-2">
                            <Label htmlFor="industry">Industry Name</Label>
                            <Input
                                id="industry"
                                placeholder="e.g. Healthcare"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="md:col-span-4 grid gap-2">
                        <Button onClick={handleSave}>Save</Button>
                        <Button variant="destructive" onClick={() => onClose(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
