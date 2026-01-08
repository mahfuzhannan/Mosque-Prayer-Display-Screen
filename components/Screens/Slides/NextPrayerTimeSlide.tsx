"use client"

import { useNextPrayerTime } from "@/hooks/useNextPrayerTime"
import { dtFormatTimeTo12hAmPm } from "@/lib/datetimeUtils"
import { cn } from "@/lib/utils"
import { useScreenMosqueData } from "@/hooks/useScreenMosqueData"

export default function NextPrayerTimeSlide() {
  const {today} = useScreenMosqueData()
  const nextPrayerTime = useNextPrayerTime(today)

  if (!today) {
    return null
  }


  return (
    <div
      className={
        "h-full flex flex-col gap-2 items-center justify-center"
      }
    >
      <div className="flex flex-col gap-6 items-center justify-center font-bold text-mosqueBrand-onPrimaryAlt bg-mosqueBrand-primaryAlt p-4 lg:p-8 lg:pb-14 w-full rounded-2xl">
        <p
          className={cn(
            "text-xl md:text-5xl font-semiboldpb-2 text-mosqueBrand-onPrimary",
          )}
        >
          Next Salah
        </p>
        <p className={cn("text-xl md:text-8xl")}>
          {nextPrayerTime.prayerLabel}
        </p>
        <p
          className={cn(
            "text-xl md:text-8xl uppercase underline decoration-mosqueBrand-highlight underline-offset-8",
          )}
        >
          {dtFormatTimeTo12hAmPm(nextPrayerTime.time)}
        </p>
      </div>
    </div>
  )
}
