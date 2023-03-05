interface credit {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: credit): number => {
    const priceRes: number = (price / 100) * (100 - discount)
    if(isInstallment) {
        return priceRes / months
    }
    return priceRes
};

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }))