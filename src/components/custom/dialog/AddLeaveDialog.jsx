// AddLeaveDialog.jsx
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"
import { TypographyH3 } from "../Typography"

export function AddLeaveDialog({ open, onOpenChange, data, onChange, onSave }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-4xl space-y-4">
                <TypographyH3>{data?.isEdit ? "Edit Leave" : "Add Leave"}</TypographyH3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-h-[65vh] overflow-y-auto">
                    <div className="space-y-4 md:col-span-8">
                        <div className="grid gap-2">
                            <Label>Type Of Leave</Label>
                            <Select value={data?.type} onValueChange={(val) => onChange({ ...data, type: val })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select leave type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Annual">Annual Leave</SelectItem>
                                    <SelectItem value="Medical">Medical Leave</SelectItem>
                                    <SelectItem value="C-OFF">C-OFF Leave</SelectItem>
                                    <SelectItem value="Unpaid">Unpaid Leave</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label>Title</Label>
                            <Input value={data?.title || ""} onChange={(e) => onChange({ ...data, title: e.target.value })} />
                        </div>

                        <div className="grid gap-2">
                            <Label>Date</Label>
                            <div className="relative">
                                <Input
                                    type="date"
                                    value={data?.date || ""}
                                    onChange={(e) => onChange({ ...data, date: e.target.value })}
                                />
                                <CalendarIcon className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label>Leave Quantity</Label>
                            <Input
                                type="number"
                                value={data?.quantity || 1}
                                onChange={(e) => onChange({ ...data, quantity: +e.target.value })}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label>Details</Label>
                            <Textarea value={data?.details || ""} onChange={(e) => onChange({ ...data, details: e.target.value })} />
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col justify-end gap-4">
                        <Button className="w-full" onClick={onSave}>Save</Button>
                        <Button variant="destructive" className="w-full" onClick={() => onOpenChange(false)}>Cancel</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
