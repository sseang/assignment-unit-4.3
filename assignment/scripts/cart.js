console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log('Basket have:', basket);


// write if conditon to return true??
function addItem(item) {
    console.log('In new basket', [item]); 
    basket.push(item);
    return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('Apple'));
console.log(`Basket is now ${basket}`);

function listItems() {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket);
    }
}


//splice is new key word
function empty() {
   basket.splice(0, basket.length);
   console.log('Empty is:', basket);


}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
