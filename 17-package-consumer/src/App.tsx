import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {MyLabel} from "jrb-my-test-components";

import './App.css'

function App() {

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">

                <MyLabel label="Hello World!" allCaps color="text-primary"/>

            </div>
        </>
    )
}

export default App
