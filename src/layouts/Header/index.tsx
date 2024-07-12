/**
 * 标题
 */
import styles from './index.module.scss'
import { useState } from 'react'
import dayjs from 'dayjs'
import { useRafInterval } from 'ahooks'

function Header() {
  const [time, setTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  useRafInterval(() => {
    setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  }, 1000)
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.text}>家庭收支可视化平台</span>
      </h1>
      <time dateTime={time} className={styles.time}>
        {time}
      </time>
    </header>
  )
}

export default Header
