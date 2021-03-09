cir_progress = ;

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

document.getElementById('').innerHTML