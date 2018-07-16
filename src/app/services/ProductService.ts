import { of, Observable } from 'rxjs';
import { Product } from '../product/product';

/**
 * Servico responsavel pela gestao dos Produtos.
 * Armazena os registros em LocalStorage.
 * Cada produto é armazenado indexado pelo seu id.
 * Existe uma lista auxiliar no LocalStorage para faciliar a busca.
 *
 * @author Bruno Cechet <brunocechet@gmail.com>
 * @since 25/07/2018
 */
export class ProductService {
    static PRODUCTS_IDS: string = 'productsIds';

    /**
     * Retorna uma lista com todos os produtos salvos no LocalStorage.
     * Utiliza a lista auxiliar de ids.
     *
     * @return Observable<Array<Product>>
     */
    static getProducts() {
        // array com os ids dos produtos cadastrados
        const productIds = localStorage.getItem(this.PRODUCTS_IDS);

        if (productIds) {
            return of(JSON.parse(productIds).map(id => this.getProduct(id)));
        }

        return of(Array<Product>());
    }


    /**
     * Busca um produto armazenado em LocalStorage
     *
     * @param id Id do produto desejado
     * @return Observable<Product> Produto desejado
     */
    static getProduct(id: string): Observable<Product> {
        const jsonProduct = localStorage.getItem(id);

        if (jsonProduct) {
            return of(JSON.parse(jsonProduct));
        }

        return null;
    }

    /**
     * Salva um novo produto ao LocalStorage, indexado pelo seu id unico
     *
     * @param product Produto a ser salvo
     * @return Verdadeiro caso tenha sido salvo com sucesso
     */
    static saveProduct(product: Product):boolean {
        try{
            localStorage.setItem(product.id, JSON.stringify(product));
            return true;
        }catch(e){
            console.error('Erro ao salvar produto: ', e);
            return false;
        }

    }

    /**
     * Adiciona um novo id a lista auxiliar que controla a existencia de Produtos no LocalStorage
     *
     * @param id Novo id a set adicionado
     * @return boolean Verdadeiro caso tenha sido adicionado com sucesso
     */
    static addId(id: string): boolean {
        try {
            let productIds: Array<string> = JSON.parse(
                localStorage.getItem(this.PRODUCTS_IDS)
            );
            productIds.push(id);
            localStorage.setItem(this.PRODUCTS_IDS, JSON.stringify(productIds));
            return true;
        } catch (e) {
            console.error('Erro ao adicionar um novo id de produto: ', e);
            return false;
        }
    }

    /**
     * Remove um determinado id da lista auxiliar que controla a existencia de Produtos no LocalStorage
     *
     * @param id Id a ser removido
     * @return boolean Verdadeiro caso tenha sido removido com sucesso
     */
    static deleteId(id: string): boolean {
        try {
            let productIds: Array<string> = JSON.parse(
                localStorage.getItem(this.PRODUCTS_IDS)
            );
            productIds = productIds.filter( (auxId) => auxId !==  id );
            localStorage.setItem(this.PRODUCTS_IDS, JSON.stringify(productIds));
            return true;
        } catch (e) {
            console.error('Erro ao remover id de produto da lista: ', e);
            return false;
        }
    }

}
