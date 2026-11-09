import type { ReactNode, ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Text } from "./Text"

const buttonVariants = cva("h-14 rounded-lg bg-gray-100 transition cursor-pointer pl-4 pr-4", {
  variants: {
    variant: {
      "default": "bg-yellow-base border-2 border-yellow-base hover:border-yellow-light"
    },
    disabled: {
      true: "bg-yellow-dark pointer-events-none border-yellow-dark"
    }
  },
  defaultVariants: {
    variant: "default",
    disabled: false
  }
})

interface ButtonProps 
  extends Omit<ComponentProps<"button">, "disabled">,
  VariantProps<typeof buttonVariants> {
    children: ReactNode
    className?: string
}

export function Button({variant, disabled, children, className, ...props}: ButtonProps) {
  return <button className={buttonVariants({variant, disabled, className})} {...props}>
    <Text variant="title-sm" className="text-gray-900">{children}</Text>
  </button>
}