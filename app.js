const data = [{
    title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price:109.95,
    category: "men's clothing",
    image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
},{
    title:"Mens Casual Premium Slim Fit T-Shirts ",
    price:22.3,
    category: "men's clothing",
    image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"

},
{
    title:"Mens Cotton Jacket",
    price:55.99,
    category: "men's clothing",
    image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
},{
    title:	"Mens Casual Slim Fit",
    price:15.99,
    category: "men's clothing",
    image:	"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"

},

]
const products = productIterator(data)

nextProduct()

// - Next Event
document.getElementById('next').addEventListener('click', nextProduct);

// - Next Profile Display
function nextProduct(){
    const currentProduct = products.next().value

     if(currentProduct !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProduct.title}</li>
        <li class="list-group-item">Age: ${currentProduct.price}</li>
        <li class="list-group-item">Location: ${currentProduct.category}</li>
      </ul>
    `;
       document.getElementById('imageDisplay').innerHTML = `<img src="${currentProduct.image}">`;
}else {
    
    window.location.reload();
  }
}


// - Product Iterator
function productIterator(products) {
    let nextIndex=0
    return{
        next:function(){
            return nextIndex < products.length?
            {value: products[nextIndex++],done:false}:
            {done:true}
        }
    }
}