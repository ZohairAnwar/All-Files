class calcu {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "SINGTIFIC CALCULATOR"
    // console.log(displayName);
    static calculator(a,b) {
        const add = a + b;
        console.log("ADDTION = " +add);
        const sub = a - b;
        console.log("SUBRACTION = " +sub);
        const multi = a* b;
        console.log("MULTIPLICATION = " +multi);
        const div = a/b
        console.log("DIVISION = " +div);
        const root = Math.sqrt(a , b)
        console.log("SQUARE ROOT =" +root);
        const ht = Math.hypot(a , b)
        console.log("HYPOTENOUS = " +ht);
        const lg = Math.log(a, b)
        console.log("LOG = " +lg);
        const sn = Math.sin(a , b)
        console.log("SIN = " +sn);
        const cs = Math.cos(a , b)
        console.log("COS = " +cs);
        const tn = Math.tan(a, b)
        console.log("TAN = " +tn);


    //  return Math.hypot(dx , dy);
    }
}

//  const p1 = new calcu (6,8);
//  const p2 = new calcu (15,10);

calcu.calculator(15,25)
