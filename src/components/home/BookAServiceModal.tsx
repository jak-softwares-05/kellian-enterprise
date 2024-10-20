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


const BookAServiceModal = () => {
    const [date, setDate] = useState<Date>(new Date());
    const { isOpen, closeModal } = useModal();


    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="min-w-max px-32 py-16">
                <DialogHeader>
                    <DialogTitle className="text-customBlue text-3xl">
                        Book a Service Today - Your Car will Thank You
                    </DialogTitle>
                    <DialogDescription>Fill in the details in the form below</DialogDescription>
                </DialogHeader>
                <Input required label="Full Names" />
                <Input required label="Phone Number" />
                <Input required label="Email" />
                <DropDownWithOptionsProp options={services.map((service) => service.title)} label="Type of Service" />
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP HH:mm") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-4">
                        <DateTimePicker selected={date} setDate={setDate} />
                    </PopoverContent>
                </Popover>
                <Input required label="Vehicle Information" />
                <Input required label="Notes / Service Description" />
                <DropDownWithOptionsProp options={["Email me", "Call me"]} label="Contact Preference" isContactPreference />
                <DialogFooter>
                    <Button type="submit" className="w-full">
                        Book Service
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BookAServiceModal;
