const user = { id: 1, name: 'Sizan', job: 'Teacher' };
// JavaScript Object Notation-JSON
// json sob guloke single quatation theke double quatation e rakhbe
const stringified = JSON.stringify(user)
console.log(user);
console.log(stringified);


const shop = {
    owner: 'Mariam',
    address: {
        street: 'laxmipur',
        city: 'rajshahi',
        country: 'BD'
    },
    product: ['laptop', 'mobile'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
// stringify dile json pura jinis take string banay banay fele ja expand kora jabe na abar chaile parse diye ei string theke original eo asha jay
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);