import React from 'react'
import Agregar from './Agregar'

import {ChatContext} from '../context/ChatProvider'

const Chat = () => {

    const {mensajes, usuario} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    React.useEffect(()=> {
        /* console.log(refZonaChat) */
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    }, )

    return (
        <div
            className="mt-0 px-2"
            style={{height: '84vh', overflowY: 'scroll'}}
            ref={refZonaChat}
        >
            {
                mensajes.map((item, index) => (
                    usuario.uid === item.uid ? (
                        <div className="d-flex justify-content-end mb-2">
                            <span className="badge badge-pill badge-primary" key={index}>
                                {item.texto}
                            </span>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start mb-2">
                            <span className="badge badge-pill badge-secondary" key={index}>
                                {item.texto}
                            </span>
                        </div>
                    )
                ))
            }
            <Agregar/>
        </div>
    )
}

export default Chat
