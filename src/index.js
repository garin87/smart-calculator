class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue + "";
  }

  add(number) {
    let strNumber = String(number);
    this.initialValue += "+" + strNumber;
    return this;
  }
  
  subtract(number) {
    let strNumber = String(number);
    this.initialValue +="-" + strNumber;
    return this;
  }

  multiply(number) {
    let strNumber = String(number);
    this.initialValue +="*" + strNumber;
    return this;
  }

  devide(number) {
    let strNumber = String(number);
    this.initialValue += "/" + strNumber;
    return this;
  }

  pow(number) {
    let strNumber = String(number);
     this.initialValue += "**" + strNumber;
    return this;
  }
  
  valueOf(){
    return eval(this.initialValue);
  }
}

module.exports = SmartCalculator;
