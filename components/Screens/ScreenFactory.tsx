import { ConfigurationJson } from "@/types/ConfigurationType"
import DefaultScreen from "@/components/Screens/DefaultScreen"
import RightLayoutScreen from "@/components/Screens/RightLayoutScreen"

interface ScreenFactoryProps {
  config: ConfigurationJson
}

export default async function ScreenFactory({ config } : ScreenFactoryProps) {
  const selectedLayout = config.feature.screen.layout

  if (selectedLayout === "dynamic-right") {
    return <RightLayoutScreen config={config} />
  }
  return <DefaultScreen config={config} />
}
