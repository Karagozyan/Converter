// // kpnum enq HTML i elementnerin 



// let button = document.querySelector('button');
// let fromValue = document.getElementById('firstvalue');
// let toValue = document.getElementById('secondvalue');
// let result = document.querySelector("p");
// let count = document.getElementById("count");



// button.addEventListener("click", () => {
//     let data = {};
// fetch("https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_lwLQZhnZxsVflvtqERSp7NXMEZHFS2MDURiT7uMM&currencies=" + fromValue.value + "," + toValue.value)
//   .then(res => res.json())
//   .then(val => {
//      let data = val.data;
//   });
//   console.log(data);
//     // stuguma ete count y datarka kam 2ne nuynn en error a xpum 
//     if(count.value && toValue.value !== fromValue.value){
//         console.log(data);
//         // ete arajiny meca erkrordic 
//     if(data[fromValue.value] > data[toValue.value]){
//         result.innerHTML = `${Math.round(data[toValue.value] / data[fromValue.value] * Number(count.value) * 1000) / 1000 } ${toValue.value}`
//     }
//     // ete arajiny poqra erkrordic
//     else{
//         result.innerHTML = `${Math.round(data[toValue.value] * data[fromValue.value] * Number(count.value) * 1000) / 1000} ${toValue.value}`
//     }
// } 
// // error i text y 
// else {
//     result.innerText = "Լրացրեք վանդակը կամ ընտրեք տարբեր արժույթներ։"

// }
//     })


let button = document.querySelector('.btn-primary');
let fromValue = document.getElementById('firstvalue');
let toValue = document.getElementById('secondvalue');
let result = document.querySelector("p");
let count = document.getElementById("count");

button.addEventListener("click", () => {
  fetch("https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_lwLQZhnZxsVflvtqERSp7NXMEZHFS2MDURiT7uMM&currencies=" + fromValue.value + "," + toValue.value)
    .then(res => res.json())
    .then(val => {
      let data = val.data;
      console.log(data);
      // stuguma ete count y datarka kam 2ne nuynn en error a xpum 
      if (count.value && toValue.value !== fromValue.value) {
        console.log(data);
        // ete arajiny meca erkrordic 
        if (data[fromValue.value] > data[toValue.value]) {
          result.innerHTML = `${Math.round(data[toValue.value] / data[fromValue.value] * Number(count.value) * 1000) / 1000 } ${toValue.value}`;
        } else {
          result.innerHTML = `${Math.round(data[toValue.value] * data[fromValue.value] * Number(count.value) * 1000) / 1000} ${toValue.value}`;
        }
      } else {
        // error i text y 
        result.innerText = "Լրացրեք վանդակը կամ ընտրեք տարբեր արժույթներ։";
      }
    })
    .catch(error => {
      console.log("Error fetching data:", error);
    });
});
