import { BorderBox9 } from '@jiaminghi/data-view-react'
import styles from './index.module.scss'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import { PieChart, PieSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components'

echarts.use([PieChart, CanvasRenderer, GridComponent, LegendComponent, TooltipComponent])

const data = [
  {
    name: '现金',
    value: 100,
  },
  {
    name: '微信',
    value: 135,
  },
  {
    name: '支付宝',
    value: 258,
  },
  {
    name: '银行卡',
    value: 80,
  },
  {
    name: '其他',
    value: 121,
  },
]

function PayType() {
  return (
    <BorderBox9>
      <div className={styles.container}>
        <div>支付方式</div>
        <div style={{ width: '100%', height: 'calc(100% - 24px)' }}>
          <ReactEChartsCore
            style={{ width: '100%', height: '100%' }}
            echarts={echarts}
            option={{
              color: ['#e30d6d', '#06AD56', '#1677ff', '#f0b03d', '#00aafe'],
              tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)',
                borderWidth: 0,
              } satisfies TooltipComponentOption,
              legend: {
                bottom: 'bottom',
                textStyle: {
                  color: '#ccc',
                },
              } satisfies LegendComponentOption,
              series: [
                {
                  name: '支付方式',
                  type: 'pie',
                  radius: '50%',
                  data: data,
                  label: {
                    color: '#ccc',
                  },
                },
              ] satisfies PieSeriesOption[],
            }}
          />
        </div>
      </div>
    </BorderBox9>
  )
}

export default PayType
