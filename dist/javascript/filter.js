function toggleSocialFilter(button, section, isDefault) {
    if (isDefault === true) {
        let previousButton;
    } else {
        let previousButton
    }
    let buttonClicked = button;

    let previousSection;
    let nextSection = section;

    const oldButton = document.getElementById(previousButton);
    const newButton = document.getElementById(buttonClicked);

    const oldSection = document.getElementById(previousSection);
    const newSection = document.getElementById(nextSection);

    oldButton.style.color = "";
    newButton.style.color = "blue";

    oldSection.style.display = "none";
    newSection.style.display = "block";

    previousButton = button;
    previousSection = section;
}