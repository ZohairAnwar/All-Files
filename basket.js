class _Product {
    constructor(_name , _price) {
        this._name =  _name;
        this._price = _price;
    
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
} 

class basket {
    constructor() {
        this.product = [];
    }

    addproduct(amount , product) {
        console.log(this.product.push(...Array(amount).fill(product)) );
        
    }
    
    get CalculateTotal() 
    {
        return this.product.map(function(product){
          return product.price
        })

        .reduce(function(a , b) {
         return a+b;        
        },0);
    }

    get printshoppinginfo() {
        let total = this.CalculateTotal;
        console.log("One has to pay in total = " + total); 

    }
}

const rusk = new _Product("Rusk", 50);
const bread = new _Product('Bread',65);
const eggs = new _Product("Eggs", 170)
const Basket = new basket();
Basket.addproduct( 2 , rusk);
Basket.addproduct( 3 , bread )
Basket.addproduct( 1 , eggs )
Basket.printshoppinginfo;
console.log(Basket);



