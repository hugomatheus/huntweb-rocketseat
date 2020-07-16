import React, { Component } from 'react'
import api, {apiLocal} from '../../services/api'
import apiAccessData from '../../services/ApiAccessData'
import './styles.css'


export default class ProductAdd extends Component {
    constructor(props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
    
        this.state = {
            message: '',
            product: {
                title: '',
                description: '',
                url: ''
            }
            
        }
      }
      
    

    onChangeInput = (e) => {
        
        const {product} = this.state;
        const {name, value} = e.target;
        
        Object.keys(product).map((key, index) => {
            if(key === name)
                product[key] = value;
        });
        this.setState({product});
    }

    addProduct = async () => {
          const {product} = this.state;
          try {
              //const response = await apiLocal.post('/products', product);
              
              // Alternativa: foi criado uma classe ApiAccessData onde foi criado metodos para o acesso do endpoint da api
              const response = await apiAccessData.create(product);
              console.log(response);
              this.cleanForm();
          } catch (error) {
              console.log(error.response);
              this.setMessage(error.response);
          }  
    }

    setMessage = (response) => {
        const {message} = response.data.details;
        console.log(message);
        this.setState({message});
        
    }

    cleanForm = () => {
        this.setState({product: {title: '',description: '',url: ''}});
    }

    

    render() {

        const {product, message} = this.state;
        return (
            <div className="product-create">
                <h1>Product</h1>
                <div className="message">
                    <strong>{message}</strong>
                </div>
                <div className="field">
                    <label htmlFor="title">Titulo</label>
                    <input type="text" placeholder="Infome o titulo do produto" id="title" value={product.title} name="title" onChange={this.onChangeInput}></input>
                </div>
                <div className="field">
                    <label htmlFor="description">Descrição</label>
                    <input type="text" id="description" placeholder="Infome a descrição do produto" value={product.description} name="description" onChange={this.onChangeInput}></input>
                </div>
                <div className="field">
                    <label htmlFor="url">URL</label>
                    <input type="url" id="url" placeholder="Informe a URL do produto" value={product.url} name="url" onChange={this.onChangeInput}></input>
                </div>
                <div className="actions">
                    <button onClick={this.addProduct}>Adicionar</button>
                </div>
            </div>
        )
    }
}