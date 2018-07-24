class Calculator {
    constructor(container_id) {
        // это надо удалить
        this.resultOperation = this.resultOperation.bind(this);

        this.num1 = new Input({
            event: {type: 'oninput', callback: this.resultOperation},
            class: 'form-control',
            type: 'number',
            placeholder: 'input number a'
        });

        // rename this method

        this.num2 = new Input({
            event: {type: 'oninput', callback: this.resultOperation},
            class: 'form-control',
            type: 'number',
            placeholder: 'input number b'
        });
        this.res = new Input({class: 'form-control', type: 'number'});
        this.op = new Select({
            event: {type: 'onchange', callback: this.resultOperation},
            class: 'form-control',
            placeholder: 'select operations'
        });
        this.resOp = 0;

        this.container = document.getElementById(container_id);

        this.render();
    }

    resultOperation() {
        console.log(this.validator());
        if (this.validator()) {

            switch (this.op.getVal()) {
                case '+':
                    this.resOp = this.num1.getVal() + this.num2.getVal();
                    break;
                case '-':
                    this.resOp = this.num1.getVal() - this.num2.getVal();
                    break;
                case '/':
                    this.resOp = this.num1.getVal() / this.num2.getVal();
                    break;
                case '*':
                    this.resOp = this.num1.getVal() * this.num2.getVal();
                    break;
            }
            this.res.setVal(this.resOp);
        } else {
            this.res.setVal('');
        }

    }

    validator() {
        console.log(this.op.getVal());
        if (this.num1.getVal() && this.num2.getVal() && this.op.getVal()) {
            return true;
        }
        return false;
    }

    render() {
        this.container.appendChild(this.num1.render());
        this.container.appendChild(this.op.render());
        this.container.appendChild(this.num2.render());
        this.container.appendChild(this.res.render());
    }
}

class Form {
    constructor(params) {
        this.id = params.id;
        this.class = params.class;
        this.placeholder = params.placeholder;
    }

    setEvent(event) {
        if (event) {
            this.element[event.type] = event.callback;
        }
    }

    getVal() {
        var res = (+this.element.value);

        if (res) {
            return res;
        }

        return this.element.value;
    }

    setVal(v) {
        this.element.value = v;
    }
}

class Input extends Form {
    constructor(params) {
        super(params);

        this.type = params.type;
        this.element = document.createElement('input');
        this.setEvent(params.event);
    }

    render() {
        this.element.id = this.id ? this.id : '';
        this.element.className = this.class ? this.class : '';
        this.element.placeholder = this.placeholder ? this.placeholder : '';
        this.element.type = this.type ? this.type : '';
        return this.element;
    }
}

class Select extends Form {
    constructor(params) {
        super(params);
        this.operations = ['+', '-', '*', '/'];
        this.element = document.createElement('select');
        this.setEvent(params.event);
    }

    render() {
        this.element.id = this.id ? this.id : ''
        this.element.className = this.class ? this.class : '';

        for (var j in this.operations) {
            var option = document.createElement('option');
            option.value = this.operations[j];
            option.innerHTML = this.operations[j];

            this.element.appendChild(option);
        }
        return this.element;
    }
}

new Calculator('calculator');