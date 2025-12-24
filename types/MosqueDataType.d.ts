import { DailyPrayerTime } from "./DailyPrayerTimeType"
import { JummahTimes } from "./JummahTimesType"
import { ConfigurationJson } from '@/types/ConfigurationType'

export interface MosqueData {
  metadata: MosqueMetadataType
  jummah_times: JummahTimes
  prayer_times: DailyPrayerTime[]
  configuration?: ConfigurationJson
}

type KeyValueStringType = { [key: string]: string }

export type MosqueMetadataType = KeyValueStringType
