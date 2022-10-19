function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addBuyButton() {
    var btnDiv = document.getElementById("buyButtonContainer");

    if (btnDiv !== null) {
        var elementToDelete = document.getElementById("buyButtonContainer");
        elementToDelete.remove();
        return;
    }

    var newDiv = document.createElement("div");
    var oldDiv = document.getElementById("agreeFlag");
    newDiv.className = "singleButtonContainer";
    newDiv.id = "buyButtonContainer";
    insertAfter(newDiv, oldDiv);


    var newDiv2 = document.createElement("button");
    newDiv2.innerHTML = "Buy rn!";
    newDiv2.onclick = function() { congrats(); };
    newDiv.appendChild(newDiv2);
}

function changeTheme(){
    var defaultTheme = "rgb(0, 128, 128)"
    var darkTheme = "rgb(111, 115, 120)";
    var mdDark = "rgb(38, 50, 56)";
    var mdLightGray = "rgb(176, 190, 197)";
    var mdMidGray = "rgb(55, 71, 79)";

    var currentCSSTheme = window.getComputedStyle(document.body, null).backgroundColor;
    const defaultBgColor = "silver";

    if (currentCSSTheme !== defaultTheme) {
        document.body.style.backgroundColor = defaultTheme;  
        document.getElementById('navbarId').style.background = defaultBgColor; 
        document.getElementById('buyWindowContent').style.background = defaultBgColor;
    } else {
        document.body.style.backgroundColor = mdMidGray;
        document.getElementById('navbarId').style.background = mdDark;
        document.getElementById('buyWindowContent').style.background = mdLightGray;
    }
}