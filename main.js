

let cureentDate = document.querySelector('.current-data');
let cureentDay = document.querySelector('.Day');
let preveNext = document.querySelectorAll('.icon span');


 let data = new Date();
 let curdate = data.getFullYear();
 let curMonth = data.getMonth();

 const months = ["Junuary","February","March","April","May","June","July","August",
                       "Septamber","October","November","Decamber",]
 
 const renderCalender = () =>{
    let firstDayOfMonth = new Date (curdate ,curMonth + 1 ).getDay();
    let lastDateOfMonth = new Date (curdate ,curMonth + 1, 0 ).getDate();
    let lastdayOfMonth = new Date (curdate ,curMonth + lastDateOfMonth ).getDate();
    let lastDateOFLastfMonth = new Date (curdate ,curMonth ,0 ).getDate();
    let litag = "";


for (let i = firstDayOfMonth; i>0 ; i--){
    litag += `<li class = "inactive">${lastDateOFLastfMonth - i + 1}</li>`;
}

    for(let i = 0 ; i<=lastDateOfMonth ; i++){
        let itToDay = i === data.getDate() && curMonth === new Date().getMonth() && curdate=== new Date().getFullYear()? "ACTIVE" :"";
        litag += `<li class = "${itToDay}">${i}</li>`;
    }
    for(let i = lastdayOfMonth ; i<=6 ; i++){
        litag += `<li class = "inactive">${ i -lastdayOfMonth  + 1}</li>`;
    }


    cureentDate.innerText = `${months[curMonth]} ${curdate}`;
    cureentDay.innerHTML =litag
 }
 renderCalender();

 preveNext.forEach(icon =>{
    icon.addEventListener("click", ()=>{
        curMonth = icon.id === "next" ?  curMonth - 1 : curMonth + 1  ;
        if(curMonth<0 || curMonth > 11){
            data = new Date( curdate, curMonth);
            curdate = date.getFullYear();
            curMonth = data.getMonth();
        }else{
            date = new Date();
        }
        renderCalender();
    })
 })
