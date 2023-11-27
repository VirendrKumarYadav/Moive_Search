
let input =[1,2,3,4,5,6,7,8,10];
let sum=0;
let l=10;

let total=l*(l+1)
total=total/2;
for(let i=0; i<=input.length;i++){
     sum=input[i];
   total=total-sum;
   if(i==input.length-1){
    console.log(total);
   }
}

// console.log(total);





// let details=[
//     {name:"virendra",age:12},
//     {name:"raj",age:28},
//     {name:"Avinash",age:35},
//     {name:"Arjun",age:25},
//  ]
//  let mapedData=details.map(data=>data.name);
//  mapedData.forEach()

//  console.log(mapedData);

