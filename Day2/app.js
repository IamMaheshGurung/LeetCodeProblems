fetch("countries.json")
  .then(response => response.json())
  .then(data => {
    if(data.map(data=>{
        (data.name=="Canada" ? console.log(data.capital) : console.log("Not Found"))
    }));
  })
  .catch(error => console.error('Error:', error));