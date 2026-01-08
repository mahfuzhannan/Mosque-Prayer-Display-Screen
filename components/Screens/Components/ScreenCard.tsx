interface ScreenCardProps {
  title: string
  value: string
  className?: string
  innerClassName?: string
}

export default function ScreenCard({
  title,
  value,
  className = "",
}: ScreenCardProps) {
  return (
    <div
      className={`flex flex-col  justify-center bg-mosqueBrand-primaryAlt text-white p-4 lg:p-6 w-full rounded-2xl ${className}`}
    >
      <dt className="text-sm lg:text-2xl font-medium">{title}</dt>
      <dd className="mt-2 text-xl lg:text-3xl font-bold tracking-tight">
        {value}
      </dd>
    </div>
  )
}
