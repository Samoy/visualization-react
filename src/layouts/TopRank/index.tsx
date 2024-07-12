import { CapsuleChart } from '@jiaminghi/data-view-react'
import Card from '@/components/Card'

/**
 * 概览
 */
function TopRank() {
  const config = {
    data: [
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
    ].sort((a, b) => b.value - a.value),
    waitTime: 3000,
  }
  return (
    <Card width={'100%'} height={400}>
      <div>本月消费排行榜</div>
      <CapsuleChart config={config} style={{ width: '100%', height: '100%' }} />
    </Card>
  )
}

export default TopRank
