import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import { GaugeChart, GaugeSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GaugeChart, CanvasRenderer])

type Props = {
  total: number
  value: number
  color?: string
}

function Progress(props: Props) {
  const { value = 40, total, color = '#3de7c9' } = props
  const gaugeData = [
    {
      value: Number(((value / total) * 100).toFixed(2)),
      title: {
        offsetCenter: ['0%', '-20%'],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '10%'],
      },
    },
  ]
  const seriesOption: GaugeSeriesOption[] = [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false,
      },
      radius: '70%',
      progress: {
        show: true,
        width: 5,
        roundCap: true,
      },
      axisLine: {
        lineStyle: {
          width: 5,
          color: [[1, '#aaaaaa50']],
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      data: gaugeData,
      title: {
        color: '#fff',
        fontSize: 12,
      },
      itemStyle: {
        color,
      },
      detail: {
        fontSize: 12,
        color: '#fff',
        formatter: function (v) {
          return ((v * total) / 100).toFixed(0)
        },
      },
    },
  ]
  return (
    <ReactEChartsCore
      style={{
        width: '100%',
        height: '100%',
      }}
      echarts={echarts}
      option={{
        series: seriesOption,
      }}
    />
  )
}

export default Progress
