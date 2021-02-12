import React from 'react'

import {ChatContext} from '../context/ChatProvider'

const Agregar = () => {

    const {agregarMensajes, usuario} = React.useContext(ChatContext)
    const [mensaje, setMensaje] = React.useState('')

    const agregar = (e)=> {
        e.preventDefault()
        if(!mensaje.trim()){
            console.log('Esta vacio...')
            return
        }
        agregarMensajes(usuario.uid, mensaje)
        setMensaje('')
    }

    return (
        <form
            className="fixed-bottom input-group p-2 bg-dark"
            onSubmit={agregar} >
            <input
                type="text"
                className="form-control"
                value={mensaje}
                onChange={e => setMensaje(e.target.value)} />
            <div className="input-group-append">
                <button
                    className="btn btn-info"
                    type="submit"
                >
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Agregar
