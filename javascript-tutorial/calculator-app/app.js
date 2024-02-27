class Calculator {
    constructor() {
        this.screen = document.getElementById('answer');
        this.buttons = document.querySelectorAll('.calculator button');
        this.equation = '';
        this.result = '';

        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.handleButtonClick(button.textContent);
            });
        });

        document.addEventListener('keydown', event => {
            const key = event.key;
            if (this.isValidKey(key)) {
                this.handleButtonClick(key);
            }
            if (key === 'Enter') {
                this.calculate();
            }
        });
    }

    isValidKey(key) {
        const validKeys = /[0-9%/*\-+=.\(\)CE]/;
        return validKeys.test(key);
    }

    handleButtonClick(value) {
        switch (value) {
            case '=':
                this.calculate();
                break;
            case 'C':
                this.clearScreen();
                break;
            case 'CE':
                this.clearEntry();
                break;
            default:
                this.addToScreen(value);
                break;
        }
    }

    addToScreen(value) {
        this.equation += value;
        this.screen.value = this.equation;
    }

    calculate() {
        try {
            this.result = eval(this.equation);
            this.screen.value = this.result;
        } catch (error) {
            this.screen.value = 'Error';
        }
    }

    clearScreen() {
        this.equation = '';
        this.screen.value = '';
    }

    clearEntry() {
        this.equation = this.equation.slice(0, -1);
        this.screen.value = this.equation;
    }
}

const calculator = new Calculator();
