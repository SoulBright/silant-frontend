import axios from "../axiosConfig";

export default class ReclamationService {
    static async getAll() {
        const response = await axios.get('/reclamation/')
        return response
    }
    static async getWithFilters(props) {
        const response = await axios.get('/reclamation/', {params: props})
        return response
    }
}
