import api, {apiLocal} from './api'

class ApiAccessData {
   
    async getAll(page = 1) {
        
        return await apiLocal.get(`products?page=${page}`); 
        
    }

    async create(data) {
        return await apiLocal.post('/products', data); 
    }
}

export default new ApiAccessData();