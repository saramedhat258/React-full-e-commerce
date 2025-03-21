import axios from "axios"
const baseUrl='http://localhost:3000'

export const fetchproducts=(setState)=>{
    axios.get(`${baseUrl}/products`)
    .then(data=>setState(data?.data?.data?.docs))
    .catch(err=>console.log(err))
}
export const fetchOneProduct=(setState,id)=>{
    axios.get(`${baseUrl}/products/${id}`)
    .then(data=>setState(data?.data?.data?.doc))
    .catch(err=>console.log(err))
}

export const fetchCategories=(setState)=>{
    axios.get(`${baseUrl}/categories`)
    .then(res=>setState(res?.data?.data?.docs))
    .catch(err=>console.log(err))
}