import './css/App.scss'
import Header from '@/layouts/Header'
import { FullScreenContainer } from '@jiaminghi/data-view-react'
import TopRank from '@/layouts/TopRank'
import Revenue from './layouts/Revenue'
import Trend from './layouts/Trend'

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
        <div className="top-right"></div>
      </main>
    </FullScreenContainer>
  )
}

export default App
