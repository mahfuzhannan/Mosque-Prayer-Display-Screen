import moment from "moment-hijri"

const LOCALE = process.env.LOCALE || "en"

export function dtNow(): moment.Moment {
  return moment()
}

export function dtNowLocale(): moment.Moment {
  return moment().locale(LOCALE)
}

export function dtLocale(date: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): moment.Moment {
  return moment(date, format).locale(LOCALE)
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

export function dtNowLocaleFormatTime12HourWithTimePeriod(): string {
  return dtNowLocale().format("h:mm A")
}

export function dtNowFormatFull(): string {
  return dtNowLocale().format("D MMMM YYYY")
}

export function dtNowHijriFormatFull(): string {
  return dtNowLocale().format("iD iMMMM iYYYY")
}

export function dtTimeToCustomFormat(time?: string, format?: string): string {
  if (!time) {
    return ""
  }
  if (!format) {
    return time
  }
  return moment(time, ["HH:mm", "h:mm", "h:mm A"]).locale(LOCALE).format(format)
}