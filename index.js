function doAdd(){
    let first = document.getElementById("first").value;
    let last = document.getElementById("second").value;
    let ans=document.getElementById("output");
    ans=Number(first)+ Number(last);
    if(ans<0){
        document.getElementById("output").style.color='red';
    }
    else {
        document.getElementById("output").style.color = 'black';
    }
    console.log(ans);
    document.getElementById("output").innerHTML= String(ans);
}



function doSub(){
    let first = document.getElementById("first").value;
    let last = document.getElementById("second").value;
    let ans=document.getElementById("output");
        ans=Number(first)- Number(last);
        if(ans<0){
            document.getElementById("output").style.color='red';
        }
        else {
            document.getElementById("output").style.color = 'black';
        }
        console.log(ans);
       document.getElementById("output").innerHTML= String(ans);
}

function doMult(){
    let first = document.getElementById("first").value;
    let last = document.getElementById("second").value;
    let ans=document.getElementById("output");
    ans=Number(first)* Number(last);
    if(ans<0){
        document.getElementById("output").style.color='red';
    }
    else {
        document.getElementById("output").style.color = 'black';
    }
    console.log(ans);
    document.getElementById("output").innerHTML= String(ans);
}

function doDiv(){
    let first = document.getElementById("first").value;
    let last = document.getElementById("second").value;
    let ans=document.getElementById("output");
    ans=Number(first)/ Number(last);
    if(ans<0){
        document.getElementById("output").style.color='red';
    }
    else {
        document.getElementById("output").style.color = 'black';
    }
    console.log(ans);
    document.getElementById("output").innerHTML= String(ans);
}
function doPow(){
    let first = document.getElementById("first").value;
    let last = document.getElementById("second").value;
    let ans=document.getElementById("output");
    ans = 1
    for(let i = 0;i<last;i++){
        ans*=first;
    }

    if(ans<0){
        document.getElementById("output").style.color='red';
    }
    else {
        document.getElementById("output").style.color = 'black';
    }
    console.log(ans);
    document.getElementById("output").innerHTML= String(ans);
}
function doClear() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "black";
}
