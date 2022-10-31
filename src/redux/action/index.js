// For add item to cart
export const addCart =(product)=> {
    return (dispatch)=>{
       dispatch({
         type: "ADDITEM",
         payload: product
       }); 
    };
}
// For delete item to cart
// export const delCart= (product) =>{
//     return {
//         type:'DELITEM' , 
//         payload: product
//     }
// }