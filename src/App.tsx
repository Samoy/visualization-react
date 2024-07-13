import './css/App.scss'
import Header from '@/layouts/Header'
import { FullScreenContainer } from '@jiaminghi/data-view-react'
import TopRank from '@/layouts/TopRank'
import Revenue from './layouts/Revenue'
import Trend from './layouts/Trend'
import Balance from './layouts/Balance'

function App() {
  return (
    <FullScreenContainer>
      <Header></Header>
      <main className="main">
        <div className="top-left">
          <TopRank></TopRank>
        </div>
        <div className="top-middle">
          <Revenue></Revenue>
          <Trend></Trend>
        </div>
        <div className="top-right">
          <Balance></Balance>
        </div>
      </main>
    </FullScreenContainer>
  )
}

export default App
