import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { BorderBox7 } from '@jiaminghi/data-view-react'

interface Props extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  width?: number | string
  height?: number | string
}

const Card: React.FC<Props> = (props: Props) => {
  const { width, height, children, ...rest } = props
  return (
    <BorderBox7 style={{ width, height, padding: 20 }} {...rest} color={['#06306d', '#06306d80']}>
      {children}
    </BorderBox7>
  )
}

export default Card
