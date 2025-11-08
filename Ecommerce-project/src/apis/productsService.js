import axiosClient from "./axiosClient";

const getProduct=async(query)=>{
    const {sortType,page,limit}=query
    const queryLimit=limit === 'all' ? '' : `&limit=${limit}`
    const res=await axiosClient.get(`/product?sortType=${sortType}&page=${page}&${queryLimit}`);
    return res.data;
}
const getProductDetail=async(id)=>{
    return await axiosClient.get(`/product/${id}`);
}
const getRelatedProduct=async(id)=>{
    const res= await axiosClient.get(`/related-products/${id}`);
    return res.data.relatedProducts;
}
export{
    getProduct,getProductDetail,getRelatedProduct
}