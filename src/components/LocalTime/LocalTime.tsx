import { useEffect, useState } from 'react'
import { useLanguage } from '../../providers/LanguageProvider'
import styles from './LocalTime.module.scss'

function getMoscowTime() {
  return new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Moscow',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

export function LocalTime() {
  const [time, setTime] = useState(getMoscowTime)
  const { language } = useLanguage()

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getMoscowTime()), 30_000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className={styles.time}>
      <i />
      <span>{language === 'ru' ? 'Калуга / местное время' : 'Moscow / local time'}</span>
      <strong>{time} MSK</strong>
    </div>
  )
}
