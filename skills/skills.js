var array = [
    ['skills-pictures/html.png', '77', '#f16529', 'HTML'],
    ['skills-pictures/css.png', '80', '#2965f1', 'CSS'],
    ['skills-pictures/javascript.png', '86', '#f7e018', 'JS'],
    ['skills-pictures/sass.png', '65', '#ce679a', 'Sass'],
    ['skills-pictures/django.png', '75', '#092E20', 'Django'],
    ['skills-pictures/graphql.png', '58', '#E535AB', 'GraphQL'],
    ['skills-pictures/react.svg', '80', '#53C1DE', 'React'],
    ['skills-pictures/ts.png', '46', '#2D79C7', 'TS'],
    ['skills-pictures/redux.png', '45', '#382A4E', 'Redux'],
    ['skills-pictures/nodejs.png', '66', '#74AB63', 'NodeJS'],
    ['skills-pictures/postgresql.png', '70', '#336791', 'pgSQL'],
    ['skills-pictures/mongodb.png', '38', '#4FB053', 'mongoDB'],
];
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
        <h3 style="color: white; text-align:center; margin: 10px 0px;">${array[index][1]}%</h3>
    </div>
    
    `;
    document.getElementById('additemweb').innerHTML += cir_progress;
}
console.log(cir_progress);
