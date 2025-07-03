import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    CalendarIcon,
    Pencil,
    Trash,
    MessageSquare,
} from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { TypographyH3, TypographyMuted } from "@/components/custom/Typography"
import { AddLeaveDialog } from "@/components/custom/dialog/AddLeaveDialog"

export default function LeaveOverview() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [formData, setFormData] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [commentsDialogOpen, setCommentsDialogOpen] = useState(false)
    const [commentInput, setCommentInput] = useState("")
    const [commentsMap, setCommentsMap] = useState({})

    const [leaveRecords, setLeaveRecords] = useState([
        {
            title: "test",
            details: "etst",
            type: "Annual",
            date: "2025-07-03",
            quantity: 1,
            status: "Submitted",
        },
    ])

    const handleEdit = (idx) => {
        setIsEdit(true)
        setFormData({ ...leaveRecords[idx], isEdit: true })
        setSelectedIndex(idx)
        setDialogOpen(true)
    }

    const handleSave = () => {
        const updated = [...leaveRecords]
        if (isEdit && selectedIndex !== null) {
            updated[selectedIndex] = { ...formData, status: "Submitted" }
        } else {
            updated.push({ ...formData, status: "Submitted" })
        }
        setLeaveRecords(updated)
        setDialogOpen(false)
        setFormData({})
        setIsEdit(false)
    }

    const handleOpenComments = (idx) => {
        setSelectedIndex(idx)
        setCommentsDialogOpen(true)
    }

    const handleAddComment = () => {
        if (!commentInput.trim()) return
        const updated = { ...commentsMap }
        if (!updated[selectedIndex]) updated[selectedIndex] = []
        updated[selectedIndex].push(commentInput)
        setCommentsMap(updated)
        setCommentInput("")
    }

    const leaveTypes = [
        { type: "Annual Leaves", allocated: 10, taken: 0, remaining: 10 },
        { type: "Medical Leaves", allocated: 10, taken: 0, remaining: 10 },
        { type: "C-OFF Leaves", allocated: 10, taken: 1, remaining: 9 },
        { type: "Unpaid Leaves", allocated: "-", taken: 0, remaining: "-" },
    ]

    return (
        <div className="space-y-6">
            {/* Header + Actions */}
            <div className="flex md:flex-row flex-col gap-4 sm:items-center justify-between">
                <div>
                    <TypographyH3>
                        Leaves Overview
                    </TypographyH3>
                    <TypographyMuted>
                        A detailed overview of your leave balance and status.
                    </TypographyMuted>
                </div>
                <div className="flex gap-2">
                    <Button onClick={() => setDialogOpen(true)} variant="stone">Apply Leave</Button>
                    <Button variant="stone">Apply COff</Button>
                </div>
            </div>

            {/* Balance Table */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Leave Type</TableHead>
                        <TableHead>Allocated</TableHead>
                        <TableHead>Taken</TableHead>
                        <TableHead>Remaining</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        leaveTypes?.map((leave) => (
                            <TableRow>
                                <TableCell>{leave?.type}</TableCell>
                                <TableCell>{leave?.allocated}</TableCell>
                                <TableCell>{leave?.taken}</TableCell>
                                <TableCell>{leave?.remaining}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

            {/* Filter */}
            <div className="flex md:flex-row flex-col justify-between sm:items-center">
                <div className="flex flex-wrap gap-4 items-end">
                    <div className="space-y-1">
                        <Label className="text-sm font-medium">Start Date *</Label>
                        <div>
                            <Input type="date" defaultValue="2025-07-01" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label className="text-sm font-medium">End Date *</Label>
                        <div>
                            <Input type="date" defaultValue="2025-07-31" />
                        </div>
                    </div>
                    <Button>View</Button>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end gap-4 sm:mt-0 mt-4">
                    <Button size="sm" disabled variant="secondary">Approve</Button>
                    <Button size="sm" disabled variant="secondary">Reject</Button>
                </div>
            </div>

            {/* Records Table */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead><Checkbox /></TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leaveRecords.map((record, idx) => (
                        <TableRow key={idx}>
                            <TableCell><Checkbox /></TableCell>
                            <TableCell>{record.title}</TableCell>
                            <TableCell>{record.details}</TableCell>
                            <TableCell><Badge>{record.type}</Badge></TableCell>
                            <TableCell>{record.date}</TableCell>
                            <TableCell>{record.quantity}</TableCell>
                            <TableCell><Badge>{record.status}</Badge></TableCell>
                            <TableCell className="text-right flex gap-2 justify-end">
                                <Button size="icon" variant="secondary" onClick={() => handleEdit(idx)}><Pencil /></Button>
                                <Button size="icon" variant="secondary" className="text-red-600"><Trash /></Button>
                                <Button size="icon" variant="secondary" onClick={() => handleOpenComments(idx)}><MessageSquare /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Add/Edit Dialog */}
            <AddLeaveDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                data={formData}
                onChange={setFormData}
                onSave={handleSave}
            />

            {/* Comments Dialog */}
            <Dialog open={commentsDialogOpen} onOpenChange={setCommentsDialogOpen}>
                <DialogContent>
                    <TypographyH3>
                        Comments
                    </TypographyH3>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                        {(commentsMap[selectedIndex] || []).map((comment, i) => (
                            <p key={i} className="p-2 border rounded text-sm bg-muted">{comment}</p>
                        ))}
                        {!(commentsMap[selectedIndex]?.length) && <p className="text-muted-foreground italic">No comments yet.</p>}
                    </div>
                    <Textarea
                        placeholder="Add a comment..."
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <Button onClick={handleAddComment}>Submit</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}
