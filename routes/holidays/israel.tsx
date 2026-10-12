import { createFileRoute } from "@tanstack/react-router";
import { HolidayMarketPage } from "../../components/HolidayPage";
import { holidayHead, israel } from "../../data/holidays";

export const Route = createFileRoute("/holidays/israel")({
  head: () => holidayHead(israel),
  component: IsraelHolidaysPage,
});

function IsraelHolidaysPage() {
  return <HolidayMarketPage market={israel} />;
}
