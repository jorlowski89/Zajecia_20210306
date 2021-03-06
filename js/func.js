document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("text").innerHTML = document.getElementById("input").value;

})