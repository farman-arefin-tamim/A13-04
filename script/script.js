let interviewList=[];
let rejectedList=[];

let total=document.getElementById("total");
let interview=document.getElementById("interview");
let rejected=document.getElementById("rejected");

const jobsCard=document.getElementById("jobs-card");

const headSection = document.querySelectorAll('header');
console.log(headSection);


function allCount(){
    total.innerText=jobsCard.children.length;
    interview.innerText=interviewList.length;
    rejected.innerText=rejectedList.length;
}


function toggleBtn(){
    const allFilterBtn = document.getElementById("all-filter-btn");
    const interviewFilterBtn = document.getElementById("interview-filter-btn");
    const rejectedFilterBtn = document.getElementById("rejected-filter-btn");
      
}


