var array = [['skills-pictures/html.png','77','#f16529','HTML'],
             ['skills-pictures/css.png','80','#2965f1','CSS'],
             ['skills-pictures/javascript.png','86','#f7e018','JS'],
             ['skills-pictures/sass.png','65','#ce679a','Sass']];
var cir_progress;

for (let index = 0; index < array.length; index++) {
    cir_progress = `
    <div class="col-md-3 col-sm-6 pt-5 item-div">
        <img src="${array[index][0]}" class="skill-img">
        <div class="progress" data-percentage="${array[index][1]}">
            <span class="progress-left">
                <span class="progress-bar" style="border-color: ${array[index][2]};"></span>
            </span>
            <span class="progress-right">
                <span class="progress-bar" style="border-color: ${array[index][2]};"></span>
            </span>
            <div class="progress-value">
                <div>
                    <span>${array[index][3]}</span>
                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById('additemweb').innerHTML += cir_progress;
}
console.log(cir_progress);
