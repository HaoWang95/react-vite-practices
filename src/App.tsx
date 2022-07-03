import { ThemeProvider } from '@mui/system'
import Layout from './components/layout/Layout.component'
import theme from './theme/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
          <h1>App content in Layout</h1>
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default App
