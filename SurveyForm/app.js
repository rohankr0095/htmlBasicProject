function handleName() {
    //They will perform some action upon user interaction.
    var n = document.getElementById("name").value;

    if (n.length == 0) {
        alert('Sorry Name cannot be empty');
    }
}


function handleEmail() {
    var e = document.getElementById("email").value;
    if (e.length == 0) {
        alert('Email cannot be empty');
    }
}

function handleAge() {
    var a = document.getElementById("age").value;
    console.log(a);
}

function handleComment() {
    var c = document.getElementById("comment").value;
    console.log(c);
    if (c.length == 0) {
        alert('Please give us your precious suggestions');
    }
}

function handleRole() {
    var role = document.getElementById("role").value;
    console.log(role);

    if (role == "Select an option") {
        alert('Please choose a valid option');
    }
}
function handleLike() {
    var like = document.getElementById("like").value;
    console.log(like);

    if (like == "Select an option") {
        alert('Please choose a valid option');
    }
}

function handleRadio() {
    var r;
    if (document.getElementById('r1').checked) {
        r = document.getElementById('r1').value;
        console.log(r);
    }
    if (document.getElementById('r2').checked) {
         r = document.getElementById('r2').value;
        console.log(r);
    }
    if (document.getElementById('r3').checked) {
        r = document.getElementById('r3').value;
        console.log(r);
    }
}
var checkedArray = [];
function handleCheckBox(){
  
    if((document.getElementById("c1").checked)&&(checkedArray.indexOf(document.getElementById("c1").value)==-1)){
        var c1 = document.getElementById("c1").value;
        checkedArray.push(c1);
    }
    if(! document.getElementById("c1").checked){
       //logic
       // find the index of the element in the checkedArray
       var c1 = document.getElementById("c1").value;
       // to find the index of element in an array.
       var index  = checkedArray.indexOf(c1); 
       // delete that element
       if(index!=-1)
       checkedArray.splice(index,1);
    }
    if((document.getElementById("c2").checked)&&(checkedArray.indexOf(document.getElementById("c2").value)==-1)){
        var c2 = document.getElementById("c2").value;
        checkedArray.push(c2);
    }
    if(! document.getElementById("c2").checked){
        var c2 = document.getElementById("c2").value;
        var index  = checkedArray.indexOf(c2);
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c3").checked)&&(checkedArray.indexOf(document.getElementById("c3").value)==-1)){
        var c3 = document.getElementById("c3").value;
        checkedArray.push(c3);
    }
    if(! document.getElementById("c3").checked){
        var c3 = document.getElementById("c3").value;
        var index  = checkedArray.indexOf(c3);
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c4").checked)&&(checkedArray.indexOf(document.getElementById("c4").value)==-1)){
        var c4 = document.getElementById("c4").value;
        checkedArray.push(c4);
    }
    if(! document.getElementById("c4").checked){
        var c2 = document.getElementById("c4").value;
        var index  = checkedArray.indexOf(c4); 
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c5").checked)&&(checkedArray.indexOf(document.getElementById("c5").value)==-1)){
        var c5 = document.getElementById("c5").value;
        checkedArray.push(c5);
    }
    if(! document.getElementById("c5").checked){
        var c5 = document.getElementById("c5").value;
        var index  = checkedArray.indexOf(c5);
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c6").checked)&&(checkedArray.indexOf(document.getElementById("c6").value)==-1)){
        var c6 = document.getElementById("c6").value;
        checkedArray.push(c6);
    }
    if(! document.getElementById("c6").checked){
        var c6 = document.getElementById("c6").value;
        var index  = checkedArray.indexOf(c6);
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c7").checked)&&(checkedArray.indexOf(document.getElementById("c7").value)==-1)){
        var c7 = document.getElementById("c7").value;
        checkedArray.push(c7);
    }
    if(! document.getElementById("c7").checked){
        var c7 = document.getElementById("c7").value;
        var index  = checkedArray.indexOf(c7);
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c8").checked)&&(checkedArray.indexOf(document.getElementById("c8").value)==-1)){
        var c8 = document.getElementById("c8").value;
        checkedArray.push(c8);
    }
    if(! document.getElementById("c8").checked){
        var c8 = document.getElementById("c8").value;
        var index  = checkedArray.indexOf(c8); 
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c9").checked)&&(checkedArray.indexOf(document.getElementById("c9").value)==-1)){
        var c9 = document.getElementById("c9").value;
        checkedArray.push(c9);
    }
    if(! document.getElementById("c9").checked){
        var c9 = document.getElementById("c9").value;
        var index  = checkedArray.indexOf(c9); 
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c10").checked)&&(checkedArray.indexOf(document.getElementById("c10").value)==-1)){
        var c10 = document.getElementById("c10").value;
        checkedArray.push(c10);
    }
    if(! document.getElementById("c10").checked){
        var c10 = document.getElementById("c10").value;
        var index  = checkedArray.indexOf(c10); 
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

     if((document.getElementById("c11").checked)&&(checkedArray.indexOf(document.getElementById("c11").value)==-1)){
        var c11 = document.getElementById("c11").value;
        checkedArray.push(c11);
    }
    if(! document.getElementById("c11").checked){
        var c11 = document.getElementById("c11").value;
        var index  = checkedArray.indexOf(c11); 
        if(index!=-1)
        checkedArray.splice(index,1);
 
     }

    console.log(checkedArray);

}



// function handleSubmit(){
//     var name = document.getElementById("name").value;








//     var obj = {
//         "name" : name,
//         "age" : age
//     } 
// }