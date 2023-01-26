// This Script basicaly has all hte functionalities pertaining to the  Local Storage(i.e, GET, ADD, REMOVE FROM LSTORAGE USING UI)
// Store the Items in Local Storage in String Form
// Get the items from Local Storage then convert to JSON ojects

function getTheArrayFromLocalStorage(){
    let temp=localStorage.getItem("FMeals");
    if(!temp){
        temp=[];
        return temp;}
    temp=JSON.parse(temp);
    return temp; }

// Initializa the favourites array
let favouritesArray=getTheArrayFromLocalStorage();

// Function to Update the Local Storage
function updateLocalStorage(){
let temp=JSON.stringify(favouritesArray);
localStorage.setItem("FMeals",temp);
}

// Function to add item to Local Storage
// Steps:
// 1. Get the item
// 2. Check if the item is already Present
// 3. if not  add the item
// 4. If already present return

function additemtoLocalStorage(item){
    let isItemAlreadyPresent=false;

    favouritesArray.map((tempItem)=>{
        if(item.idMeal==tempItem.idMeal){
            isItemAlreadyPresent=true;}      
    })

    if(isItemAlreadyPresent){
        return;}
    
    favouritesArray.splice(0,0,item);
    //    Update the Local Storage After Addition
    updateLocalStorage();

}

// Remove any item from the Local Storge

function removeItemFromLocalStorage(item){
    favouritesArray=favouritesArray.filter((tempItem)=>{
        return item!=tempItem.idMeal;
    });
//    Update the Local Storage After Removal
    updateLocalStorage();
}




