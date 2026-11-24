const questions = document.querySelectorAll(".faq-question");
questions.forEach(function(question){
    question.addEventListener("click",function(event){
        const clickedquestion= event.currentTarget;
        const answer= clickedquestion.nextElementSibling;
        const isopen= clickedquestion.getAttribute("aria-expanded")==="true";


    questions.forEach(function(item){
        item.setAttribute("aria-expanded","false")
        item.nextElementSibling.hidden=true;
        item.querySelector(".icon").textContent="+";    
    
    })
   if(!isopen){
    clickedquestion.setAttribute("aria-expanded","true");
    answer.hidden=false;
    clickedquestion.querySelector(".icon").textContent="-";
   }

    })
}) 