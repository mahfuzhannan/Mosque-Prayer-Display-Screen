"use client"

import React, { createContext } from "react"
import { ConfigurationJson } from "@/types/ConfigurationType"
import { configurationDefaults } from "@/config/ConfigurationDefaults"
import type {
  DailyPrayerTime,
  UpcomingPrayerTimes,
} from "@/types/DailyPrayerTimeType"
import type { JummahTimes } from "@/types/JummahTimesType"
import type { MosqueMetadataType } from "@/types/MosqueDataType"

type ScreenMosqueDataProviderProps = {
  today?: DailyPrayerTime
  tomorrow?: DailyPrayerTime
  jummahTimes?: JummahTimes
  mosqueMetadata?: MosqueMetadataType
  upcomingPrayerDays: UpcomingPrayerTimes[]
}

export const ScreenMosqueDataContext =
  createContext<ScreenMosqueDataProviderProps>({
    today: undefined,
    tomorrow: undefined,
    jummahTimes: undefined,
    mosqueMetadata: undefined,
    upcomingPrayerDays: [],
  })

type ProviderProps = React.PropsWithChildren<ScreenMosqueDataProviderProps>

export function ScreenMosqueDataProvider({
  children,
  ...value
}: ProviderProps) {
  return (
    <ScreenMosqueDataContext.Provider value={value}>
      {children}
    </ScreenMosqueDataContext.Provider>
  )
}