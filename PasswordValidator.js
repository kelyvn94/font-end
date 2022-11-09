const input = document.querySelector('.input');
const seeIcon = document.querySelector('.seeIcon');
var is_visible = false;

const see = () => {
   if(is_visible){
    is_visible = false;
    input.type = "password";
   }else{
    is_visible = true;
    input.type = "text";
   }
}
const check = () => {
    var valueInput = input.value;
    valueInput = valueInput.trim();
    valueInput.value = valueInput;
    document.getElementById("span").innerHTML = "Length: " + valueInput.length;
}