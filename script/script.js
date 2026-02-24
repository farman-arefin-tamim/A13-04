let interviewList=[];
let rejectedList=[];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

let cuurentStates = 'all-filter-btn';


const jobsCard = document.getElementById("jobs-card");

const headSection = document.querySelector('header');
const noJobs = document.getElementById('no-jobs');
// console.log(headSection);


const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");


 const filteredSection = document.getElementById('filtered-section');

function allCount(){
    total.innerText = jobsCard.children.length;
    interview.innerText=interviewList.length;
    rejected.innerText=rejectedList.length;
}

allCount();
function toggleBtn(id){
    allFilterBtn.classList.remove('btn-primary');
    interviewFilterBtn.classList.remove('btn-primary');
    rejectedFilterBtn.classList.remove('btn-primary');
    
    allFilterBtn.classList.add('btn');
    interviewFilterBtn.classList.add('btn');
    rejectedFilterBtn.classList.add('btn');

    const selected = document.getElementById(id);
    //console.log(selected);
    //selected.classList.remove('btn');
    selected.classList.add('btn-primary');
    if(id == 'interview-filter-btn'){
        console.log(interviewList.length)
        if(interviewList.length>0){
             jobsCard.classList.add('hidden');
             filteredSection.classList.remove('hidden');
        }else{
            noJobs.classList.remove('hidden');
            jobsCard.classList.add('hidden');
            filteredSection.classList.add('hidden');
        }

        // jobsCard.classList.add('hidden');
        // filteredSection.classList.remove('hidden');
       
    }else if(id == 'all-filter-btn'){
        jobsCard.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
}


headSection.addEventListener('click',function(event){
    
    //console.log(event.target.classList.contains('interview-btn'));
    if(event.target.classList.contains('interview-btn')){
    const firstNode = event.target.parentNode.parentNode.parentNode;
    //console.log(parenNode);

    const heading = firstNode.querySelector('.heading').innerText;
    const subHeading = firstNode.querySelector('.sub-heading').innerText;
    const price = firstNode.querySelector('.price').innerText;
    const description = firstNode.querySelector('.description').innerText;
    const interviewBtn = firstNode.querySelector('.interview-btn').innerText;
    const rejectBtn = firstNode.querySelector('.reject-btn').innerText;
    const statusBtn = firstNode.querySelector('.status-btn').innerText;
    //console.log(description);

   
     firstNode.querySelector('.status-btn').innerText = 'Applied' ;

    const cardInfo = {
        heading,
        subHeading,
        interviewBtn,
        rejectBtn,
        price,
        description,
        statusBtn:'Applied',
    }

    const nameExist = interviewList.find(item =>item.heading == cardInfo.heading);
   
    if(!nameExist){
        interviewList.push(cardInfo);
      
    }

    // console.log(cardInfo);
    allCount();
    renderInterview();
    }
    else if(event.target.classList.contains('reject-btn')){
    const firstNode = event.target.parentNode.parentNode.parentNode;
    //console.log(parenNode);

    const heading = firstNode.querySelector('.heading').innerText;
    const subHeading = firstNode.querySelector('.sub-heading').innerText;
    const price = firstNode.querySelector('.price').innerText;
    const description = firstNode.querySelector('.description').innerText;
    const interviewBtn = firstNode.querySelector('.interview-btn').innerText;
    const rejectBtn = firstNode.querySelector('.reject-btn').innerText;
    const statusBtn = firstNode.querySelector('.status-btn').innerText;
    //console.log(description);

   
     firstNode.querySelector('.status-btn').innerText = 'Rejected' ;

    const cardInfo = {
        heading,
        subHeading,
        interviewBtn,
        rejectBtn,
        price,
        description,
        statusBtn:'Rejected',
    }

    const nameExist = rejectedList.find(item =>item.heading == cardInfo.heading);
   
    if(!nameExist){
        rejectedList.push(cardInfo);
      
    }
    interviewList = interviewList.filter(item=>item.heading!=cardInfo.heading)
    if(cuurentStates=='interview-filter-btn'){
        renderInterview();
    }
    // console.log(cardInfo);
    allCount();
    //renderRejected();
    }



    //Delete functionality
    else if(event.target.classList.contains('fa-trash-can')){
        const parentNode = event.target.closest('.card');
        //console.log(parentNode);
        parentNode.remove();
    }

})

function renderInterview(){
    filteredSection.innerHTML = '';

    for(let interview of interviewList){
        
        //console.log(interview);
        let div = document.createElement('div');
        div.className = 'card card-border bg-base-100';

        div.innerHTML = `
            <div class="card-body">
                            <h2 class="heading card-title text-[#002c5cFF] font-bold">${interview.heading}</h2>
                            <p class="sub-heading text-gray-500 font-normal text-base">${interview.subHeading}</p>
                            <p class="price text-gray-500 font-normal text-sm">${interview.price}</p>
                         <div class="application-btn card-actions justify-start">
                        <button class="status-btn btn text-[#002c5cFF]">${interview.statusBtn}</button>
                    </div>
                     <p class="description text-gray-500 font-normal text-sm">${interview.description}</p>
                    <div class="flex gap-3">
                        <button class="interview-btn btn btn-outline btn-success">${interview.interviewBtn}</button>
                        <button class="reject-btn btn btn-outline btn-secondary">${interview.rejectBtn}</button>
                    </div>
                </div>
        `
        filteredSection.appendChild(div);
    }
}


function renderRejected(){
    filteredSection.innerHTML = '';

    for(let reject of rejectedList){
        
        //console.log(interview);
        let div = document.createElement('div');
        div.className = 'card card-border bg-base-100';

        div.innerHTML = `
            <div class="card-body">
                            <h2 class="heading card-title text-[#002c5cFF] font-bold">${reject.heading}</h2>
                            <p class="sub-heading text-gray-500 font-normal text-base">${reject.subHeading}</p>
                            <p class="price text-gray-500 font-normal text-sm">${reject.price}</p>
                         <div class="application-btn card-actions justify-start">
                        <button class="status-btn btn text-[#002c5cFF]">${reject.statusBtn}</button>
                    </div>
                     <p class="description text-gray-500 font-normal text-sm">${reject.description}</p>
                    <div class="flex gap-3">
                        <button class="btn btn-outline btn-success">${reject.interviewBtn}</button>
                        <button class="btn btn-outline btn-secondary">${reject.rejectBtn}</button>
                    </div>
                </div>
        `
        filteredSection.appendChild(div);
    }
}



// allFilterBtn.addEventListener('click',function(event){
//        if(event.target.matches('.fa-trash-can')){
//             // event.target.parentNode.parentNode.

//             let filteredSection = document.querySelector('.filterd-section');
//             console.log(filteredSection);
//        }
// })
