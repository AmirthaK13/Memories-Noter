//selecting elements

var addbtn=document.getElementById("add-btn")
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")

addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event)
{
 event.preventDefault()
 overlay.style.display="none"
 popup.style.display="none"
})

var firstcontainer=document.querySelector(".firstcontainer")
var save=document.getElementById("save")
var title=document.getElementById("title")
var date=document.getElementById("date")
var textarea=document.getElementById("text")

save.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${title.value}</h2>
                   <h6>${date.value}</h6>
                   <p>${text.value}</p>
                   <button onclick="deleteitem(event)">🗑️</button>
                   <button onclick="edititem(event)" id="edit">✏️</button>`
    firstcontainer.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})

function deleteitem(event)
{
    event.target.parentElement.remove()
}

function edititem(event) {
    
   var notesParents=event.target.parentElement;
   var edittitle=notesParents.querySelector("h2")
   var editdate=notesParents.querySelector("h6")
   var edittext=notesParents.querySelector("p")
   

    // Prompt user for new values
    var newTitle = prompt("Edit title:", edittitle.innerText);
    var newDate = prompt("Edit date:", editdate.innerText);
    var newText = prompt("Edit text:", edittext.innerText);

    // Update the elements if user provides new values
    if (newTitle !== null) edittitle.innerText = newTitle;
    if (newDate !== null) editdate.innerText = newDate;
    if (newText !== null) edittext.innerText = newText;
}

