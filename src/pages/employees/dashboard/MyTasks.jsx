import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MyTasks() {
    return (
        <Card>
            <CardHeader className="flex justify-between items-center">
                <h3 className="text-sm font-medium">My Tasks</h3>
                <Button size="sm" variant="outline">View</Button>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                No data available
            </CardContent>
        </Card>
    );
}
