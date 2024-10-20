// components/modals/BookAServiceModal.tsx
"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import DropDownWithOptionsProp from "../core/utils/DropDownWithOptionsProp";
import { services } from "@/lib/constants";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateTimePicker } from "..";
import { useModal } from "@/hooks/use-modal";
import { Label } from "../ui/label";


const BookAServiceModal = () => {
    const [date, setDate] = useState<Date>(new Date());
    const { isOpen, closeModal } = useModal();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const isNumber = /[0-9]/.test(e.key);
        const isControlA = (e.ctrlKey || e.metaKey) && e.key === "a";

        if (!isNumber && !["Backspace", "Tab"].includes(e.key) && !isControlA) {
            e.preventDefault();
        }
    };


    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="md:min-w-max md:px-12 md:py-8 lg:min-w-max lg:px-32 lg:py-16">
                <DialogHeader>
                    <DialogTitle className="text-customBlue text-xl lg:text-3xl">
                        Book a Service Today - Your Car will Thank You
                    </DialogTitle>
                    <DialogDescription>Fill in the details in the form below</DialogDescription>
                </DialogHeader>
                <Input required label="Full Names" />
                <div className="grid md:grid-cols-2 gap-x-4 items-center">
                    <Input
                        required
                        label="Phone Number"
                        type="tel"
                        onKeyDown={handleKeyDown}
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                    <Input required label="Email" />
                    <div>
                        <DropDownWithOptionsProp options={services.map((service) => service.title)} label="Type of Service" />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label className="font-medium text-base text-gray-600">
                            <span>Date and Time</span>
                            <span className="text-red-600">*</span>
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP HH:mm") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-4">
                                <DateTimePicker selected={date} setDate={setDate} />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>


                <Input required label="Vehicle Information" />
                <Input required label="Notes / Service Description" />
                <DropDownWithOptionsProp options={["Email me", "Call me"]} label="Contact Preference" isContactPreference />
                <DialogFooter className="flex gap-y-2 flex-col md:flex-row">
                    <Button className="w-full bg-transparent border-2 border-primary text-black" onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button type="submit" className="w-full">
                        Book Service
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BookAServiceModal;
