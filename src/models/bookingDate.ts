export const BOOKING_STORAGE_KEY = "bookings"

export interface Booking {
  id: string,
  date: string,
  timeSlots: TimeSlots[]
}

export interface TimeSlots {
  time: string,
  customer?: string,
  booked?: boolean
}