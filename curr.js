const select = document.querySelectorAll('select');
const input = document.querySelectorAll('input');
const API_URL = "http://api.exchangeratesapi.io/latest"
let html = '';

async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    //console.log(data.rates)
    const arrKeys = Object.keys(data.rates);
   // console.log(arrKeys)
    arrKeys.map(item =>{
        return html += '<option value=${item}>${item}</option>';
    });
    console.log(html);
    for(let i=0; i<select.length; i++){
        select[i].innerHTML = html;
    }
};
