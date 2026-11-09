 import { type ComponentProps, type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

const timeSelectVariants = cva(`
  w-[78.5px] h-10 transition cursor-pointer
  border rounded-lg outline-none
  bg-gray-600 border-gray-500
`, {
  variants: {
    variant: {
      'default': 'text-gray-200 hover:bg-gray-500',
    },
    selected: {
      true: 'text-yellow-base border-yellow-base hover:border-yellow-light bg-gray-500'
    },
    disabled: {
      true: 'bg-transparent border-gray-600 text-gray-500 pointer-events-none'
    }
  },
  defaultVariants: {
    variant: 'default',
    selected: false,
    disabled: false
  }
})


interface TimeSelectProps
  extends Omit<ComponentProps<"button">, "disabled">,
  VariantProps<typeof timeSelectVariants> {
    className?: string,
    children?: ReactNode
}

export function TimeSelect({variant, selected, disabled, children, className, ...props}: TimeSelectProps) {
  return <button type="button" className={timeSelectVariants({variant, selected, disabled, className})} {...props}>
    {children}
  </button>
}