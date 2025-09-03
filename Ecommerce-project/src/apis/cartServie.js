import axiosClient from "./axiosClient";
const Addcart=async(data)=>{
    return await axiosClient.post('/cart',data)
};
const getCart=async(userId)=>{
    return await axiosClient.get(`/cart/${userId}`);
};
const deleteItem=async(data)=>{
    return await axiosClient.delete(`/cart/deleteItem`,{data});
};
const deleteCart=async(data)=>{
    return await axiosClient.delete(`/cart/delete`,{data});
};
export{
    Addcart,getCart,deleteItem,deleteCart
};