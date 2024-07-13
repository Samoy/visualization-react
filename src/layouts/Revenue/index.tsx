import styles from './index.module.scss'
import Card from '@/components/Card'
import Progress from '@/components/Progress'
import CountUp from 'react-countup'
/**
 * 收入
 */
function Revenue() {
  return (
    <Card className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div>本月收入</div>
          <CountUp start={0} end={10000} duration={1} className={styles.countup}></CountUp>
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
