import { createFileRoute } from "@tanstack/react-router";
import { HolidayMarketPage } from "../../components/HolidayPage";
import { holidayHead, uaeDubai } from "../../data/holidays";

export const Route = createFileRoute("/holidays/uae-dubai")({
  head: () => holidayHead(uaeDubai),
  component: UaeDubaiHolidaysPage,
});

function UaeDubaiHolidaysPage() {
  return <HolidayMarketPage market={uaeDubai} />;
}
