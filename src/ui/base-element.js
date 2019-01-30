import $ from 'jquery';


export class BaseElement {
    constructor () {
        this.element = null; // jquery obj
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element);
    }

    createElement() {
        let s = getElementString();
        this.element = $(s);
    }
    
    getElementString() { 
        throw 'Please override getElementString() in BaseElement';
    }

    enableJS() {
        componentHandler.upgradeElement(this.element[0]);
    }
}