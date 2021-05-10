import { Pais } from "./pais";

export class Producto {
    codigo: number;
    descripcion: string;
    precio: number;
    stock: number;
    pais: Pais;
    comestible: boolean;
}
