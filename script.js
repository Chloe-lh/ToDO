


const txtBx = document.getElementById("inputBox");
const submitB = document.getElementById("submitB");
const clearB = document.getElementById("clearB");
var list = document.getElementById("list");


function addItem(){
    var listItem = document.createElement("li");
    listItem.innerText = txtBx.value+" ";

    var doneBut = document.createElement("button");
    doneBut.innerText = "done";

    listItem.appendChild(doneBut);
    list.appendChild(listItem);

    txtBx.value = "";
    
    doneBut.addEventListener('click',function(){
        listItem.remove();
    });
}
submitB.addEventListener('click', addItem);

clearB.addEventListener('click',function(){
    list.innerHTML='';
});
