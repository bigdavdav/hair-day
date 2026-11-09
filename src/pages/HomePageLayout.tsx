import { Outlet } from "react-router";
import { Badge } from "../core-components/Badge";


export function HomePageLayout() {
  return(
    <>
      <Badge className="absolute z-10" />
      <Outlet />
    </>
  )
}