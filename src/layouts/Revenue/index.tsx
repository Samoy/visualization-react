import styles from './index.module.scss'
import Card from '@/components/Card'
import Progress from '@/components/Progress'
import { DigitalFlop } from '@jiaminghi/data-view-react'
import { useState, useEffect } from 'react'
/**
 * 收入
 */
function Revenue() {
  const [config, setConfig] = useState({
    number: [0],
    content: '￥ {nt}',
  })

  useEffect(() => {
    setConfig((o) => ({ ...o, number: [10000] }))
  }, [])

  return (
    <Card className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div>本月收入</div>
          <DigitalFlop config={config} style={{ height: 'calc(100% - 44px)' }} />
        </div>
        <div className={styles.right}>
          <div>
            固定收入
            <div>
              <Progress value={8000} total={10000}></Progress>
            </div>
          </div>
          <div>
            投资理财
            <div>
              <Progress value={1800} total={10000}></Progress>
            </div>
          </div>
          <div>
            其他收入
            <div>
              <Progress value={200} total={10000}></Progress>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Revenue
