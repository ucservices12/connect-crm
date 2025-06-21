import { Badge } from "@/components/ui/badge"

export function StatusBadge({ status }: { status: string }) {
    const statusColorMap: Record<string, string> = {
        "In Progress": "bg-blue-200 ",
        Completed: "bg-green-200 ",
        Paid: "bg-green-200 ",
        Yes: "bg-green-200 ",
        Unpaid: "bg-orange-200 ",
        Pending: "bg-yellow-200",
        Cancelled: "bg-red-200 ",
        Overdue: "bg-orange-200 ",
        No: "bg-red-300 ",
        Draft: "bg-gray-200 ",
    }

    const colorClass = statusColorMap[status] || "bg-gray-300 text-black"

    return (
        <Badge className={`text-xs px-2 py-1 text-black rounded-full ${colorClass}`}>
            {status}
        </Badge>
    )
}
