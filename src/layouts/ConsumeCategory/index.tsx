import Card from '@/components/Card.tsx'
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

const categories = [
  {
    name: '交通',
    value: 500,
  },
  {
    name: '教育',
    value: 200,
  },
  {
    name: '餐饮',
    value: 1200,
  },
  {
    name: '百货',
    value: 400,
  },
  {
    name: '医疗',
    value: 1000,
  },
  {
    name: '房贷',
    value: 3000,
  },
  {
    name: '娱乐',
    value: 300,
  },
  {
    name: '缴费',
    value: 800,
  },
]

function ConsumeCategory() {
  return (
    <Card>
      <div>消费类别</div>
      <div style={{ width: '100%', height: 'calc(100% - 24px)' }}>
        <ReactEChartsCore
          style={{ width: '100%', height: '100%' }}
          echarts={echarts}
          option={{
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
                name: '消费类别',
                type: 'pie',
                radius: '50%',
                data: categories,
                label: {
                  color: '#ccc',
                },
              },
            ] satisfies PieSeriesOption[],
          }}
        />
      </div>
    </Card>
  )
}

export default ConsumeCategory
