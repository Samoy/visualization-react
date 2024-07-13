import CountUp from 'react-countup'
import styles from './index.module.scss'
import { BorderBox11 } from '@jiaminghi/data-view-react'
import { useState } from 'react'
import _ from 'lodash'
/**
 * 结余
 */
function Balance() {
  const [textAndColor, setTextAndColor] = useState({ text: '盈余', color: '#3de7c9' })

  function getTextAndColor(value: number) {
    if (value > 0) {
      return {
        text: '盈余',
        color: '#3de7c9',
      }
    } else if (value < 0) {
      return {
        text: '赤字',
        color: '#f5023d',
      }
    } else {
      return {
        text: '平衡',
        color: '#3de7c9',
      }
    }
  }

  return (
    <div className={styles.container}>
      <BorderBox11 title="本月结余" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CountUp
          className={styles.coutup}
          start={0}
          end={1375}
          duration={1}
          style={{ color: textAndColor.color }}
        ></CountUp>
        <div style={{ color: textAndColor.color }}>{textAndColor.text}</div>
      </BorderBox11>
    </div>
  )
}

export default Balance
