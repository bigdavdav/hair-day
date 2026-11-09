/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";

import type { TimeSlots } from "./models/bookingDate";

import { useDate } from "./hooks/useDate";
import { useBookingFetch } from "./hooks/useBookingFetch";

interface AppContextProviderProps {
  children: ReactNode
}

type AppContextValueProps = {
  date: string,
  selectedTime: string,
  changeDate: (newDate: string) => void,
  changeSelectedTime: (newTime: string) => void,
  fetchBookingTimeSlots: (bookingDate: string, timeRange?: "morning" | "afternoon" | "evening", onlyBooked? : boolean) => TimeSlots[],
  updateBooking: (action: "add" | "delete", bookingDate: string, timeSlot: string, customerName?: string) => void

}

export const AppContext = createContext<AppContextValueProps>({} as AppContextValueProps)

export function AppContextProvider({children}: AppContextProviderProps) {
  const { currentDate } = useDate()
  const { fetchBookings, addBooking, removeBooking } = useBookingFetch()

  const [date, setDate] = useState(currentDate)
  const [selectedTime, setSelectedTime] = useState("")

  function changeDate(newDate: string) {
    setDate(newDate)
  }

  function changeSelectedTime(newTime: string) {
    setSelectedTime(newTime)
  }

  function updateBooking(action: "add" | "delete", bookingDate: string, timeSlot: string, customerName?: string) {
    if (action == "add" && customerName != undefined) {
      addBooking(bookingDate, timeSlot, customerName)
      return
    } else {
      removeBooking(bookingDate, timeSlot)
      return
    }
  }

  function fetchBookingTimeSlots(bookingDate: string, timeRange?: "morning" | "afternoon" | "evening", onlyBooked? : boolean) {
    const filteredBookings = fetchBookings(bookingDate).timeSlots
    let arrayToReturn: TimeSlots[]

    if (timeRange == "morning") {
      arrayToReturn = filteredBookings.filter((timeSlot, index) => index < 4)
    } else if (timeRange == "afternoon") {
      arrayToReturn = filteredBookings.filter((timeSlot, index) => index >= 4 && index < 10)
    } else if (timeRange == "evening") {
      arrayToReturn = filteredBookings.filter((timeSlot, index) => index >= 10)
    } else {
      arrayToReturn = filteredBookings
    }

    if (onlyBooked) {
      arrayToReturn = arrayToReturn.filter((timeSlot) => timeSlot.booked)
    }

    return arrayToReturn
  }

  return (
    <AppContext.Provider value={{date, selectedTime, changeDate, changeSelectedTime, fetchBookingTimeSlots, updateBooking}}>
      {children}
    </AppContext.Provider>
  )
}