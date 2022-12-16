// fetch("https://api.cryptonator.com/api/full/btc-usd")
// .then(res =>{
//     return res.json();
// })
// .then(data =>{
//     console.log(data.ticker.price);
// })
// .catch(e=>{
//     console.log(e);
// })

// const hello = async () =>{
// const res= await fetch("https://api.cryptonator.com/api/full/btc-usd");
//     const data = await res.json();
//     console.log(data.ticker.price);
// }
// hello();

// axios.get("https://api.cryptonator.com/api/full/btc-usd")
// .then(res => {
//     console.log(res.data.ticker.price);
// })
// .catch(e => {
//     console.log("oh no" , e);
// })


const button = document.querySelector('#click');
const joke = document.querySelector('#joke');
const getdadjoke = async () => {
    const config = { headers : {Accept : 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    let joka = res.data.joke;
    return joka;
}
button.addEventListener('click' , async () => {
   try{
    joke.textContent= await getdadjoke();
   }catch{
       joke.textContent = 'Sorry!! No joke available:(' ; 
   }     
})
