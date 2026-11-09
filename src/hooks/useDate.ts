export function useDate() {
  const currentDateUnformatted = new Date()
  const currentDay = () => {
    if ( currentDateUnformatted.getDate() < 10 ) {
      return `0${currentDateUnformatted.getDate()}`
    }
    
    return currentDateUnformatted.getDate()
  }
  
  const currentMonth = () => {
    if ( currentDateUnformatted.getMonth() + 1 < 10 ) {
      return `0${currentDateUnformatted.getMonth() + 1}`
    }
    
    return currentDateUnformatted.getMonth() + 1
  }
  
  const currentYear = currentDateUnformatted.getFullYear()
  const currentDate = `${currentYear}-${currentMonth()}-${currentDay()}`

  return {
    currentDate
  }
}