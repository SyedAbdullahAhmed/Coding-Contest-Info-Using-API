let url = "https://kontests.net/api/v1/all";//Api Link

//Fetch Api Data
const response = fetch(url)
response.then((value) => {
     return value.json()
}).then((value) => {
     let ihtml = "";
     //Words For Image API
     const wordsForAPI = ["coding", "technology", "machine learning", "programming"];

     //Iterating For Loop, Get Data And Insert Into Cards
     for (let item in value) {
          ihtml +=
               `
               <div class="card m-1" style="width: 18rem;border-radius: 30px;background-color: black;color: white;">
              <img src="https://source.unsplash.com/500x500/?${wordsForAPI[Math.floor(Math.random() * 10)]}" class="card-img-top" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">${value[item].name}</h5>
                <p class="card-text">${value[item].start_time}</p>
                <p class="card-text">${value[item].end_time}</p>
                <a href="${value[item].url}" target="_blank" class="btn btn-primary mt-2">More Info</a>
              </div>
            </div>
           `;

     }
     //Add Cards
     let a = document.getElementById("a");
     a.innerHTML = ihtml;
})

`
Subject: Internship


`



