const Reviews = [
    {
        id: 1,
        name: "Kelvin Njoroge",
        job: "Web Designer",
        img: "./images/web.jpg",
        info: "The work is remarkable and smart.Keep up!"
    },
    {
        id: 2,
        name: "Catherine Ndungu",
        job: "Content Writer",
        img: "./images/cate.jpg",
        info: "The product was fine. Looking forward to work together."
    },
    {
        id: 3,
        name: "Harvey Specter",
        job: "App Developer",
        img: "./images/jsm.jpg",
        info: "Congrats Kelvin the work is presentable."
    }
];

const img = document.getElementById("person-img");
const name = document.getElementById("author");
const skill = document.querySelector(".job");
const data = document.querySelector(".info");


const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");
const randombtn = document.querySelector(".btn-random");

let currentItem = 1;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
  
});

function showPerson(person){
  
  const item = Reviews[currentItem];
  
  img.src = item.img;
  name.textContent = item.name;
  skill.textContent = item.job;
  data.textContent = item.info;
};

nextbtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > Reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

prevbtn.addEventListener("click", function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = Reviews.length - 1;
    }
    showPerson();
});

randombtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random() * Reviews.length);
  showPerson();
});
