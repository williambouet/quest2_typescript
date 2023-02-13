import  assert  from  'assert';
import { clear } from 'console';

class BankCustomer
{
    private _name: string;
    private _pin: string; //permet d'avoir le 0 en première position, le type number supprimera le 0 sinon

    constructor(name:  string, pin:  string) {
        this._name = name;
        this._pin = pin;
    }

    public getName(): string
    {
        return this._name;
    }

    public verifyPinInput(pin: string): boolean
    {
        return pin === this._pin ? true : false;
    }

}

// Tests

const customer = new BankCustomer('John Doe', '3579');

console.log(typeof customer.getName);
console.log(typeof customer.verifyPinInput);
console.log(customer.getName());
console.log(customer.verifyPinInput('3579'));

assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));