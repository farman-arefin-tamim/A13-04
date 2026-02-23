let interviewList=[];
let rejectedList=[];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const jobsCard = document.getElementById("jobs-card");

const headSection = document.querySelector('header');
// console.log(headSection);


const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");


 const filteredSection = document.getElementById('filtered-section');

function allCount(){
    total.innerText=jobsCard.children.length;
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
    console.log(selected);
    //selected.classList.remove('btn');
    selected.classList.add('btn-primary');
    if(id == 'interview-filter-btn'){
        jobsCard.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    }else if(id == 'all-filter-btn'){
        jobsCard.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
}


headSection.addEventListener('click',function(event){
    
    console.log(event.target.classList.contains('interview-btn'));
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

   

    const cardInfo = {
        heading,
        subHeading,
        interviewBtn,
        rejectBtn,
        price,
        description,
        statusBtn
    }

    const nameExist = interviewList.find(item =>item.heading == cardInfo.heading);
    firstNode.querySelector('.status-btn').innerText = 'Applied'
    if(!nameExist){
        interviewList.push(cardInfo);
    }

    // console.log(cardInfo);
    renderInterview();
    }

})

function renderInterview(){
    filteredSection.innerHTML = '';

    for(let interview of interviewList){
        
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'card card-border bg-base-100';

        div.innerHTML = `
            <div class="card-body">
                            <h2 class="heading card-title text-[#002c5cFF] font-bold">Mobile First Corp</h2>
                            <p class="sub-heading text-gray-500 font-normal text-base">React Native Developer</p>
                            <p class="price text-gray-500 font-normal text-sm"> Remote • Full-time • $130,000 - $175,000</p>
                         <div class="application-btn card-actions justify-start">
                        <button class="btn text-[#002c5cFF]">NOT APPLIED</button>
                    </div>
                     <p class="description text-gray-500 font-normal text-sm">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    <div class="flex gap-3">
                        <button class="btn btn-outline btn-success">INTERVIEW</button>
                        <button class="btn btn-outline btn-secondary">REJECTED</button>
                    </div>
                </div>
        `
        filteredSection.appendChild(div);
    }
}


