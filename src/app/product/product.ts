import { UUID } from 'angular2-uuid';
import { ProductService } from '../services/ProductService';
import { Component } from '@angular/core';

@Component({
    providers: [ProductService]
})
export class Product {
    id: string;
    nome: string;
    unidadeMedida: string;
    preco: number;
    perecivel: boolean;
    dtValidade: Date;
    dtFabricacao: Date;

    constructor(options: {
        id?: string,
        nome?: string,
        unidadeMedida?: string,
        preco?: number,
        perecivel?: boolean,
        dtValidade?: Date,
        dtFabricacao?: Date
    } = {}) {
        this.id = options.id || UUID.UUID();
        this.nome = options.nome || '';
        this.unidadeMedida = options.unidadeMedida || 'unidade';
        this.preco = options.preco || 0;
        this.perecivel = !!options.perecivel;
        this.dtValidade = options.dtValidade || new Date();
        this.dtFabricacao = options.dtFabricacao || new Date();
    }

    save(): boolean {
        return ProductService.saveProduct(this);
    }
}
