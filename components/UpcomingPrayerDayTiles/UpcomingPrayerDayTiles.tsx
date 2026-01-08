import { UpcomingPrayerTimes } from "@/types/DailyPrayerTimeType"
import { dtFormatTimeTo12h } from "@/lib/datetimeUtils"
import ScreenCard from "@/components/Screens/Components/ScreenCard"

export default function UpcomingPrayerDayTiles({
  times,
}: {
  times: UpcomingPrayerTimes
}) {
  return (
    <dl
      className={`grid justify-items-stretch lg:grid-cols-6 text-center gap-0 md:gap-3`}
    >
      <ScreenCard title="Jama'ah times for" value={times.display_date} />

      <ScreenCard
        title={`Fajr (${times.display_day_label})`}
        value={dtFormatTimeTo12h(times.fajr.congregation_start)}
      />

      <ScreenCard
        title={`Zuhr (${times.display_day_label})`}
        value={dtFormatTimeTo12h(times.zuhr.congregation_start)}
      />

      <ScreenCard
        title={`Asr (${times.display_day_label})`}
        value={dtFormatTimeTo12h(times.asr.congregation_start)}
      />

      <ScreenCard
        title={`Maghrib (${times.display_day_label})`}
        value={dtFormatTimeTo12h(times.maghrib.congregation_start)}
      />

      <ScreenCard
        title={`Isha (${times.display_day_label})`}
        value={dtFormatTimeTo12h(times.isha.congregation_start)}
      />
    </dl>
  )
}
