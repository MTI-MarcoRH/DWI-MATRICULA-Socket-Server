export class Usuario
{
    
    public id: string;
    public nombre: string;
    public sala: string;

    constructor(id: string)
    {
        this.id = id;
        this.nombre = 'unknown';
        this.sala = 'undefined';
    };
}