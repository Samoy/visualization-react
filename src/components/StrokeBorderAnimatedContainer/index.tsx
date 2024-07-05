import React, { PropsWithChildren } from 'react'
import styles from './index.module.scss'

type Props = PropsWithChildren<{
  width?: number
  height?: number
  duration?: number
}>

const StrokeBorderAnimatedContainer: React.FC<Props> = (props: Props) => {
  const { width = 600, height = 300, duration = 3, children } = props
  const path = `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`
  const points = `5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`
  return (
    <>
      <div
        className={styles.container}
        style={{
          width,
          height,
        }}
      >
        <svg className={styles.svg} width={width} height={height}>
          <defs>
            <path id="stroke-border-path" d={path} fill="transparent"></path>
            <radialGradient id="stroke-border-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1"></stop>
              <stop offset="100%" stopColor="#fff" stopOpacity="0"></stop>
            </radialGradient>
            <mask id="stroke-border-gradient-mask">
              <circle cx="0" cy="0" r="150" fill="url(#stroke-border-gradient)">
                <animateMotion dur={`${duration}s`} path={path} rotate="auto" repeatCount="indefinite"></animateMotion>
              </circle>
            </mask>
          </defs>
          <polygon fill="transparent" points={points}></polygon>
          <use strokeWidth="1" xlinkHref="#stroke-border-path" stroke="#235fa7"></use>
          <use
            strokeWidth="3"
            xlinkHref="#stroke-border-path"
            mask="url(#stroke-border-gradient-mask)"
            stroke="#4fd2dd"
          ></use>
        </svg>
        {children}
      </div>
    </>
  )
}

export default StrokeBorderAnimatedContainer
