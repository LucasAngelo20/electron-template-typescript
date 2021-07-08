import { GlobalStyle } from './styles/GlobalStyle'

import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <Dashboard />
      <GlobalStyle />
    </div>
  )
}
