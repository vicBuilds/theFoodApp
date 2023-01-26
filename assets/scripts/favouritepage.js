let favContainer=document.getElementById("fav-container");
let favmealsArray=localStorage.getItem("FMeals");
favmealsArray=JSON.parse(favmealsArray);
console.log(favmealsArray);

if(favmealsArray==null){
    favmealsArray=[];
}




function renderPage(){
    favmealsArray=localStorage.getItem("FMeals");
    favmealsArray=JSON.parse(favmealsArray);
    for(let meal of favmealsArray){
    let div=document.createElement('div');
    div.className="foodcards";
    div.innerHTML=`
    <span><h2><i class="fa-solid fa-heart"></i> &nbsp ${meal.strMeal} </h2></span>
    <button class="Delete-fav" attr="${meal.idMeal}"><i class="fa-solid fa-trash"></i> Remove this Meal</button><br>
    <img src="${meal.strMealThumb}">
    <p class="instruction">INSTRUCTIONS:<br>${meal.strInstructions}</p>
    `;
    favContainer.appendChild(div);
    }

}


if(favmealsArray.length!=0){
renderPage();
}

else{
    let body=document.getElementById("body");
    body.style.backgroundImage="url('./assets/images/emptyplate.jpg')";
    body.style.backgroundSize="100vw 100vh";

}


let deletefav=document.getElementsByClassName('Delete-fav');

for(let i of deletefav){
    let mealid=i.getAttribute('attr');
    console.log(typeof(mealid));
    i.addEventListener('click',function(){
        removeItemFromLocalStorage(parseInt(mealid));
        location.reload();
    });

}

