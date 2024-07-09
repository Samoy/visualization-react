export enum DeviceStatus {
  normal = 'normal',
  health = 'health',
  warning = 'warning',
  danger = 'danger',
}

export interface DeviceOverview {
  name: string
  status: DeviceStatus
  value: number
  id: string
}
