var list = new Array('hello!', 'pianist', 'developer', 'hoban', 'floppy');
var space = '_'
var changecount = 0;
var index = 0;
var length = 0;
var lengthcount = 0;
function myTimer() {
    length = list[index].length;
    console.log(length);
    changecount++;
    if(changecount==50){
        changecount = 0;
        index++;
        if(index==5){
            index=0;
        }
        lengthcount = 0;
    }

    if (changecount > 50 - length) { //delete
        const element = document.getElementById('contextchange');
        element.innerHTML = "<h1 class='text-white' data-text='" + list[index].substr(0,lengthcount) + space + "'> " + list[index].substr(0,lengthcount) +  space +'</h1>';
        lengthcount--;
    }
    else if (changecount < length * 2){ //create
        if(changecount % 2 == 0){
            lengthcount++;
            const element = document.getElementById('contextchange');
            element.innerHTML = "<h1 class='text-white' data-text='" + list[index].substr(0,lengthcount) + space +"'>" + list[index].substr(0,lengthcount) + space +'</h1>';
        }
    }
    else if (changecount == length * 2){
        const element = document.getElementById('contextchange');
        element.innerHTML = "<h1 class='text-white' data-text='" + list[index].substr(0,lengthcount) +"'> " + list[index].substr(0,lengthcount) +'</h1>';
    }

    
}

var myVar = setInterval(myTimer, 100);
