 import {Usuario} from './usuario';

 export class UsuariosLista
 {
    private lista: Usuario[] = [];

    constructor(){}

    //Agregar un usuario
    public agregar(usuario: Usuario)
    {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario; 
    }

    // Actualizar nombre
    public actualizarNombre(id:string, nombre: string)
    {
            for(let usuario of this.lista)
            {
                if(usuario.id === id)
                {
                    usuario.nombre = nombre;
                    break;
                }
            }

            console.log('===== Acutalizando usuario =====');
            console.log(this.lista);

    }

    public getLista()
    {
        return this.lista;
    }

    public getUsuario(id:string)
    {
        return this.lista.find( usuario => usuario.id === id);
    }

    // Obtener usuario por sala

    public getUsusariosEnSala(sala: string)
    {
        return this.lista.filter(usuario => usuario.sala === sala);
            
    }

    // Eliminar usuario

    public borrarUsuario(id: string)
    {
        const temp_Usuario = this.getUsuario(id);
        this.lista = this.lista.filter( usuario => { usuario.id !== id})

        console.log(this.lista);
        return temp_Usuario;
    }
 }