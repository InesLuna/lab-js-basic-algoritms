// Names and Input
let hacker1 ="Ines";
console.log(`The driver's name is ${hacker1}.`)
// let hacker2 = prompt("What's the navigators name?");
let hacker2 = "prompt";
console.log(`The navigator's is ${hacker2}.`);

//Conditionals

if(hacker1.length === hacker2.length){
    console.log(`wow,ypu both got equally long names, ${hacker1.length} characters!!`)
} else if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
} else {
    console.log (`Yo, the navigator got the longest name, it has ${hacker2.length} characters`)
}

function bigLetters(name){
    let modifiedName = ''
    for(let i=0; i<name.length; i++){
        modifiedName += `${name[i].toUpperCase()} `; 
    }
    console.log(modifiedName)
}

function fromLast(name){
    let modifiedName = ''
    for(let i = name.length-1; i>=0; i--){
        modifiedName += name[i]; 
    }
    console.log(modifiedName)
}

function lexicographic (name1,name2){
    let n=name1.localeCompare(name2);
    
    if (n===0) {
        console.log('What?!you have the same name')
    } else if (n === 1){
        console.log (`yo, the navigator goes first definitely`  )
    } else { console.log("The drivers name goes first") }
} 
lexicographic (hacker1, hacker2)

//Bonus time

function palindrome (string){
    let a = true;
    for (let i=0 ; i=string.length ; i++) {
        if (string[i] != string[string.length-1] )
    }    
} 

// Lorem ipsum generator
