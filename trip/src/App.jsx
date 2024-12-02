import './style/App.css'
import Head from './Components/Head'
import Form from './Components/Form'
import PackingList from './Components/PackingList'
import Stats from './Components/Stats'

const App = () => {
  return (
    <div className='app'>
      <Head/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  )
}

export default App
