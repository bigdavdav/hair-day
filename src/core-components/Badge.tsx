import { cx } from "class-variance-authority"
import LogoFull from "../assets/logos/LogoFull.svg?react"

interface BadgeProps {
  className?: string
}

export function Badge({className}: BadgeProps) {
  return <div className={cx(["w-34.75 h-14 px-5 py-3 bg-gray-600 rounded-br-xl", className])}>
    <LogoFull className="h-8" />
  </div>
}