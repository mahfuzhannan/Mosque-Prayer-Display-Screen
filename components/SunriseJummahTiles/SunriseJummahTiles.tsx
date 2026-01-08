import { JummahTimes } from "@/types/JummahTimesType"
import { dtFormatTimeTo12h } from "@/lib/datetimeUtils"
import ScreenCard from "@/components/Screens/Components/ScreenCard"

export default function SunriseJummahTiles({
  sunrise,
  jummahTimes = [],
}: {
  sunrise: string
  jummahTimes: JummahTimes
}) {

  return (
    <dl
      className={[
        "grid text-center w-full grid-flow-col auto-cols-fr gap-0 md:gap-3"
      ].join(" ")}
    >
      <ScreenCard title={"Sunrise"} value={dtFormatTimeTo12h(sunrise)} />

      {jummahTimes.map((jummahTime, index) => (
        <ScreenCard
          key={index}
          title={jummahTime.label}
          value={dtFormatTimeTo12h(jummahTime.time)}
        />
      ))}
    </dl>
  )
}
