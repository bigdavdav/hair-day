import { useContext, type SubmitEvent } from "react";
import { cx } from "class-variance-authority";

import { AppContext } from "../appContext";

import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { Text } from "../components/Text";
import { TimeSelect } from "../components/TimeSelect";

interface SidebarProps {
  className?: string
}

export function Sidebar({className}: SidebarProps) {
  const { fetchBookingTimeSlots, changeSelectedTime, updateBooking, date, selectedTime } = useContext(AppContext)

  function handleFormSubmission(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const customerName = new FormData(event.target).get("customerName")
    if (typeof customerName !== "string") {
      return
    }

    changeSelectedTime("")
    updateBooking("add", date, selectedTime, customerName)
  }

  return (
    <Container as="aside" variant="sidebar" className={cx(["flex flex-col gap-6", className])}>
      <div>
        <Text variant="title-lg" as="h1">Agende um atendimento</Text>
        <Text variant="text-sm" as="p" className="text-gray-300 block mt-2">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
      </div>

      <form className="flex flex-col gap-8" onSubmit={handleFormSubmission}>
        <div>
          <Text variant="title-sm" className="text-gray-200">Data</Text>
          <Input as="date" className="mt-2" />
        </div>

        <div>
          <Text variant="title-sm" className="text-gray-200">Horários</Text>

          <div className="mt-2 flex flex-col gap-3">
            <div>
              <Text variant="text-sm" className="text-gray-300">Manhã</Text>
              <div className="mt-2 flex gap-2 flex-wrap">
                {fetchBookingTimeSlots(date, "morning").map(
                  (timeSlot) => 
                    <TimeSelect 
                      key={`time-${timeSlot.time}`}
                      onClick={() => changeSelectedTime(timeSlot.time)}
                      {...(selectedTime == timeSlot.time && {selected: true})}
                      {...(timeSlot.booked == true && {disabled: true})}
                    >
                      {timeSlot.time}
                    </TimeSelect>
                )}
              </div>
            </div>

            <div>
              <Text variant="text-sm" className="text-gray-300">Tarde</Text>
              <div className="mt-2 flex gap-2 flex-wrap">
                {fetchBookingTimeSlots(date, "afternoon").map(
                  (timeSlot) => 
                    <TimeSelect 
                      key={`time-${timeSlot.time}`}
                      onClick={() => changeSelectedTime(timeSlot.time)}
                      {...(selectedTime == timeSlot.time && {selected: true})}
                      {...(timeSlot.booked == true && {disabled: true})}
                    >
                      {timeSlot.time}
                    </TimeSelect>
                )}
              </div>
            </div>

            <div>
              <Text variant="text-sm" className="text-gray-300">Noite</Text>
              <div className="mt-2 flex gap-2 flex-wrap">
                {fetchBookingTimeSlots(date, "evening").map(
                  (timeSlot) => 
                    <TimeSelect 
                      key={`time-${timeSlot.time}`}
                      onClick={() => changeSelectedTime(timeSlot.time)}
                      {...(selectedTime == timeSlot.time && {selected: true})}
                      {...(timeSlot.booked == true && {disabled: true})}
                    >
                      {timeSlot.time}
                    </TimeSelect>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Text variant="title-sm" className="text-gray-200">Cliente</Text>
          <Input placeholder="Nome" name="customerName" className="mt-2" required />
        </div>

        <Button type="submit" className="w-full">Agendar</Button>
      </form>
    </Container>
  )
}