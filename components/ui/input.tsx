import { cn } from "@/@/lib/utils"
import * as React from "react"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { label: string }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, ...props }, ref) => {
        return (
            <div className=" flex items-start w-full flex-col justify-start gap-2 my-2">
                <label className={cn(
                    " text-sm font-[500]",
                    className
                )}>{label}</label>
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
