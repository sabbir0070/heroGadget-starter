import { getStoredCart } from "../utilities/fakeDB";

export const productsAndCartData =async () =>{
    const productData = await fetch('products.json');
    const products = await productData.json();
    const savedCart= getStoredCart();
    let cartArray = [];  
    for(const id in savedCart){
        const foundProduct =products.find(product=>product.id === id);
        if(foundProduct){ 
            foundProduct.quantity = savedCart[id];
            // cartD.push(foundProduct)
         cartArray.push(foundProduct)
        }
     }
     return {cartArray,products};
}

// export default productsAndCartData;
