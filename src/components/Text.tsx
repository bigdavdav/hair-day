import { createElement, type JSX, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("text-gray-100", {
  variants: {
    variant: {
      "title-lg": "text-3xl leading-6 font-bold",
      "title-md": "text-base leading-6 font-bold",
      "title-sm": "text-sm leading-5 font-bold",
      "text-md": "text-base leading-6 font-normal",
      "text-sm": "text-sm leading-5 font-normal"
    }
  },
  defaultVariants: {
    variant: "text-md"
  }
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: ReactNode
}

export function Text({as = "span", variant, className, children, ...props}: TextProps) {
  return createElement(
    as,
    {
      className: textVariants({variant, className}),
      ...props
    },
    children
  )
}