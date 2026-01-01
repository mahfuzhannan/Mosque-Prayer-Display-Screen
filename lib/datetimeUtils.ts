import { DateTime, Settings } from "luxon"

const LOCALE = process.env.LOCALE || "en"

Settings.defaultLocale = LOCALE


export function dtNow(): DateTime {
  return DateTime.now()
}

export function dtNowLocale(): DateTime {
  return DateTime.now()
}

export function dtLocale(
  date: string | Date | DateTime,
  format?: string,
): DateTime {
  if (date instanceof DateTime) {
    return date
  }
  if (date instanceof Date) {
    return DateTime.fromJSDate(date)
  }
  let sanitisedDateInput = date.trim()
  if (format) {
    return DateTime.fromFormat(sanitisedDateInput, format)
  }
  return DateTime.fromISO(sanitisedDateInput)
}

export function dtNowLocaleCustomFormat(format: string): string {
  return dtNowLocale().toFormat(format)
}

export function dtNowLocalFormatTime24Hour(): string {
  return dtNowLocale().toFormat("HH:mm")
}

export function dtNowLocalFormatTime12Hour(): string {
  return dtNowLocale().toFormat("h:mm")
}

export function dtNowLocaleFormatTime12hAmPm(): string {
  return dtNowLocale().toFormat("h:mm a")
}

export function dtNowFormatFull(): string {
  return dtNowLocale().toFormat("d MMMM yyyy")
}

export function dtTimeToCustomFormat(time?: string, format?: string): string {
  if (!time) {
    return ""
  }
  if (!format) {
    return time
  }
  return dtLocale(time).toFormat(format)
}

export function dtFormatTo12hAmPm(time?: string): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("h:mm a")
}

export function dtFormatDayNumber(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("d")
}

export function dtFormatDayShort(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("ccc")
}

export function dtFormatDayLong(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("cccd")
}

export function dtFormatMonthNumber(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("M")
}

export function dtFormatMonthShort(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("LLL")
}

export function dtFormatMonthLong(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("LLLL")
}

export function dtFormatDayDateShort(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("ccc d MMM")
}

export function dtFormatDateMonthLong(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("d LLLL")
}

export function dtFormatDateMonthYearLong(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).toFormat("d LLLL yyyy")
}

export function dtMonthNumToFullMonth(monthNum: string) {
  return dtNowLocale()
    .set({ month: Number(monthNum) })
    .toFormat("MMMM")
}

// Hijri funcs

export function dtHijriNow(): DateTime {
  return dtNowLocale().reconfigure({ outputCalendar: "islamic-umalqura" })
}

export function dtHijri(date: string | DateTime): DateTime {
  return dtLocale(date).reconfigure({
    outputCalendar: "islamic-umalqura",
  })
}

export function dtHijriNowFormatFull(): string {
  return dtHijriNow().toFormat("d LLLL yyyy")
}

export function dtHijriFormatDayNumber(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtHijri(time).toFormat("d")
}

export function dtHijriFormatDayShort(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtHijri(time).toFormat("ccc")
}

export function dtHijriFormatMonthShort(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtHijri(time).toFormat("MMM")
}


export function dtHijriFormatMonthLong(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtHijri(time).toFormat("MMMM")
}


export function dtHijriFormatYearLong(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtHijri(time).toFormat("LLLL")
}

export function dtHijriFormatDateMonthYearLong(time?: string | DateTime): string {
  if (!time) {
    return ""
  }
  return dtHijri(time).toFormat("d LLLL yyyy")
}