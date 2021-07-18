const btn = document.getElementById('btn');
const el = document.getElementById('hh');

function generateRandom() {
    el.innerHTML = Math.round(Math.random() * 101);
};

btn.addEventListener('click', generateRandom);

// el.innerHTML = `</h1> ${Math.random} </h1>`;
