import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          {
            'px-[0.75em] py-[0.25em] text-small': size === 'sm',
            'px-[1em] py-[0.5em] text-standard': size === 'md',
            'px-[1.5em] py-[0.75em] text-large': size === 'lg',
          },
          "bg-accent text-background rounded font-primary",
          "transition-all duration-100 ease-in-out",
          "border-[0.2em] border-accent",
          "hover:bg-background hover:text-accent",
          "disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300",
          "active:bg-text active:text-background",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
