import { cx } from "class-variance-authority";
import type { ComponentProps, FC } from "react";

interface IconProps
  extends ComponentProps<"svg"> {
    svg: FC<ComponentProps<"svg">>
}

export function Icon({svg: SvgComponent, className, ...props}: IconProps) {
  return <SvgComponent className={cx(["w-5 h-5 fill-gray-100", className])} {...props} />
}