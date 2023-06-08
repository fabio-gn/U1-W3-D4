// generateTabellone();
// generateScheda(
//     randomArray()
// )
// callNumber(
//     pickNumber from da chiamare
//     tabellone.foreach( classlist.add);


// );
let tabellone = document.getElementById('tabellone');
let scheda = document.getElementById('tabellina');
let numArray = [];
let numArray2 = [];
let estraiButton = document.querySelector('#estrazione button');

const callNumber = function(e){
    e.preventDefault();
    let randomIndex = Math.floor(Math.random() * 77)  
         
    let calledNumber = numArray2[randomIndex];
    let calledNumbersCards = document.getElementsByClassName('called');
    calledNumbersCards = Array.from(calledNumbersCards);
    calledNumbersCards.forEach((card, i) => {
        if (callNumber === i){
            card.classList.add('called');
        }
    });
    
        
}

const generateScheda = function(){
    let randomArray = randomSchedaNumbers(numArray);

    for(i = 0; i < 24; i++){
        let number = document.createElement('div');
        number.setAttribute('class', 'number');
        number.innerText = randomArray[i]
        scheda.appendChild(number);

        //genera anche l'array di numeri che servirà per estrarli a sorte
        numArray.push(i+1);
    }

}

const randomSchedaNumbers = function(arr) {
        let nums = arr,
        ranNums = [],
        i = nums.length,
        j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }
    return ranNums;
}

const generateTabellone = function(){
    for(i = 0; i < 76; i++){
        let number = document.createElement('div');
        number.setAttribute('class', 'number');
        number.innerText = i + 1;
        tabellone.appendChild(number);

        //genera anche l'array di numeri che servirà per estrarli a sorte
        numArray.push(i+1);
        numArray2.push(i+1);
        
    }
}

randomSchedaNumbers(numArray)

generateTabellone()

generateScheda()

console.log(randomSchedaNumbers(numArray));

estraiButton.addEventListener('click', callNumber);
console.log(numArray2)

