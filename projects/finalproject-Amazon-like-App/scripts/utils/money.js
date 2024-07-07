export function formatCurrency(priceCents){
    return (Math.round(priceCents) /100).toFixed(2);
}

// a function that is used to format the currency of the products in many files to minimize redudancy