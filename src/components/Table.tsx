import { useContext } from "react";
import { cva } from "class-variance-authority";

import type { TimeSlots } from "../models/bookingDate";
import { AppContext } from "../appContext";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { ButtonIcon } from "./ButtonIcon";

import SunHorizon from "../assets/icons/SunHorizon.svg?react"
import CloudSun from "../assets/icons/CloudSun.svg?react"
import MoonStars from "../assets/icons/MoonStars.svg?react"
import Trash from "../assets/icons/Trash.svg?react"

const tableCellProps = cva("pt-2.5", {
  variants: {
    content: {
      "time": "pl-5 w-[1%]",
      "name": "w-full px-5 flex justify-between"
    },
    position: {
      "first": "pt-5",
      "last": "pb-5",
      "single": "pt-5 pb-5"
    },
  },
  defaultVariants: {
    content: "name",
    position: undefined
  }
})

interface TableProps {
  header: "Manha" | "Tarde" | "Noite",
  content: TimeSlots[]
}

export function Table({header, content}: TableProps) {
  const { updateBooking, date } = useContext(AppContext)

  const headerData = {
    Manha: {icon: SunHorizon, time: "09h-12h"},
    Tarde: {icon: CloudSun, time: "13h-18h"},
    Noite: {icon: MoonStars, time: "19h-21h"},
  }

  function handleBookingDeletion(timeSlot: string) {
    updateBooking("delete", date, timeSlot)
  }

  return <div className="border rounded-xl border-gray-600">
    <table className="w-full">
      <thead className="border-b border-gray-600">
        <tr>
          <th colSpan={2} className="py-3 px-5">

            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <Icon svg={headerData[header].icon} className="fill-yellow-base" /> 
                <Text variant="text-sm" className="text-gray-300">{header}</Text>
              </div>

              <Text variant="text-sm" className="text-gray-400">{headerData[header].time}</Text>
            </div>

          </th>
        </tr>
      </thead>
      
      <tbody className="text-gray-200">
        {content.map((timeSlot, index) => {
          const tablePosition = () => {
            if (content.length == 1) {
              return "single"
            } else if (index == 0) {
              return "first"
            } else if ((index + 1) == (content.length)) {
              return "last"
            }

            return undefined
          }

          return (
            <tr key={`${timeSlot.time}-${timeSlot.customer}`}>
              <td className={tableCellProps({content: "time", position: tablePosition()})}>
                <Text variant="title-md">{timeSlot.time}</Text>
              </td>

              <td className={tableCellProps({content: "name", position: tablePosition()})}>
                <Text>{timeSlot.customer}</Text>
                <ButtonIcon icon={Trash} onClick={() => handleBookingDeletion(timeSlot.time)} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
}