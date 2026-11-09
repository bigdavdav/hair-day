import { type Booking, BOOKING_STORAGE_KEY } from "../models/bookingDate";
import { useLocalStorage } from "./useLocalStorage";

export function useBookingFetch() {
  const [bookings, setBookings] = useLocalStorage<Booking[]>(BOOKING_STORAGE_KEY, [])

  function generateTimeSlots() {
    const timeSlotsArray: Booking["timeSlots"] = []

    for ( let i = 9; i <= 21; i++ ) {
      const hour = () => {
        if ( i < 10 ) {
          return `0${i}`
        }
        return i
      }

      timeSlotsArray.push({
        time: `${hour()}:00`,
        booked: false
      })
    }

    return timeSlotsArray
  }

  function fetchBookings(bookingDate: string) {
    const booking = bookings.filter((booking) => booking.date == bookingDate)
    
    if (booking.length == 0 || booking == undefined) {
      setBookings([...bookings, {
        id: Math.random().toString(36).substring(2,9),
        date: bookingDate,
        timeSlots: generateTimeSlots()
      }])
    }

    return booking[0]
  }

  function addBooking(bookingDate: string, timeSlot: string, customerName: string) {
    const updatedBookingArray = bookings.map((booking) => {
      if (booking.date === bookingDate) {
        return {
          id: booking.id,
          date: booking.date,
          timeSlots: booking.timeSlots.map((slot) => slot?.time === timeSlot ? {...slot, customer: customerName, booked: true} : slot)
        }
      }

      return booking
    })

    setBookings(updatedBookingArray)
  }

  function removeBooking(bookingDate: string, timeSlot: string) {
    const updatedBookingArray = bookings.map((booking) => {
      if (booking.date === bookingDate) {
        return {
          id: booking.id,
          date: booking.date,
          timeSlots: booking.timeSlots.map((slot) => slot?.time === timeSlot ? {...slot, customer: "", booked: false} : slot)
        }
      }

      return booking
    })

    setBookings(updatedBookingArray)
  }

  return {
    fetchBookings,
    addBooking,
    removeBooking,
    generateTimeSlots
  }
}