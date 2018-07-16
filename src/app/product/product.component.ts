import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';

import { Product } from './product';
import { ProductService } from '../services/ProductService';

@Component({
    templateUrl: './product.component.html',
    providers: [MessageService]
})
export class ProductComponent implements OnInit {
    produto$: Observable<Product>;
    options: { unidadesMedida: Array<object> };
    form: FormGroup;


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ) {
        // opcoes gerais para selacao na tela de criacao/edicao
        this.options = {
            unidadesMedida: [
                { label: 'Litro', value: 'litro' },
                { label: 'Quilograma', value: 'quilograma' },
                { label: 'Unidade', value: 'unidade' }
            ]
        };

    }

    /**
     * Busca pelo produto caso exista o Id. Caso contrario, oferece um objeto novo para criacao.
     */
    ngOnInit(): void {
        this.produto$ = this.activatedRoute.paramMap.pipe(
            switchMap((params: ParamMap) => {
                if (params.get('id') && params.get('id') !== 'new') {
                    const produto = ProductService.getProduct(params.get('id'));

                    if(produto){
                        return produto;
                    }
                    // produto nao encontrado, redirecionada para a criacao de um novo
                    else{
                        this.router.navigate(['product/new']);
                    }
                }
                return of(new Product());
            })
        );
    }

    save(){
        // this.produto$
        //     .toPromise()
        //     .then(produto => {
        //         if(ProductService.saveProduct(produto)){
        //             this.messageService.add({severity:'success', summary:'Sucesso!', detail:'Produto salvo com sucesso!'});
        //         }else{
        //             this.messageService.add({severity:'error', summary:'Erro!', detail:'Erro inesperado ao salvar produto.'});
        //         }
        //     });
        this.produto$.subscribe({
            next: produto => {
                if(ProductService.saveProduct(produto)){
                    this.messageService.add({severity:'success', summary:'Sucesso!', detail:'Produto salvo com sucesso!'});
                }else{
                    this.messageService.add({severity:'error', summary:'Erro!', detail:'Erro inesperado ao salvar produto.'});
                }
            }
        })

    }

    cancel(){
        this.router.navigate(['products']);
    }

}
