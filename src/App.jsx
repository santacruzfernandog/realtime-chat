import React from 'react'
import Chat from './components/Chat'
import Navbar from './components/Navbar'

import {ChatContext} from './context/ChatProvider'

const App = () => {

    const {usuario} = React.useContext(ChatContext)

    return usuario !== null ? (
        <div>
            <Navbar/>
            {
                usuario.estado ? (
                    <Chat/>
                ) : (
                    <h3 className="text-center mt-5">Debes iniciar sesion</h3>
                )
            }
        </div>
    ) : (
        <div>
            <span>Cargando...</span>
            <div class="spinner-grow" role="status">
            </div>
        </div>
    )
}

export default App
