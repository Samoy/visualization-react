import Card from '@/components/Card'
import styles from './index.module.scss'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import { BarChart, BarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { LinearGradientObject } from 'echarts'

echarts.use([BarChart, CanvasRenderer, GridComponent, LegendComponent, TooltipComponent])

function Trend() {
  const barOptions: BarSeriesOption[] = [
    {
      name: '收入',
      type: 'bar',
      barWidth: 12,
      data: [120, 132, 101, 134, 90, 230, 210],
      itemStyle: {
        color: {
          x: 0,
          x2: 0,
          y: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#83bff6' },
            { offset: 1, color: '#188df0' },
          ],
          type: 'linear',
        } as LinearGradientObject,
        borderRadius: 6,
      },
    },
    {
      name: '支出',
      type: 'bar',
      barWidth: 12,
      data: [220, 182, 191, 234, 290, 330, 310],
      itemStyle: {
        color: {
          x: 0,
          x2: 0,
          y: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#eea403' },
            { offset: 1, color: '#ee8903' },
          ],
          type: 'linear',
        } as LinearGradientObject,
        borderRadius: 6,
      },
    },
  ]
  return (
    <Card width={'100%'} height={256} className={styles.container}>
      <div>收支趋势</div>
      <div style={{ width: '100%', height: 'calc(100% - 24px)' }}>
        <ReactEChartsCore
          style={{ width: '100%', height: '100%' }}
          echarts={echarts}
          option={{
            color: ['#3de7c9', '#eea403'],
            xAxis: [
              {
                type: 'category',
                data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                axisLabel: {
                  color: '#ccc',
                },
                axisLine: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
              },
            ],
            legend: {
              itemHeight: 10,
              borderRadius: 10,
              textStyle: {
                color: '#ffffff',
              },
            },
            gridLine: {
              show: false,
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
              },
            },
            grid: {
              top: '15%',
              bottom: '0%',
              left: '5%',
              right: '5%',
              containLabel: true,
            },
            yAxis: [
              {
                type: 'value',
                splitLine: { show: false },
                axisLabel: {
                  color: '#ccc',
                },
              },
            ],
            series: barOptions,
          }}
        ></ReactEChartsCore>
      </div>
    </Card>
  )
}

export default Trend
