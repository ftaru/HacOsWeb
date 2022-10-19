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
        document.getElementById('changeableWindowArea').style.background = defaultBgColor;
    } else {
        document.body.style.backgroundColor = mdMidGray;
        document.getElementById('navbarId').style.background = mdDark;
        document.getElementById('changeableWindowArea').style.background = mdLightGray;
    }
}