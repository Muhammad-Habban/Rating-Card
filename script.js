var ratingValue;

function myFunction() {
    document.getElementById('circleChange1').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange1').style.color = "white";
    document.getElementById('circleChange2').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange2').style.color = "hsl(217, 12%, 63%)";
    document.getElementById('circleChange3').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange3').style.color = "hsl(217, 12%, 63%)";
    document.getElementById('circleChange4').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange4').style.color = "hsl(217, 12%, 63%)";
    document.getElementById('circleChange5').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange5').style.color = "hsl(217, 12%, 63%)";
    ratingValue = "1";
}

function myFunction1() {
    document.getElementById('circleChange1').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange1').style.color = "white";
    document.getElementById('circleChange2').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange2').style.color = "white";
    document.getElementById('circleChange3').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange3').style.color = "hsl(217, 12%, 63%)";
    document.getElementById('circleChange4').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange4').style.color = "hsl(217, 12%, 63%)";
    document.getElementById('circleChange5').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange5').style.color = "hsl(217, 12%, 63%)";
    ratingValue = "2";
}

function myFunction2() {
    document.getElementById('circleChange1').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange1').style.color = "white";
    document.getElementById('circleChange2').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange2').style.color = "white";
    document.getElementById('circleChange3').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange3').style.color = "white";
    document.getElementById('circleChange4').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange4').style.color = "hsl(217, 12%, 63%)";
    document.getElementById('circleChange5').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange5').style.color = "hsl(217, 12%, 63%)";
    ratingValue = "3";
}

function myFunction3() {
    document.getElementById('circleChange1').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange1').style.color = "white";
    document.getElementById('circleChange2').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange2').style.color = "white";
    document.getElementById('circleChange3').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange3').style.color = "white";
    document.getElementById('circleChange4').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange4').style.color = "white";
    document.getElementById('circleChange5').style.backgroundColor = "rgba(39, 45, 51, 255)";
    document.getElementById('circleChange5').style.color = "hsl(217, 12%, 63%)";
    ratingValue = "4";
}

function myFunction4() {
    document.getElementById('circleChange1').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange1').style.color = "white";
    document.getElementById('circleChange2').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange2').style.color = "white";
    document.getElementById('circleChange3').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange3').style.color = "white";
    document.getElementById('circleChange4').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange4').style.color = "white";
    document.getElementById('circleChange5').style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById('circleChange5').style.color = "white";
    ratingValue = "5";
}

function btnFunction() {
    // e.preventDefault()
    document.getElementById('card').innerHTML = `
        <div id="card2">
        <div class="img">
            <img src="./images/illustration-thank-you.svg" alt="">
        </div>
        <div class="rating">
            <p class="special">You selected ${ratingValue} out of 5</p>
        </div>
        <h1> Thank you!</h1>
        <p class="para">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>

    </div>
        `;
}