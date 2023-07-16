import BigNumber from "bignumber.js";

export class Cost {
    constructor(id, name, price, markup) {
        this.id = id
        this.name = name
        this.price = price
        this.markup = markup
    }

    calcTotalPrice() {
        if (!this.price || isNaN(this.price) || !this.markup || isNaN(this.markup)) return BigNumber(0);
        let price = new BigNumber(this.price)
        let markup = new BigNumber(this.markup)
        return price.plus(price.multipliedBy(markup.dividedBy(100)))
    }
}