// fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
//     return data.json();
// }).then((completedata)=>{
//     console.log(completedata[2].tittle);
   
//     let data1="";
//     completedata.map((values)=>{
//         data1=''
//     })

// }).catch((err)=>{
//     console.log(err);
// })
fetch('http://localhost:5000/products/fruits')

    .then(function(response){
        return response.json(); 
   }) 
   .then(function(data){
    console.log(data);

let morefruits=document.getElementById("fruList");
data.forEach(k=>{
    let newfruit = document.createElement('li');
    newfruit.innerText= `${k.name}`
    morefruits.appendChild(newfruit)
})
   })
   .catch(function(error){
       console.log('error',error);
   });

   fetch('http://localhost:5000/products/vegetables')

    .then(function(response){
        return response.json(); 
   }) 
   .then(function(data){
    console.log(data);

let morevegetable=document.getElementById("vegList");
data.forEach(k=>{
    let newvegetable = document.createElement('li');
    newvegetable.innerText= `${k.name}`
    morevegetable.appendChild(newvegetable)
})
   })
   .catch(function(error){
       console.log('error',error);
   });




    
    