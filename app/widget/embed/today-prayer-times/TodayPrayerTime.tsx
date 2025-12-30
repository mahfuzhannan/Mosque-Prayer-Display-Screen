import moment from "moment-hijri"
import { DailyPrayerTime } from "@/types/DailyPrayerTimeType"
import "../../widget.css"
import { getNextPrayer } from "@/services/PrayerTimeService"
import { getPrayerTimesForToday } from "@/services/MosqueDataService"
import { cn } from "@/lib/utils"

type Props = {
  timeFormat?: "h:mm" | "h:mm A" | "HH:mm"
  showSunrise?: boolean
  showDate?: boolean
  showHijri?: boolean
}

export async function TodayPrayerTime({
  timeFormat = "h:mm",
  showSunrise = false,
  showDate = false,
  showHijri = false,
}: Props) {
  const convertTime = (time: string) =>
    moment(time, ["HH:mm"]).locale("en").format(timeFormat)

  const today: DailyPrayerTime = await getPrayerTimesForToday()
  const englishDate = moment().format("D MMMM YYYY")
  const hijriDate = moment().locale("en").format("iD iMMMM iYYYY")

  const nextPrayerTime = getNextPrayer(today)
  let todaySalahTimes: Array<{
    label: string
    start: string
    congregation: string | null
    prayerIndex: number
  }> = [
    {
      label: "Fajr",
      start: today.fajr.start,
      congregation: today.fajr.congregation_start,
      prayerIndex: 0,
    },
    {
      label: "Zuhr",
      start: today.zuhr.start,
      congregation: today.zuhr.congregation_start,
      prayerIndex: 1,
    },
    {
      label: "'Asr",
      start: today.asr.start,
      congregation: today.asr.congregation_start,
      prayerIndex: 2,
    },
    {
      label: "Maghrib",
      start: today.maghrib.start,
      congregation: today.maghrib.congregation_start,
      prayerIndex: 3,
    },
    {
      label: "Isha",
      start: today.isha.start,
      congregation: today.isha.congregation_start,
      prayerIndex: 4,
    },
  ]

  if (showSunrise) {
    todaySalahTimes = [
      ...todaySalahTimes.slice(0, 1),
      {
        label: "Sunrise",
        start: today.sunrise_start,
        congregation: null,
        prayerIndex: -1,
      },
      ...todaySalahTimes.slice(1),
    ]
  }

  return (
    <div className="PrayerTimeWidgetWrapper">
      <table className="w-full ml-0 text-center">
        <thead>
          {(showDate || showHijri) && (
            <tr>
              <th className={"pr-6 text-right text-gray-300"}></th>
              <th
                colSpan={todaySalahTimes?.length}
                className={"text-gray-400 font-normal text-center text-md"}
              >
                {[showDate && englishDate, showHijri && hijriDate]
                  .filter(Boolean)
                  .join(" • ")}
              </th>
            </tr>
          )}
          <tr>
            <th />
            {todaySalahTimes.map((value, index) => (
              <th
                key={index}
                className={cn(
                  "min-w-[10px] w-24",
                  nextPrayerTime.today &&
                    nextPrayerTime.prayerIndex === value.prayerIndex
                    ? "bg-mosqueBrand-primaryAlt text-mosqueBrand-onPrimary rounded-t-md"
                    : "",
                )}
              >
                {value.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={"text-right text-gray-400 font-normal"}>Begins</th>
            {todaySalahTimes.map((value, index) => (
              <td
                key={index}
                className={cn(
                  "min-w-[10px] w-24",
                  nextPrayerTime.today &&
                    nextPrayerTime.prayerIndex === value.prayerIndex
                    ? "bg-mosqueBrand-primaryAlt text-mosqueBrand-onPrimary"
                    : "",
                )}
              >
                {value.start ? convertTime(value.start) : ""}
              </td>
            ))}
          </tr>
          <tr>
            <th className={"text-right text-gray-400 font-normal"}>
              Jama&apos;ah
            </th>

            {todaySalahTimes.map((value, index) => (
              <td
                key={index}
                className={cn(
                  "min-w-[10px] w-24",
                  nextPrayerTime.today &&
                    nextPrayerTime.prayerIndex === value.prayerIndex
                    ? "bg-mosqueBrand-primaryAlt text-mosqueBrand-onPrimary rounded-b-md"
                    : "",
                )}
              >
                {value.congregation ? convertTime(value.congregation) : ""}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
