import { Provider } from "react-redux"
import { Body } from "./Components/Body"

import appStore from "./utils/reduxStore/appstore"
// import './Stylesheets/index.css'

function App() {


  return (
    <>
    <Provider store={appStore}>
    <Body/>
    </Provider>
    
    </>
  )
}

export default App
