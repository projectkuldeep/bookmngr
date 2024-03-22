let bagItems=[];
displayItemsOnHomePage();
function addToBag(itemid) 
{
    var fileName = "butn/inbook" + itemid + ".html";
    window.location.href = fileName; 
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
   <button class="btn-add-bag" onclick="addToBag(${item.id})">${item.company}</button>
</div>`
});
itemsContainerElement.innerHTML = innerHTML;
}
