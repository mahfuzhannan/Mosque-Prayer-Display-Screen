import moment from "moment"
import momentHijri from "moment-hijri"

const LOCALE = process.env.LOCALE || "en"

export function dtNow(): moment.Moment {
  return moment()
}

export function dtNowLocale(): moment.Moment {
  return moment().locale(LOCALE)
}

export function dtLocale(date: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): moment.Moment {
  return moment(date, format, LOCALE, strict)
}

export function dtNowLocaleCustomFormat(format: string): string {
  return dtNowLocale().format(format)
}

export function dtNowLocalFormatTime24Hour(): string {
  return dtNowLocale().format("HH:mm")
}

export function dtNowLocalFormatTime12Hour(): string {
  return dtNowLocale().format("h:mm")
}

export function dtNowLocaleFormatTime12hAmPm(): string {
  return dtNowLocale().format("h:mm A")
}

export function dtNowFormatFull(): string {
  return dtNowLocale().format("D MMMM YYYY")
}

export function dtTimeToCustomFormat(time?: string, format?: string): string {
  if (!time) {
    return ""
  }
  if (!format) {
    return time
  }
  return dtLocale(time, ["HH:mm", "h:mm", "h:mm a", "h:mm A"]).format(format)
}

export function dtFormatTo12hAmPm(time?: string): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("h:mm a")
}

export function dtFormatDayNumber(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("d")
}

export function dtFormatDayShort(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("ccc")
}

export function dtFormatDayLong(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("cccd")
}

export function dtFormatMonthNumber(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("M")
}

export function dtFormatMonthShort(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("LLL")
}

export function dtFormatMonthLong(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("LLLL")
}

export function dtFormatDayDateShort(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("ccc d MMM")
}

export function dtFormatDateMonthLong(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("d LLLL")
}

export function dtFormatDateMonthYearLong(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtLocale(time).format("d LLLL yyyy")
}

export function dtMonthNumToFullMonth(monthNum: string) {
  return dtNowLocale()
    .set('month', Number(monthNum) - 1)
    .format("MMMM")
}

// Hijri funcs

export function dtHijriLocale(
  date: moment.MomentInput,
  format?: moment.MomentFormatSpecification,
  strict?: boolean,
): moment.Moment {
  return momentHijri(date, format, strict).locale(LOCALE)
}

export function dtHijriNow(): moment.Moment {
  return momentHijri().locale(LOCALE)
}

export function dtHijriNowFormatFull(): string {
  return dtHijriNow().format("d LLLL yyyy")
}

export function dtHijriFormatDayNumber(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtHijriLocale(time).format("d")
}

export function dtHijriFormatDayShort(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtHijriLocale(time).format("ccc")
}

export function dtHijriFormatMonthShort(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtHijriLocale(time).format("MMM")
}

export function dtHijriFormatMonthLong(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtHijriLocale(time).format("MMMM")
}

export function dtHijriFormatYearLong(time?: string | moment.Moment): string {
  if (!time) {
    return ""
  }
  return dtHijriLocale(time).format("LLLL")
}

export function dtHijriFormatDateMonthYearLong(
  time?: string | moment.Moment,
): string {
  if (!time) {
    return ""
  }
  return dtHijriLocale(time).format("d LLLL yyyy")
}

export function dtNowHijriFormatFull(): string {
  return dtNowLocale().format("iD iMMMM iYYYY")
}