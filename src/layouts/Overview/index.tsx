import StrokeBorderAnimatedContainer from '@/components/StrokeBorderAnimatedContainer'
import { HTMLAttributes } from 'react'
import styles from './index.module.scss'
import { DeviceStatus } from '@/models/device.ts'
import DeviceInfo from '@/components/DeviceInfo'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const deviceList = [
  {
    name: '设备总数',
    status: DeviceStatus.normal,
    num: 200,
  },
  {
    name: '在线设备',
    status: DeviceStatus.health,
    num: 100,
  },
  {
    name: '故障设备',
    status: DeviceStatus.warning,
    num: 10,
  },
  {
    name: '离线设备',
    status: DeviceStatus.danger,
    num: 20,
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
              <DeviceInfo key={item.name} text={item.num} legend={item.name} status={item.status} />
            ))}
          </div>
        </div>
      </StrokeBorderAnimatedContainer>
    </div>
  )
}

export default Overview
