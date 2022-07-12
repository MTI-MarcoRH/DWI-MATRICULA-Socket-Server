import socketIO, { Socket } from 'socket.io';

export const desconectar = (cliente:Socket) =>{
    cliente.on('disconnect', ()=>
    {
        console.log('Cliente Desconectado');
    })
}

export const mensaje= (cliente:Socket, io: socketIO.Server)=>
{
    cliente.on('mensaje', (payload:{ de:string, cuerpo:string}) => {
        console.log('Mensaje recibido.', payload);

        io.emit('mensaje-nuevo', payload);
    })

    
}


/* Configurando al usuario que se esta logeando */
export const configurarUsuario= (cliente:Socket, io: socketIO.Server)=>
{
    cliente.on('configurar-usuario', (payload:{ nombre:string }) => {
        console.log('Bienvenido usuario.', payload.nombre);

    })

    
}