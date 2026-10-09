import { createFileRoute } from "@tanstack/react-router";
import { HolidayMarketPage } from "../../components/HolidayPage";
import { holidayHead, usaMexico } from "../../data/holidays";

export const Route = createFileRoute("/holidays/usa-mexico")({
  head: () => holidayHead(usaMexico),
  component: UsaMexicoHolidaysPage,
});

function UsaMexicoHolidaysPage() {
  return <HolidayMarketPage market={usaMexico} />;
}
