let button = document.getElementsByClassName("button");
for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
        e.preventDefault();
        let index = e.target.getAttribute("att");
        console.log(index);
        if (index == "good") {
            Number(localStorage.point) += 8;
        } else if (index == "bad") {
            Number(localStorage.point) += 0;
        } else {
            Number(localStorage.point) += 5;
        };
    })
}