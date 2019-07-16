//Select the section with an id of container without using querySelector.
var container = document.getElementById("container");

//Select the section with an id of container using querySelector.
var containerQuery = document.querySelector("#container");

//Select all of the list items with a class of "second".
var listItem = document.getElementsByClassName("second");


//Select a list item with a class of third, but only the list item inside of the ol tag.
var olListThree = document.querySelector("ol li.third");


//Give the section with an id of container the text "Hello!".
var hello = document.createElement("p");
hello.innerText = "Hello!";
container.appendChild(hello);


//Add the class main to the div with a class of footer.
var footer = document.querySelector(".footer");
footer.className = "main";


//Remove the class main on the div with a class of footer.
footer.classList.remove("main");


//Create a new li element.
var newLi = document.createElement("li");


//Give the li the text "four".
newLi.innerText = "four";



//Append the li to the ul element.
var ul = document.getElementsByTagName("ul");
for (var i = 0; i < ul.length; i++) {
    ul[i].appendChild(newLi);
}


//Loop over all of the list inside the ol tag and give them a background color of "green".
var olLists = document.querySelectorAll("ol li");
for (var i = 0; i < olLists.length; i++) {
    olLists[i].style.color = "green";
}


//Remove the div with a class of footer.
footer.remove();