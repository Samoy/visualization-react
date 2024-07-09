import styles from './index.module.scss'
import { DeviceStatus } from '@/models/device.ts'
import CountUp from 'react-countup'

interface Props {
  width?: number
  height?: number
  status?: DeviceStatus
  value: string | number
  legend: string | number
}

function DeviceInfo(props: Props) {
  const { width = 100, height = 100, status = DeviceStatus.normal, value, legend } = props
  return (
    <div className={styles.container}>
      <div
        className={styles.panel}
        style={{
          width,
          height,
        }}
        data-status={status}
      >
        <CountUp end={value as number} delay={Math.random()} />
      </div>
      <div className={styles.legend} data-status={status}>
        {legend}
      </div>
    </div>
  )
}

export default DeviceInfo
