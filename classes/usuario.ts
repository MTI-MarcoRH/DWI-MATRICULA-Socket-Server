export class Usuario
{
    
    public id: string;
    public nombre: string;
    public sala: string;
    public color: string;

    constructor(id: string)
    {
        this.id = id;
        this.nombre = 'unknown';
        this.sala = 'undefined';
        this.color = 'black';
        
    };
}