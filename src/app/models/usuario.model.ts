// Modelo para las peticiones del backend
// Realizado por: Jose Acevedo
export class Usuario{

    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public _id?: string
    ){}

}