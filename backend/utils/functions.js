export const getRandomProducts = (prodsArray, n) => {
    return prodsArray.sort(() => 0.5 - Math.random()).slice(0, n)
}

export const getDiscount = (price, discount) => {
    return (price + ((price * discount) / 100)).toFixed();
}

export const formatPrice = (price) => {
    return new Intl.NumberFormat("es-Ar", {
        style: "currency",
        currency: "ARS",
    }).format(price);
};