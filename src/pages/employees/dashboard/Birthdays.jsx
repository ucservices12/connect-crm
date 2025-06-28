import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserCircle2 } from "lucide-react";

export function Birthdays() {
    return (
        <Card>
            <CardHeader className="text-sm font-medium">Birthdays This Month</CardHeader>
            <CardContent className="flex gap-2 items-center text-sm">
                <UserCircle2 className="text-primary" />
                <div>
                    <p className="font-medium">Amol</p>
                    <p className="text-muted-foreground text-xs">June 27</p>
                </div>
            </CardContent>
        </Card>
    );
}
