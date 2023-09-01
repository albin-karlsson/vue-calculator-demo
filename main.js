var app = new Vue({
  el: "#app",
  data: {
    currentNumber: 0,
    previousNumber: 0,
    setOperator: "",
    isConstructingNumber: false,
  },
  methods: {
    constructNumber(number) {
      this.isConstructingNumber = true;

      this.currentNumber = Number(String(this.currentNumber) + String(number));
    },
    multiply() {
      this.resetCurrentNumber("*");
    },
    subtract() {
      this.resetCurrentNumber("-");
    },
    add() {
      this.resetCurrentNumber("+");
    },
    divide() {
      this.resetCurrentNumber("/");
    },
    resetCurrentNumber(operator) {
      this.isConstructingNumber = false;

      if (this.setOperator === "") {
        this.setOperator = operator;
      }

      switch (this.setOperator) {
        case "*": {
          if (this.previousNumber === 0) {
            this.previousNumber = 1;
          }
          this.previousNumber *= this.currentNumber;
          break;
        }
        case "-": {
          if (this.previousNumber === 0) {
            this.previousNumber += this.currentNumber * 2;
          }
          this.previousNumber -= this.currentNumber;
          break;
        }
        case "+": {
          this.previousNumber += this.currentNumber;
          break;
        }
        case "/": {
          if (this.currentNumber === 0) {
            this.previousNumber = "ERROR";
          }
          if (this.previousNumber === 0) {
            this.previousNumber = this.currentNumber * this.currentNumber;
          }
          this.previousNumber /= this.currentNumber;

          break;
        }
      }

      this.setOperator = operator;

      this.currentNumber = 0;
    },
    calculateResult() {
      this.resetCurrentNumber();
    },
    clear() {
      this.currentNumber = 0;
      this.previousNumber = 0;
      this.setOperator = "";
      this.isConstructingNumber = false;
    },
  },
});
