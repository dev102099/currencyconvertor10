const Fetch= async()=>{
    const b = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json")
    .then(()=>{
        console.log(b)
    })
}