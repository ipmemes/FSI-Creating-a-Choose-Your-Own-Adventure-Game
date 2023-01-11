//Your Code here

let response = window.prompt('Question: Are you satisfied with the Software Development Intro Class: yes or no?'); 
console.log(response.toLowerCase());
if (response === 'yes'){
    console.log('RESPONSE HOLDS YES');
        let response2 = window.prompt('Glad to hear that. Are interested or not interested in the extended class?');
} else if (response === 'no') {
    console.log('RESPONSE HOLDS NO')
        let response2 = window.prompt('Sorry to hear that, please tell us what you dislike about the class');
}

    if (response2 === 'interested'){
        console.log('RESPONSE HOLDS INTERESTED');
            let response3 = window.prompt('How are you going to fund for the extended class: cash or loan?');
    }

        if(response3 === 'cash'){
            console.log('RESPONSE HOLDS CASH');
        }
        let response4 = window.prompt('Great! See you on January 31st. Please enter your full name to be added to our call list before the class starts');
  
    
