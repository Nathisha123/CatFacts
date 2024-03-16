
const facturl= "https://cat-fact.herokuapp.com/facts"
const userurl= "https://cat-fact.herokuapp.com/users"

//getting cat facts
function getFacts(url)
{
   
    return fetch(url)
    .then(response=>
        {
            if(!response.ok)
            {
                throw Error ("Failed to retrieve catFacts");
            }
            
               return  response.json();
            
        })
        
        .then(data=>data)
        .catch(error=>console.log(error))
   }



   



function displayFacts(facts)
{
    const factsDiv= document.querySelector(".container");

    facts.forEach(fact => {
        const factCard =document.createElement("div")
         factCard.setAttribute("class", "card")
         factCard.innerHTML=`<div class="row ">
         <div class="col">
           <div class="card-header"> Cat Facts</div>
            
              <div class="card-body">
               <h4 class="card-title">${fact.type}</h4>
               <p class="card-text">${fact.text}</p>
               

             </div>
           </div>
         </div>`
         factsDiv.append(factCard);
         
    });
    container.append(factsDiv);
   document.body.append(container);
}

//Function call for fact
getFacts(facturl)
.then(data=>{
    displayFacts(data);
})
.catch(error=>{
    console.log(error)
})


