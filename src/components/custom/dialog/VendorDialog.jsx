import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TypographyH3 } from "../Typography";

export default function VendorDialog({ trigger }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-2xl p-6">
                <DialogHeader>
                    <TypographyH3 className="text-start">Add vendor</TypographyH3>
                    <DialogTitle />
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-8 grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="vendor-name">Name</Label>
                            <Input id="vendor-name" placeholder="Vendor name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="vendor-description">Description</Label>
                            <Textarea
                                id="vendor-description"
                                placeholder="Enter vendor description"
                                className="min-h-[100px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-end md:col-span-4">
                        <Button>Save</Button>
                        <DialogClose asChild>
                            <Button variant="destructive" >
                                Cancel
                            </Button>
                        </DialogClose>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    );
}
