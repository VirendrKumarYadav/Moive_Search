
let tableData=document.querySelectorAll('tbody td');

// search
let searchResult=document.querySelector('#search');
searchResult.addEventListener('keyup',(ele)=>{
   let eachData= ele.target.value;
    tableData.forEach((a)=>{
       return a.innerText.includes(eachData);
      
     });
   


})

