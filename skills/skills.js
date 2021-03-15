var array = [['skills-pictures/html.png','78','#f16529','HTML'],
             ['skills-pictures/css.png','90','#2965f1','CSS'],
             ['skills-pictures/javascript.png','85','#f7e018','JS'],
             ['skills-pictures/sass.png','66','#ce679a','Sass']];

for (let index = 0; index < array.length; index++) {
    cir_progress += `
    <div class="col-md-3 col-sm-6 pt-5 item-div">
                                    <img src="${a}" class="skill-img">
                                    <div class="progress" data-percentage="${a}">
                                        <span class="progress-left">
                                            <span class="progress-bar" style="border-color: ${a};"></span>
                                        </span>
                                        <span class="progress-right">
                                            <span class="progress-bar" style="border-color: ${a};"></span>
                                        </span>
                                        <div class="progress-value">
                                            
                                            <div>
                                                <span>${a}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    `
    
}
console.log(cir_progress);
document.getElementById('additemweb').innerHTML(cir_progress);