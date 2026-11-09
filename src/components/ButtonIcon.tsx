import { Icon } from "./Icon";
import type { ComponentProps } from "react";
import { cx } from "class-variance-authority";

interface ButtonIconProps extends ComponentProps<"button"> {
  icon: ComponentProps<typeof Icon>["svg"],
  className?: string,
  iconClassName?: string
}

export function ButtonIcon({icon, className, iconClassName, ...props}: ButtonIconProps) {
  return <button className={cx(["outline-0", className])} {...props}>
    <Icon className={cx(["fill-yellow-base hover:fill-yellow-dark transition", iconClassName])} svg={icon} />
  </button>
}