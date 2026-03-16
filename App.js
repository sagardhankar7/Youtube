import React from 'react'
import ReactDOM from "react-dom/client"
import Header from './component/Header'
import Body from './component/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Main from './component/Main'
import Watch from './component/Watch'

const bodyRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
        {
            path: "/",
            element: <Main />
        },
        {
            path: "watch",
            element: <Watch />
        }
    ]
}])

const App = () => {
  return (
    // <div className='font-bold'>Youtube</div>
    // Before providing store to our app, create slice and store, install redux toolkit and react-redux
    <Provider store={store}>
        <div>
            <Header />
            <RouterProvider router={bodyRouter} />
        </div>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)