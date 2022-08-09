function compute() {
    var rate = document.getElementById("rate");
    var year = document.getElementById("year");
    var amount = document.getElementById("principal");
    var y = new Date().getFullYear() + Number(year.value);

    if (amount.value == 0 || amount.value < 0 || amount.value == "") {
        alert("Enter a positive number");
        amount.focus();
        return false;
    }
    else {
        var SI = (amount.value * rate.value * year.value) / 100;
        var r = document.getElementById("result");
        r.innerHTML = "<br><br><span style='margin-left: 10%;'> If you deposit <mark>" + amount.value + "</mark>,<br><span style='margin-left: 10%;'>at an interest rate of <mark>" + rate.value + "%</mark>.<br><span style='margin-left: 10%;'>You will receive an amount of <mark>" + SI + "</mark>,<br><span style='margin-left: 10%;'>in the year <mark>" + y + "</mark></span>"
    }
}