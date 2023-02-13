"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
/*
Son constructeur devra prendre deux paramètres, le premier étant le nom du client, le second, le code secret de sa carte bleue.
Ces paramètres devront être stockés de façon à n'être pas visibles depuis le code appelant (privés, donc).
Une méthode getName permettra de récupérer le nom du client.
Une méthode verifyPinInput devra permettre de vérifier si un code secret entré correspond bien au code stocké par l'instance, et renvoyer true si c'est le cas, false sinon.
*/
class BankCustomer {
    constructor(name, pin) {
        this._name = name;
        this._pin = pin;
    }
    getName() {
        return this._name;
    }
    verifyPinInput(pin) {
        return pin === this._pin ? true : false;
    }
}
// Tests
const customer = new BankCustomer('John Doe', '3579');
console.log(typeof customer.getName);
assert_1.default.equal(typeof customer.getName, 'function');
console.log(typeof customer.verifyPinInput);
assert_1.default.equal(typeof customer.verifyPinInput, 'function');
console.log(customer.getName());
assert_1.default.equal(customer.getName(), 'John Doe');
console.log(customer.verifyPinInput('3579'));
assert_1.default.ok(customer.verifyPinInput('3579'));
