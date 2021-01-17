class Component{
    constructor(app){
        this.app = app
    }
}

class ShoppingCart extends Component{
    constructor(app){
        super(app)
        this.render()
    }
    render(){
        const cartEl = this.createRootElement('section', 'cart')
        cartEl.innerHTML = `<h2>Total: \$${0}</h2><button>OrderNow!</button>`
        
    }
}

class Shop{
    constructor(){
        this.render()
    }
    render(){
        this.cart = new ShoppingCart('app')
    }
}

class App{
    static cart
    static init(){
        const shop = new Shop()
        this.cart = shop.cart
    }
}

App.init()