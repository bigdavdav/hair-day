import { Text } from "../components/Text"
import { Button } from "../components/Button"
import { Icon } from "../components/Icon"
import { ButtonIcon } from "../components/ButtonIcon"
import { Input } from "../components/Input"
import { TimeSelect } from "../components/TimeSelect"
import { Table } from "../components/Table"

import CalendarBlank from "../assets/icons/CalendarBlank.svg?react"
import CaretDown from "../assets/icons/CaretDown.svg?react"
import CaretLeft from "../assets/icons/CaretLeft.svg?react"
import CaretRight from "../assets/icons/CaretRight.svg?react"
import CloudSun from "../assets/icons/CloudSun.svg?react"
import MoonStars from "../assets/icons/MoonStars.svg?react"
import SunHorizon from "../assets/icons/SunHorizon.svg?react"
import Trash from "../assets/icons/Trash.svg?react"
import UserSquare from "../assets/icons/UserSquare.svg?react"

import LogoFull from "../assets/logos/LogoFull.svg?react"
import LogoIcon from "../assets/logos/LogoIcon.svg?react"

export function ComponentsPage() {
  return (
    <div className="grid gap-10 mx-auto max-w-126 px-2">
      <div className="flex gap-4">
        <Icon svg={CalendarBlank} />
        <Icon svg={CaretDown} />
        <Icon svg={CaretLeft} />
        <Icon svg={CaretRight} />
        <Icon svg={CloudSun} />
        <Icon svg={MoonStars} />
        <Icon svg={SunHorizon} />
        <Icon svg={Trash} />
        <Icon svg={UserSquare} />
      </div>

      <div className="flex gap-4">
        <LogoFull />
        <LogoIcon />
      </div>

      <div className="flex flex-col gap-10">
        <Text variant="text-sm">Text SM</Text>
        <Text variant="text-md">Text MD</Text>
        <Text variant="title-sm">Title SM</Text>
        <Text variant="title-md">Title MD</Text>
        <Text variant="title-lg">Title LG</Text>
      </div>

      <div className="flex flex-col gap-10">
        <Button className="w-85">Agendar</Button>
        <Button className="w-85" disabled>Agendar</Button>
      </div>


      <div>
        <ButtonIcon icon={Trash} />
      </div>

      <div className="flex flex-col gap-10">
        <Input as="text" placeholder="gay" />
        <Input as="date" />
      </div>

      <div className="flex gap-1 bg-gray-400">
        <TimeSelect>9:00</TimeSelect>
        <TimeSelect selected>9:00</TimeSelect>
        <TimeSelect disabled>9:00</TimeSelect>
      </div>

      <div>
        <Table />
      </div>
    </div>
  )
}
