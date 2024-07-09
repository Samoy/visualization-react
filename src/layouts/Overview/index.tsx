import StrokeBorderAnimatedContainer from '@/components/StrokeBorderAnimatedContainer'
import { HTMLAttributes } from 'react'
import styles from './index.module.scss'
import { DeviceOverview, DeviceStatus } from '@/models/device.ts'
import DeviceInfo from '@/components/DeviceInfo'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const deviceList: DeviceOverview[] = [
  {
    id: 'total',
    name: '设备总数',
    status: DeviceStatus.normal,
    value: 253,
  },
  {
    id: 'online',
    name: '在线设备',
    status: DeviceStatus.health,
    value: 123,
  },
  {
    id: 'fault',
    name: '故障设备',
    status: DeviceStatus.warning,
    value: 48,
  },
  {
    id: 'offline',
    name: '离线设备',
    status: DeviceStatus.danger,
    value: 79,
  },
]

/**
 * 概览
 */
function Overview(props: Props) {
  return (
    <div {...props}>
      <StrokeBorderAnimatedContainer height={240}>
        <div className={styles.overview}>
          <div className={styles.title}>
            <span className={styles.text}>设备概览</span>
          </div>
          <div className={styles.content}>
            {deviceList.map((item) => (
              <DeviceInfo key={item.id} value={item.value} legend={item.name} status={item.status} />
            ))}
          </div>
        </div>
      </StrokeBorderAnimatedContainer>
    </div>
  )
}

export default Overview
