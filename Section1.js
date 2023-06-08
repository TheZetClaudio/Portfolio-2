const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const Call1 = document.querySelector("#FirstCall");
const Call2 = document.querySelector("#SecondCall");

const changeFirstSlide = () => {
    Call2.classList.add("SecondCall");
    Call2.classList.remove('SecondCallAfter');
    Call1.classList.add("FirstCallAfter");
    Call1.classList.remove("FirstCall")
    
};
dot2.addEventListener('click', changeFirstSlide);

const changeSecondSlide = () => {
    Call2.classList.remove("SecondCall");
    Call2.classList.add('SecondCallAfter');
    Call1.classList.remove("FirstCallAfter");
    Call1.classList.add("FirstCall")
    
};
dot1.addEventListener('click', changeSecondSlide);

