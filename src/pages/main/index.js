import React, {Component} from 'react';
import api, {apiLocal} from '../../services/api';
import {Link} from 'react-router-dom'
import './styles.css';


export default class Main extends Component {

    // states - armazenar variaveis
    // metodo render pode depender dessas variaveis
    state = {
        products: [],
        page: 1,
        productInfo: [],
    };

    //Ciclo de vida
    //componentDidMount: metodo excutado logo que o component é carregado

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        
        try {
            
            const response = await apiLocal.get(`/products?page=${page}`);
            //const response = await api.get(`/products?page=${page}`);
            console.log(response);
            //let combined = { responseLocal, response };
            //console.log(combined);
            const {docs, ...productInfo} = response.data;
            this.setState({products: docs, productInfo, page});

        } catch (error) {
            console.log(error);
        }
    }

    prevPage = () => {
        const {page} = this.state;
        if(page === 1)
            return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const {page, productInfo} = this.state;
        if(page === productInfo.pages)
            return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);

    }


    render() {

        const {products, page, productInfo} = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )   
    }
}