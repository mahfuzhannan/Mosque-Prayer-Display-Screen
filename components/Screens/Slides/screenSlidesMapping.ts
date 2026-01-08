import type { ScreenSlideType } from "@/types/ConfigurationType"
import NextPrayerTimeSlide from "@/components/Screens/Slides/NextPrayerTimeSlide"
import MetadataSlide from "@/components/Screens/Slides/MetadataSlide"

export const SCREEN_SLIDES_MAPPING: Record<ScreenSlideType, React.ComponentType> = {
  // "next-salah-countdown": NextSalahCountdownSlide,
  "next-salah-time": NextPrayerTimeSlide,
  "metadata": MetadataSlide,
}
