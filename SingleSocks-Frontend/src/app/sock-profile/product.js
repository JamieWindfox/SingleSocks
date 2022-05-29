document.getElementById("technicalInformationLabel").addEventListener("click", mouseClicked);
document.getElementById("technicalInformationLabel").addEventListener("mouseover", mouseOver);
document.getElementById("technicalInformationLabel").addEventListener("mouseleave", mouseLeave);

document.getElementById("productDescriptionLabel").addEventListener("click", mouseClicked);
document.getElementById("productDescriptionLabel").addEventListener("mouseover", mouseOver);
document.getElementById("productDescriptionLabel").addEventListener("mouseleave", mouseLeave);

document.getElementById("cartButton").addEventListener("mouseover", mouseOver);
document.getElementById("cartButton").addEventListener("mouseleave", mouseLeave);
document.getElementById("purchaseButton").addEventListener("mouseover", mouseOver);
document.getElementById("purchaseButton").addEventListener("mouseleave", mouseLeave);

let infoButtons = true;

function mouseClicked() {

    if (document.getElementById("techInf").checked) {
        infoButtons = false;
    } else {
        infoButtons = true;
    }

    if (infoButtons) {
        document.getElementById("productDescriptionLabel").style.backgroundColor = "#CEE8F8CC";
        document.getElementById("productDescriptionLabel").style.color = "#084057";


        document.querySelector(".productDescriptionContainer").style.display = "none";
        document.querySelector(".technicalInfoContainer").style.display = "block";

    } else {
        document.getElementById("technicalInformationLabel").style.backgroundColor = "#CEE8F8CC";
        document.getElementById("technicalInformationLabel").style.color = "#084057";


        document.querySelector(".productDescriptionContainer").style.display = "block";
        document.querySelector(".technicalInfoContainer").style.display = "none";
    }
}

function mouseOver() {

    this.style.backgroundColor = "#084057"
    this.style.color = "#c1e3f3";
}

function mouseLeave() {

    if (infoButtons && this.id !== "technicalInformationLabel") {

        if (this.tagName.toLowerCase() === "button") {
            this.style.backgroundColor = "rgb(146,194,214)";
        } else this.style.backgroundColor = "#CEE8F8CC"

        this.style.color = "#084057";

    } else if (!infoButtons && this.id !== "productDescriptionLabel") {

        if (this.tagName.toLowerCase() === "button") {
            this.style.backgroundColor = "rgb(146,194,214)";
        } else this.style.backgroundColor = "#CEE8F8CC"

        this.style.color = "#084057";
    }
}
