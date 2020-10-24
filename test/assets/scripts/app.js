class Product{
    constructor(title, image, desc, price){
        this.title = title
        this.image = image
        this.description = desc
        this.price = price
    }
}
class ShoppintCart{
    items = []
    set cartItems(value){
        this.items = value
        
    }
}