class product{
    constructor(title, image, desc, price){
        this.title = title
        this.imageUrl = image
        this.description = desc
        this.price = price
    }
}

class ProductItem{
    constructor(product){
        this.product = product
    }
    addToCart(){
        console.log('adding to cart...')
        console.log(this.product)
    }

    render(){
        const prodEl = document.createElement('li')
        prodEl.className = 'product-item'
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.description}</h3>
                <p>${this.product.price}</p>
            </div>
        `
        const addCartButton = prodEl.querySelector('button')
        addCartButton.addEventListener('click', this.addToCart.bind(this))
        return prodEl
    }
}

class ProductList{
    products = [
        new Product('item1', 'desc1', '')
    ]
}