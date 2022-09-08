const billElem = document.querySelector("#bill");
const peopleElem = document.querySelector("#people");
const customElem = document.querySelector("#custom");

const totalElem = document.querySelector(".total-p");
const tipElem = document.querySelector(".tip-p");

let bill = 0;
let people = 0;
let custom = 0;

billElem.addEventListener('change', function (e) {
    bill = billElem.value;
    //console.log(bill);
});
peopleElem.addEventListener('change', function (e) {
    people = peopleElem.value;
});
customElem.addEventListener('change', function (e) {
    custom = customElem.value;
    calculate(custom);
});

function calculate(perct = custom) {
    let totalPerPerson = (bill / people).toFixed(2);
    let tipPerPerson = ((bill * perct) / 1000).toFixed(2);
    totalPerPerson = Number(tipPerPerson) + Number(totalPerPerson);

    totalElem.innerHTML = `$ ${totalPerPerson}`;
    tipElem.innerHTML = `$ ${tipPerPerson}`;
}

function reset() {
    totalElem.innerHTML = `$ ${0}`;
    tipElem.innerHTML = `$ ${0}`;
    billElem.value = 0;
    peopleElem.value = 0;
    customElem.value = 0;
}