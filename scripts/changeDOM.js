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