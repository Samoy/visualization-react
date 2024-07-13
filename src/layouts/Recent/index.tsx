import styles from './index.module.scss'
import { BorderBox10, ScrollBoard } from '@jiaminghi/data-view-react'

const fakeData: (string | number)[][] = []

for (let i = 0; i < 7; i++) {
  fakeData.push([
    `7月${i + 1}日`,
    ['支付宝', '微信', '银行卡'][Math.floor(Math.random() * 3)],
    ['餐饮', '医疗', '缴费', '百货', '娱乐'][Math.floor(Math.random() * 5)],
    `<span style="color: #1df3c1;font-weight: bold">${(Math.random() * 1000).toFixed(2)}</span>`,
  ])
}

/**
 * 近期消费
 *
 */
function Recent() {
  const config = {
    header: ['时间', '支付方式', '消费类型', '金额'],
    data: fakeData,
    headerBGC: 'transparent',
    oddRowBGC: '#37A2DA50',
    evenRowBGC: '#32C5E950',
  }
  return (
    <div className={styles.container}>
      <BorderBox10>
        <div className={styles.chart}>
          <div className={styles.title}>近七日消费</div>
          <ScrollBoard config={config} style={{ width: '100%', height: 'calc(100% - 24px)' }} />
        </div>
      </BorderBox10>
    </div>
  )
}

export default Recent
