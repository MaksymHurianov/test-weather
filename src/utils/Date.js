export function fullTime(date) {
    const formatDate = unit => (unit < 10 ? `0${unit}` : unit)

    const hours = formatDate(date.getHours())
    const minutes = formatDate(date.getMinutes())
    const seconds = formatDate(date.getSeconds())

    return `${hours}:${minutes}:${seconds}`
}
