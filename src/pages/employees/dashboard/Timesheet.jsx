import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Timesheet() {
    return (
        <Card>
            <CardHeader className="text-sm font-medium">Timesheet</CardHeader>
            <CardContent>
                <div className="h-40 bg-muted mb-4 rounded" />
                <Button className="w-full" size="sm">Submit Timesheet</Button>
            </CardContent>
        </Card>
    );
}
