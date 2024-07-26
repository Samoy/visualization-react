import './css/App.scss'
import Header from '@/layouts/Header'
import { FullScreenContainer } from '@jiaminghi/data-view-react'
import TopRank from '@/layouts/TopRank'
import Revenue from './layouts/Revenue'
import Trend from './layouts/Trend'
import Balance from './layouts/Balance'
import Recent from '@/layouts/Recent'
import ConsumeCategory from '@/layouts/ConsumeCategory'
import Member from '@/layouts/Member'
import PayType from '@/layouts/PayType'

function App() {
  return (
    <FullScreenContainer>
      <Header></Header>
      <main className="main">
        <div className={'left'}>
          <div className="top-left">
            <TopRank></TopRank>
          </div>
          <div className={'bottom-left'}>
            <ConsumeCategory></ConsumeCategory>
          </div>
        </div>
        <div className={'center'}>
          <div className="top-center">
            <Revenue></Revenue>
          </div>
          <div className={'middle-center'}>
            <Trend></Trend>
          </div>
          <div className={'bottom-center'}>
            <Member></Member>
          </div>
        </div>
        <div className={'right'}>
          <div className="top-right">
            <Balance></Balance>
          </div>
          <div className={'middle-right'}>
            <Recent></Recent>
          </div>
          <div className={'bottom-right'}>
            <PayType></PayType>
          </div>
        </div>
      </main>
    </FullScreenContainer>
  )
}

export default App
