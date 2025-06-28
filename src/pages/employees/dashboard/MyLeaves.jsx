import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MyLeaves() {
    return (
        <Card>
            <CardHeader className="text-sm font-medium">My Leaves</CardHeader>
            <CardContent>
                <table className="w-full text-sm mb-2">
                    <thead>
                        <tr><th>Leave Type</th><th>Used</th><th>Remaining</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Annual</td><td>0</td><td>0</td></tr>
                        <tr><td>Sick</td><td>0</td><td>0</td></tr>
                        <tr><td>C-off</td><td>0</td><td>0</td></tr>
                    </tbody>
                </table>
                <Button className="w-full" variant="outline">Request Leave</Button>
            </CardContent>
        </Card>
    );
}
