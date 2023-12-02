async function Data(){
    let res = await fetch('https://6529995155b137ddc83f0695.mockapi.io/cyber/data');
    let data = await res.json();
    console.log(data);
    return data;
}
Data();

async function renderUi(){
    let arr = await Data();
    console.log(arr);
}
// renderUi();