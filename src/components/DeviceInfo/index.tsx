import styles from './index.module.scss'
import { DeviceStatus } from '@/models/device.ts'

interface Props {
  width?: number
  height?: number
  status?: DeviceStatus
  text: string | number
  legend: string | number
}

function DeviceInfo(props: Props) {
  const { width = 100, height = 100, status = DeviceStatus.normal, text, legend } = props
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
        {text}
      </div>
      <div className={styles.legend} data-status={status}>
        {legend}
      </div>
    </div>
  )
}

export default DeviceInfo
