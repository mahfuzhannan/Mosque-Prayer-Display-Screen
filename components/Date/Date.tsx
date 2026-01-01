"use client"

import {
  dtHijriNowFormatFull,
  dtNowLocaleCustomFormat,
} from "@/lib/datetimeUtils"

export default function Date() {
  const englishDate = dtNowLocaleCustomFormat("cccc d LLLL yyyy")
  const hijriDate = dtHijriNowFormatFull()

  return (
    <div className="text-mosqueBrand-onPrimary text-center md:text-left">
      <p className="font-bold text-2xl md:text-5xl">{englishDate}</p>
      <p className="mt-3 md:mt-5 text-2xl md:text-4xl">{hijriDate}</p>
    </div>
  )
}
