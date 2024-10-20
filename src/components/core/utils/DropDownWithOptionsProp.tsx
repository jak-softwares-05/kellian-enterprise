"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface DropDownWithOptionsPropProps {
    options: string[],
    label: string,
    isContactPreference?: boolean,
}

const DropDownWithOptionsProp: React.FC<DropDownWithOptionsPropProps> = ({
    options,
    label,
    isContactPreference,
}) => {
    const [selectedOption, setSelectedOption] = React.useState(
        isContactPreference
        ?
        "Select how you'd like us to reach you"
        :
        options[0]
    );

    return (
        <DropdownMenu>
            <DropdownMenuLabel>
                {label}
                <span className="text-red-600">*</span>
            </DropdownMenuLabel>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">{selectedOption}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                    {options.map(option => (
                        <DropdownMenuRadioItem key={option} value={option}>
                            {option}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default DropDownWithOptionsProp;
