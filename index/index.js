var englist = new Array(
    '제 포트폴리오 웹사이트에 오신것을 환영합니다. ',
    '프로그래밍을 좋아하는 20살 개발자입니다. ',
    '현재 Computer Vision 관련 개발을 하고 있습니다. ',
    'Embedded Software을 전공하였습니다. ',
    '항상 새로운 기술에 도전합니다. '
);
var list;
var space = '_';
var changecount = 0;
var index = 0;
var length = 0;
var lengthcount = 0;

var toggle = false;

list = englist;
function myTimer() {
    length = list[index].length;
    console.log(changecount);
    changecount++;
    if (changecount == 100) {
        changecount = 0;
        index++;
        if (index == 5) {
            index = 0;
        }
        lengthcount = 0;
    }

    if (changecount > 100 - length) {
        //delete
        const element = document.getElementById('contextchange');
        element.innerHTML =
            "<h1 class='text-white' data-text='" +
            list[index].substr(0, lengthcount) +
            space +
            "'> " +
            list[index].substr(0, lengthcount) +
            space +
            '</h1>';
        lengthcount--;
    } else if (changecount < length) {
        //create
        lengthcount++;
        const element = document.getElementById('contextchange');
        element.innerHTML =
            "<h1 class='text-white' data-text='" +
            list[index].substr(0, lengthcount) +
            space +
            "'>" +
            list[index].substr(0, lengthcount) +
            space +
            '</h1>';
    } else if (changecount == length) {
        const element = document.getElementById('contextchange');
        element.innerHTML =
            "<h1 class='text-white' data-text='" +
            list[index].substr(0, lengthcount) +
            "'> " +
            list[index].substr(0, lengthcount) +
            '</h1>';
    }
}

var myVar = setInterval(myTimer, 100);

var clickmaintext = document.getElementById('contextchange');

var agent = navigator.userAgent.toLowerCase();

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {

  alert("해당 브라우저는 지원하지 않습니다. \nMicrosoft Edge 또는 Chorme을 이용해주세요.");

}

clickmaintext.addEventListener('click', function () {});
