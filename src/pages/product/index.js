import React, { Component } from 'react'
import api, {apiLocal} from '../../services/api'
import './styles.css';

export default class Product extends Component {
    
    state = {
        product: [],
        visible: false
    }

    async componentDidMount() {
        try {
            console.log(this.props);
            const {id} = this.props.match.params;
            const response = await apiLocal.get(`/products/${id}`);
            this.setState({product: response.data, visible: true})
        } catch (error) {
            console.log(error);
        }
        
        
    }

    
    render() {
        const {product, visible} = this.state;
        if (visible){
            return (
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>URL: <a href={product.url}>{product.url}</a></p>
                </div>
            )
        }

        return null; 
                
    }
}