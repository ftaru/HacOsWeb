function calculatePrice() {
    const selectElement = document.querySelector('.versionSelect');

    selectElement.addEventListener('change', (event) => {
        const result = document.querySelector('#finalPrice');
        var fPrice = calc(event.target.value);
        result.textContent = `It will cost ${fPrice} $`;
    });
}

function calc(value) {
    if (value == "st") {
        return 20;
    } else if (value == "adv") {
        return 40;
    } else if (value == "prem") {
        return 60;
    } else {
        return 80;
    }
}

function congrats(){
    alert("Congratulations! You've just pre-ordered a game!")
}

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
    } else {  
        if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
        }  
    }  
}

calculatePrice()