//Alex, Inés, Javi

// Names and Input
let hacker1 ="Ines";
console.log(`The driver's name is ${hacker1}.`)
let hacker2 = prompt("What's the navigators name?");
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

let string = prompt("Escribe un palindromo");
let newString = "";

newString = string.replace(/ |,/g, "").toLowerCase();

console.log(newString)


function equalLetters(string) {
    let n = true;

    for(let i = 0 ; i < string.length ; i++) {
        if(string[i] !== string[string.length-1-i]){
           n = false }
    }
    if(n === true){
        console.log("Palindrome")
    } else {console.log("Not a palindrome")}
}
 equalLetters(newString)


// Lorem ipsum generator

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan tristique lacus nec consequat. Quisque vulputate augue ut libero ultrices, eget gravida turpis blandit. Ut congue massa ac lorem feugiat congue. Sed venenatis ipsum eros, eget porta lorem vestibulum in. Sed odio neque, eleifend quis sodales sed, interdum sagittis dui. Nulla aliquam, leo vitae rhoncus euismod, libero arcu viverra ligula, eu venenatis libero est nec odio. Nunc rhoncus erat a posuere sagittis. Donec id suscipit orci. Donec in dolor ligula. Vestibulum semper iaculis elit, ac facilisis neque gravida id. Maecenas vel leo turpis. Quisque eros diam, gravida quis posuere a, egestas vel tellus. Praesent sit amet nunc tempus, tincidunt lorem vel, semper neque.\

Praesent egestas euismod nibh, eu dictum mi tempor at. Suspendisse non urna lacinia enim tristique consectetur. Suspendisse sagittis nulla in orci eleifend viverra. Sed maximus pulvinar fermentum. Duis commodo suscipit nisi. Nam euismod lacus id risus accumsan ultricies. Aenean tincidunt nibh convallis scelerisque posuere. Vestibulum at diam pharetra, hendrerit enim sed, molestie tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis est ac eros porta facilisis. Aliquam gravida consequat venenatis. In sit amet consequat lorem. Vivamus eu diam metus. Donec consectetur risus quis ultricies venenatis.\

Mauris at tincidunt nunc. In est risus, egestas nec consectetur ultricies, ultricies quis orci. Aenean semper eros quam, eu facilisis mauris ornare nec. Sed vitae vestibulum libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla cursus maximus accumsan. Curabitur et felis consectetur, pretium nunc varius, feugiat mauris.`

let counter = 0;

for (let i= 0; i<lorem.length; i++){
        if(lorem[i]===" "){
        counter += 1;
    }
}

console.log(counter)

/* Esta fue nuestra primera iteracion

let etcounter = 0;

for (let i= 0; i<lorem.length; i++){
        if(lorem[i]===" "){
            if(lorem[i+1]==="e"){
                if(lorem[i+2]==="t"){
                    if(lorem[i+3]===" "){
                        etcounter += 1;
                    }
                }
            }
        }
}*/

let etcounter = lorem.match(/ et /g)

console.log(etcounter.length)