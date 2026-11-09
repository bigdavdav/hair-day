import { useContext, useState, type ChangeEvent, type InputHTMLAttributes } from "react"
import { cx } from "class-variance-authority"

import { useDate } from "../hooks/useDate"
import { AppContext } from "../appContext"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: "text" | "date",
  placeholder?: string,
  className?: string
}

export function Input({as = "text", placeholder, className, ...props}: InputProps) {
  const { date, changeDate } = useContext(AppContext)
  const { currentDate } = useDate()
  const [inputValue, setInputValue] = useState(as == "text" ? "" : date)
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setInputValue(newValue)

    if (as == "date") {
      changeDate(newValue)
    }
  }
  
  return(
    <input 
      type={as} 
      className={cx([`
        h-12 p-3 w-85 border rounded-lg outline-0 transition
        text-gray-200 border-gray-500
        placeholder-gray-400 focus:border-yellow-dark
        `,
        className
      ])}
      min={currentDate}
      onChange={handleInputChange}
      {...(as == "date" && {value: date})}
      {...(as == "text" && {value: inputValue})}
      {...(as == "text" ? {placeholder: placeholder} : "")}
      {...props}
    />
  )
}