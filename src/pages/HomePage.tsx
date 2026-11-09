import { Schedule } from "../core-components/Schedule";
import { Sidebar } from "../core-components/Sidebar";

export function Home() {
  return (
    <div className="absolute w-full">
      <div className="flex gap-3">
        <Sidebar className="mr-0" />
        <Schedule className="mx-0" />
      </div>
    </div>
  )
}