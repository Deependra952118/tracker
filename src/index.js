import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {SpeechProvider} from '@speechly/react-client'
import {Provider} from './context/context'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="fd678598-5ad2-460f-886e-2c78ea40f233" language="en-US">
    <Provider>
        <App/>
    </Provider>
    </SpeechProvider>,
document.getElementById('root')
)