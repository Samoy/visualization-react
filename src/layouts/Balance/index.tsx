import CountUp from 'react-countup'
import styles from './index.module.scss'
import { BorderBox11 } from '@jiaminghi/data-view-react'

/**
 * 结余
 */
function Balance() {
  const balance = 1375
  const textAndColor = getTextAndColor(balance)

  function getTextAndColor(value: number) {
    if (value > 0) {
      return {
        text: '盈余',
        color: '#32a116',
      }
    }
    if (value < 0) {
      return {
        text: '赤字',
        color: '#f5023d',
      }
    }
    return {
      text: '平衡',
      color: '#3de7c9',
    }
  }

  return (
    <div className={styles.container}>
      <BorderBox11 title="本月结算">
        <CountUp className={styles.coutup} start={0} end={balance} duration={1} style={{ color: '#3de7c9' }}></CountUp>
        <div className={styles.tips} style={{ color: textAndColor.color }}>
          {textAndColor.text}
        </div>
      </BorderBox11>
    </div>
  )
}

export default Balance
