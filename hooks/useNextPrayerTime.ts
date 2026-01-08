import { useEffect, useState } from "react"
import { DailyPrayerTime } from "@/types/DailyPrayerTimeType"
import { getNextPrayer } from "@/services/PrayerTimeService"

export function useNextPrayerTime(today?: DailyPrayerTime) {
  const [nextPrayerTime, setNextPrayerTime] = useState(() =>
    getNextPrayer(today),
  )

  useEffect(() => {
    setNextPrayerTime(getNextPrayer(today))

    const interval = setInterval(() => {
      setNextPrayerTime(getNextPrayer(today))
    }, 60 * 1000)

    return () => clearInterval(interval)
  }, [today])

  return nextPrayerTime
}
