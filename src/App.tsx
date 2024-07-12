import './css/App.scss'
import Header from '@/layouts/Header'
import { FullScreenContainer } from '@jiaminghi/data-view-react'
import TopRank from '@/layouts/TopRank'
import Revenue from './layouts/Revenue'

function App() {
  return (
    <FullScreenContainer>
      <Header></Header>
      <main className="main">
        <TopRank></TopRank>
        <Revenue></Revenue>
      </main>
    </FullScreenContainer>
  )
}

export default App
