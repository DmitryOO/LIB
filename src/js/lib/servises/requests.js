import $ from '../core';

$.prototype.get = async function(url, dataTypeAnswer='json') {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error (`Could not fetch ${url}, status: ${res.status}`);
    }
    
    switch(dataTypeAnswer) {
        case 'json': return res.json();
        case 'text': return res.text();
        case 'blob': return res.blob();
    }

};

$.prototype.post = async function(url, data, dataTypeAnswer='text') {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    switch(dataTypeAnswer) {
        case 'json': return res.json();
        case 'text': return res.text();
        case 'blob': return res.blob();
    }
};

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then (res=>console.log(res));