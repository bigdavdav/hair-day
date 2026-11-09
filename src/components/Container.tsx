import { cva, cx, type VariantProps } from "class-variance-authority"
import { createElement, type ReactNode, type JSX } from "react"

const containerVariants = cva("p-20 m-3 rounded-xl h-[calc(100dvh-1.5rem)]", {
  variants: {
    variant: {
      "main": "px-28 w-full",
      "sidebar": "bg-gray-700 w-124.5"
    }
  }
})

interface ContainerProps 
  extends VariantProps<typeof containerVariants> {
    as?: keyof JSX.IntrinsicElements,
    children: ReactNode,
    className?: string,
}

export function Container({as = "article", variant = "main", children, className, ...props}: ContainerProps) {
  return createElement(
    as,
    {
      className: cx([containerVariants({variant}), className]) ,
      ...props
    },
    children
  )
}