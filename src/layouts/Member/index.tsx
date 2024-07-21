import Card from '@/components/Card.tsx'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import { LineChart, BarChart, LineSeriesOption, BarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  LegendComponentOption,
  TooltipComponentOption,
  SingleAxisComponentOption,
  GridComponentOption,
} from 'echarts/components'

echarts.use([LineChart, BarChart, CanvasRenderer, GridComponent, LegendComponent, TooltipComponent])

type Data = {
  income: number
  expenditure: number
}

const manData: Data[] = [],
  womenData: Data[] = []

// 随机生成模拟数据
for (let i = 0; i < 12; i++) {
  manData.push({
    // 收入：10000~14000之间
    income: Math.round(Math.random() * 4000 + 10000),
    // 支出：1000~5000之间
    expenditure: Math.round(Math.random() * 5000 + 1000),
  })
  womenData.push({
    // 收入：8000~12000之间
    income: Math.round(Math.random() * 4000 + 8000),
    // 支出：1000~5000之间
    expenditure: Math.round(Math.random() * 5000 + 1000),
  })
}

const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

function Member() {
  return (
    <Card>
      <div>家庭成员收支记录</div>
      <div style={{ width: '100%', height: 'calc(100% - 24px)' }}>
        <ReactEChartsCore
          style={{ width: '100%', height: '100%' }}
          echarts={echarts}
          option={{
            legend: {
              textStyle: {
                color: '#ccc',
              },
            } satisfies LegendComponentOption,
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
              },
            } satisfies TooltipComponentOption,
            grid: {
              bottom: '5%',
              left: '5%',
              right: '5%',
              containLabel: true,
            } satisfies GridComponentOption,
            xAxis: {
              type: 'category',
              data: months,
              axisLabel: {
                color: '#ccc',
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
            } satisfies SingleAxisComponentOption,
            yAxis: [
              {
                type: 'value',
                splitLine: {
                  show: false,
                },
                axisLabel: {
                  color: '#ccc',
                },
                nameTextStyle: {
                  color: '#fff',
                },
                name: '收入',
                max: 15000,
                min: 0,
              },
              {
                type: 'value',
                splitLine: {
                  show: false,
                },
                axisLabel: {
                  color: '#ccc',
                },
                nameTextStyle: {
                  color: '#fff',
                },
                name: '支出',
                max: 15000,
                min: 0,
              },
            ] satisfies SingleAxisComponentOption[],
            series: [
              {
                name: '男主人收入',
                type: 'bar',
                data: manData.map((item) => item.income),
                yAxisIndex: 0,
              } satisfies BarSeriesOption,
              {
                name: '女主人收入',
                type: 'bar',
                data: womenData.map((item) => item.income),
                yAxisIndex: 0,
              } satisfies BarSeriesOption,
              {
                name: '男主人支出',
                type: 'line',
                data: manData.map((item) => item.expenditure),
                yAxisIndex: 1,
                symbol: 'circle',
              } satisfies LineSeriesOption,
              {
                name: '女主人支出',
                type: 'line',
                symbol: 'circle',
                data: womenData.map((item) => item.expenditure),
                yAxisIndex: 1,
              } satisfies LineSeriesOption,
            ],
          }}
        />
      </div>
    </Card>
  )
}

export default Member
