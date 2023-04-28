let inputs = document.querySelectorAll("form .fields input")
let submitButton = document.querySelector(".btn")
let emailInput = document.querySelector("input[name=email]")

let emailRegExp = /[\w-.]+@[\w-]+\.[\w-]{2,4}/ig

submitButton.addEventListener("click" , (e) => {
    inputs.forEach(input => {
        if (input.value === "") {
            addingInvalidClass(e, input)
        } else {
            removingInvalidClass(input)
        }
        
        if (emailInput.value.match(emailRegExp) === null) {
            addingInvalidClass(e, emailInput)
        } else {
            removingInvalidClass(emailInput)
        }
    })
})

function addingInvalidClass (event, inputfield) {
    event.preventDefault()
    inputfield.classList.add("invalid")
    inputfield.parentElement.classList.add("invalid")
    inputfield.nextElementSibling.classList.add("invalid")
}

function removingInvalidClass (inputfield) {
    inputfield.classList.remove("invalid")
    inputfield.parentElement.classList.remove("invalid")
    inputfield.nextElementSibling.classList.remove("invalid")
}