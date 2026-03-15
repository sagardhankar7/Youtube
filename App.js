import React from 'react'
import ReactDOM from "react-dom/client"
import Header from './component/Header'
import Body from './component/Body'
import { Provider } from 'react-redux'
import store from './utils/store'

const App = () => {
  return (
    // <div className='font-bold'>Youtube</div>
    // Before providing store to our app, create slice and store, install redux toolkit and react-redux
    <Provider store={store}>
        <div>
            <Header />
            <Body />
        </div>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)