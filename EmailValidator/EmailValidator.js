const input = document.querySelector(".input");
const value = document.querySelector(".value");

value.style.display = "none";

const emailValidator = () => {
    input.addEventListener("keyup", () =>{
        if(input.value.length> 0){
            console.log("Hello");
            
        }else{
            console.log("Hi");
        }
    })
};
emailValidator();