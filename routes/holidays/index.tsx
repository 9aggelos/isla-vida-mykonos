import { createFileRoute } from "@tanstack/react-router";
import { HolidaysHubPage } from "../../components/HolidayPage";
import { holidayHead, holidaysHub } from "../../data/holidays";

export const Route = createFileRoute("/holidays/")({
  head: () => holidayHead(holidaysHub),
  component: HolidaysHubPage,
});
