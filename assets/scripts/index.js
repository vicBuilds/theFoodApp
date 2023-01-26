
// This File Contains all the Functionalities pertaning to the Main Page

// Fetching all the required elements from DOM

const mealList = document.getElementById('list');
const inputbox= document.getElementById('input-place');
let foodcontainer= document.getElementById('selected-food-container');
let searchbutton=document.getElementById('search-button');
let foodshow=document.getElementById("food-show");
let ul=document.querySelector('#list-container ul');

let mealslist=[];
let url;


// Handling Clicks if a Person Clicks on the Suggested Search Results
function handleclickonList(meal){

	foodcontainer.innerHTML="";
	inputbox.value='';
	mealList.innerHTML='';


	let heading=document.createElement('h3');
	heading.innerHTML=`<i class="fa-solid fa-bowl-food"></i>
	${meal.strMeal} (${meal.strArea}) <i class="fa-solid fa-bowl-food"></i>`;
	heading.id='food-title';
	foodcontainer.appendChild(heading);

	let image=document.createElement('img');
	console.log(meal);
	image.src=`${meal.strMealThumb}`;
	image.className="image-select";
	foodcontainer.appendChild(image);


	let instruction=document.createElement('p');
	instruction.id="instruction";
	//console.log(meal);
	instruction.innerHTML=`
	<i class="fa-solid fa-person-chalkboard"></i>
	<i><b>Instruction</b></i> : ${meal.strInstructions} 
	
	`;
	
	foodcontainer.appendChild(instruction);



	let video=document.createElement('a');
	video.href=`${meal.strYoutube}`;
	video.target=`_blank`;
	//console.log(meal);
	video.innerHTML=`
	<i class="fa-brands fa-youtube"></i>
	Video Link`;
	
	foodcontainer.appendChild(video);


	let myfavouritesbutton=document.createElement('button');
	myfavouritesbutton.className='myFavButton';
	myfavouritesbutton.innerHTML=`
	<i class="fa-solid fa-heart"></i> ADD TO MY FAVOURITES
	`;
	myfavouritesbutton.setAttribute("mealId",`${meal.idMeal}`);

	foodcontainer.appendChild(myfavouritesbutton);

	myfavouritesbutton.addEventListener('click',function(){
		additemtoLocalStorage(meal);
	})

}



// Handles click on Search Button and when Enter is pressed in the Search

function handleclickOnSearchButton(){
fetchdataToShowAListOfItems();}



// Rendering the body whwn there are multiple Search Results
function renderBody(mealList){
	// Removing the Suggestion as the User has pressed Enter
	ul.style.display="none";

	foodshow.innerHTML="";
	
	mealList.innerHTML='';
	// If null is getting Fetched from the API. Handling it Show No Matching results 
	if(mealList.meals==null){
		foodshow.innerHTML=`
		<h1><i class="fa-regular fa-face-sad-tear"></i></h1>
		<br>
		<h2>OOPS! Your Search '${inputbox.value}' didn't match any Meals..</h2>
		`;
		inputbox.value='';
		return;}

	foodshow.innerHTML="";
	// console.log(mealList);
	let mealArray=mealList.meals;
	// console.log(mealArray.length);
	for(let i=0; i<mealArray.length;i++){
		let foodcards=document.createElement('div');
		foodcards.className='foodcards';
		foodcards.meal=`${mealArray[i]}`;
		foodcards.innerHTML=`
		<img src="${mealArray[i].strMealThumb}">
		<p>${mealArray[i].strMeal}</p>
		`;
		foodcards.addEventListener('click',function(){
			handleclickonList(mealArray[i]);
		});
		foodshow.appendChild(foodcards);

	}} 

















// Creating the List Dynamically

function addToDom(meal){
	let list=document.createElement('li');

	
	list.innerHTML=`
	${meal.strMeal}
	`;
	mealList.append(list);
	//console.log(mealList);

	const lisitems=document.getElementsByTagName('li');
	
	
	for(let i=0;i<lisitems.length;i++){
		lisitems[i].addEventListener('click',function(){
			if(lisitems[i]!=null){
			console.log(lisitems[i].innerHTML.trim());
			handleclickonList(meal);}
		});
	
	}



}


// Appending the List , i.e., Search history to a max of Six Items
function appendList(data){
	mealList.innerHTML='';
	if(!data.meals){
		return;}

	let length=data.meals.length;
	if(length>=6){
		length=6;}

	//console.log(length);	
	for(let i=0;i<length;i++){
		addToDom(data.meals[i]);
	}	


}






// Fetching Data from the Api from Input Box or Search Bar

function fetchdataToShowAListOfItems(){
	url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputbox.value}`;
	//console.log(url);
fetch(url).then(function (response) {
	// The API call was successful!
	return response.json();

}).then(function (data) {
	// This is the JSON from our response
	renderBody(data);

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}





// Fetching Data from the Api from Input Box or Search Bar and showing suggestions

function fetchdata(){
	url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputbox.value}`;
	//console.log(url);
fetch(url).then(function (response) {
	// The API call was successful!
	return response.json();

}).then(function (data) {
	// This is the JSON from our response

	// console.log(data);
	appendList(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}

function print(){
	for(let i=1;i<=10;i++){
		console.log(i+" ");
	}
}


// Handling Keyboard Events on Search Bar or Input Box

inputbox.addEventListener('keydown', function(event){
	ul.style.display="flex";
	if(event.key=="Enter"){
		event.preventDefault();
		handleclickOnSearchButton(); return;}
		
		fetchdata();
	}
);

// Handling Mouse Events on Search Bar

searchbutton.addEventListener('click',handleclickOnSearchButton);

