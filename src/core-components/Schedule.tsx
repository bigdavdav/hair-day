import { useContext } from "react";
import { cx } from "class-variance-authority";

import { AppContext } from "../appContext";

import { Container } from "../components/Container";
import { Text } from "../components/Text";
import { Table } from "../components/Table";
import { Input } from "../components/Input";

interface ScheduleProps {
  className?: string
}

export function Schedule({className}: ScheduleProps) {
  const { date, fetchBookingTimeSlots } = useContext(AppContext)

  return <Container as="main" variant="main" className={cx(["w-full flex flex-col gap-8", className])}>
    <div className="flex justify-between items-start">
      <div>
        <Text variant="title-lg" as="h1">Sua Agenda</Text>
        <Text variant="text-sm" as="p" className="text-gray-300 block mt-2">Consulte os seus cortes de cabelo agendados por dia</Text>
      </div>

      <Input as="date" className="w-38!" />
    </div>

    <div className="flex flex-col gap-3">
      {
        fetchBookingTimeSlots(date, undefined, true).length != 0 
        ?
          <>
            {
              fetchBookingTimeSlots(date, "morning", true).length >= 1 && <Table header="Manha" content={fetchBookingTimeSlots(date, "morning", true)} />
            }
            {
              fetchBookingTimeSlots(date, "afternoon", true).length >= 1 && <Table header="Tarde" content={fetchBookingTimeSlots(date, "afternoon", true)} />
            }
            {
              fetchBookingTimeSlots(date, "evening", true).length >= 1 && <Table header="Noite" content={fetchBookingTimeSlots(date, "evening", true)} />
            }
            
            {
              fetchBookingTimeSlots(date, "morning", true).length == 0 && <Text>Nao existe agendamentos para manha</Text>
            }
            {
              fetchBookingTimeSlots(date, "afternoon", true).length == 0 && <Text>Nao existe agendamentos para tarde</Text>
            }
            {
              fetchBookingTimeSlots(date, "evening", true).length == 0 && <Text>Nao existe agendamentos para noite</Text>
            }
          </>
        :
          <Text>Ainda nao existe nemhum agendamento.</Text>
      }
    </div>
  </Container>
}