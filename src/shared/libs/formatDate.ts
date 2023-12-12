export const formatDate = (timestamp: number): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }

  const formatter = new Intl.DateTimeFormat('en', options)
  const formattedDate = formatter.format(timestamp * 1000)

  return formattedDate
}

export const formatTime = (timestamp: number): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  const formatter = new Intl.DateTimeFormat('en', options)
  const formattedTime = formatter.format(timestamp * 1000)

  return formattedTime
}
