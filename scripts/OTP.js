const inputs = document.querySelectorAll("input");
const button = document.getElementById("otp-reset");


inputs.forEach((input, index) => {
    input.dataset.index = index;
    console.log(index);

    input.addEventListener("focus", clear);
    input.addEventListener("keydown", clear);
    input.addEventListener("keyup", onKeyUp);
});

button.addEventListener("click", clearAll);

function clearAll(event) {
    inputs.forEach(input => {
        input.value = "";
        input.disabled = false;
    })
}

function clear(event) {
    event.target.value = "";
}


function checkNumber(number) {
    return /[0-9]/g.test(number);
}

function onKeyUp(event) {
    const input = event.target;
    const value = input.value;
    const fieldIndex = +input.dataset.index;

    if (event.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }

    if (checkNumber(value)) {
        if (value.length > 0 && fieldIndex < inputs.length -1) {
            input.nextElementSibling.focus();
        }

        if (input.value !== "" && fieldIndex === inputs.length -1) {
            submit();
        }
    }
    else {
        clear(event);
        }
    }

function submit() {
    let otp = "";

    inputs.forEach((input) => {
        otp += input.value;
        input.disabled = true;
    });

    console.log(otp);
}