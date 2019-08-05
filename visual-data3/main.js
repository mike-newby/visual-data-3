//fetch data from URL
const main=document.querySelector("main")
const createCard= (obj, indx)=> {
    const newCard= document.createElement("div");
    newCard.className="card";
    newCard.id = indx
    const infoCard = document.createElement("div");
    infoCard.className = "infoCard"
    infoCard.id = indx
    const portrait=document.createElement("img")
    portrait.className = "picture"
    portrait.alt="Face Image Large";
    // newCard.appendChild(newCard);
    newCard.appendChild(portrait);
    newCard.appendChild(infoCard);
    main.appendChild(newCard);

}
const url="https://randomuser.me/api/?results=30"
    const ages = url.results.dob.age;
    const results = ages.filter(age => age.length = evnt)
    console.log(results);
// function submitInput(evnt){
//     return results.dob.age;

// }



// fetch(url)
// .then(function(response) {
//     return response.json();
// })
// .then(function(myJson){
//     data =myJson.results

// }
// const loopCreate=arr=>{
//     for(let i = 0; i<arr.length ; i++) {
//         createCard(arr[i],i)
//     }    
// }
// loopCreate(data);
// // });
