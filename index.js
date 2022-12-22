//Your Code here

let response = window.prompt('Question: Do you head left or right?'); window is not defined
console.log(response.toLowerCase());
if (response === 'right'){
    console.log('RESPONSE HOLDS RIGHT');

    let response2 = window.prompt('Go up or Down');

    if(response2 === 'up'){

    } else if (response2 === 'down'){

    } else
} else if (response === 'left') {
    console.log('RESPONSE HOLDS LEFT');
} else {
    console.log('YOU DONT KNOW HOW TO FOLLOW INSTRUCTUIONS!!!');
}