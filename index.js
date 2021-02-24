var list = new Array('developer', 'pianist', 'seungho', 'hoban', 'floppy');
var count = 0;

function myTimer() {
    if (count == 5) {
        count = 0;
    }
    const element = document.getElementById('contextchange');
    element.innerHTML = "<h1 class='text-white' data-text='" + list[count] + "'>" + list[count] + '</h1>';
    count++;
}

var myVar = setInterval(myTimer, 2000);
