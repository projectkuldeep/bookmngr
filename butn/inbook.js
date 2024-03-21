let bagItems=[];
  displayItemsOnHomePage();
    displayBagIcon();
function addToBag(itemid) 
{
    window.location.href = 'butn/inbooks.html';

}
// function displayBagIcon() {
//     let bagItemCountElement = document.querySelector('.bag-item-count');
//     if(bagItems.length>0){
//     bagItemCountElement.innerHTML=bagItems.length;
//     bagItemCountElement.style.visibility='visible';
// }
//     else{
//         bagItemCountElement.style.visibility='hidden';
//     }
// }

function displayItemsOnHomePage(){
let itemsContainerElement = document.querySelector('.items-container');
if(itemsContainerElement== undefined){
    return;
}

let innerHTML=''
initems.forEach(initems =>{
    innerHTML +=`<div class="item-container">
    <img class="item-image" src="${initems.image}" alt="item iamge">
    <div class="company-name">${initems.company}</div>
    
    <div class="price">
       <span class="discount">(${initems.discount_percentage}% Off)</span>
       
    </div>
    <button class="btn-add-bag" onclick="addToBag(${initems.id})">Click here</button>
</div>`
});
itemsContainerElement.innerHTML = innerHTML;
}
