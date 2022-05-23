//creating count variable
let count = 0;
console.log(count);

//creating function
function myfunction(){
    //creating increment
    count = ++count;
    console.log(count);

    //linking to h2
    document.getElementById('count').innerText = count
}

//reset function
function myfun(){
    count = 0
    document.getElementById('count').innerText = count
}