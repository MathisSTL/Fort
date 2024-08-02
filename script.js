function validateAnswer() {
    var userInput = document.getElementById("userInput").value;
    var message = document.getElementById("message");
    
    if (userInput.trim().toLowerCase() === "onze") {
        message.innerHTML = '<a href="https://mathisstl.github.io/IceBlocksTTN/" target="_blank">https://mathisstl.github.io/IceBlocksTTN/</a>';
        message.style.color = "green";
    } else {
        message.textContent = "Essayez encore";
        message.style.color = "red";
    }
}
