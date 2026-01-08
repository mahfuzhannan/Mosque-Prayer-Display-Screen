"use client"

import SunriseAndJummahSlide
  from "@/components/Screens/Slides/SunriseAndJummahSlide"
import NextPrayerTimeSlide
  from "@/components/Screens/Slides/NextPrayerTimeSlide"

export default function NextPrayerTimeSunriseJummahSlide() {

  return (
    <div className={"flex flex-col gap-3 justify-center "}>
      <NextPrayerTimeSlide />
      <SunriseAndJummahSlide />
    </div>
  )
}
