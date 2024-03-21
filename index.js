let bagItems=[];
onLoad();


function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}
function addToBag(itemid) 
{
    window.location.href = 'butn/inbooks.html';

}
// bagItems.push(itemid);
// localStorage.setItem('bagItems',JSON.stringify(bagItems));
// displayBagIcon();
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
    bagItemCountElement.innerHTML=bagItems.length;
    bagItemCountElement.style.visibility='visible';
}
    else{
        bagItemCountElement.style.visibility='hidden';
    }
}

function displayItemsOnHomePage(){
let itemsContainerElement = document.querySelector('.items-container');
if(itemsContainerElement== undefined){
    return;
}

let innerHTML=''
items.forEach(item =>{
    innerHTML +=`<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item iamge">
    <div class="company-name">${item.company}</div>
    
    <div class="price">
       <span class="discount">(${item.discount_percentage}% Off)</span>
       
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Click here</button>
</div>`
});
itemsContainerElement.innerHTML = innerHTML;
}
// <span class ="current-prize">${item.current_price}</span>
// <span class ="orignal-prize">${item.original_price}</span>
// //<div class="item-name">
// ${item.item_name}
// </div>
//<div class="rating"> ${item.rating.stars}⭐ | ${item.rating.count}</div>