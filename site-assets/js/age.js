function calculate_age(dob) {
    var today = new Date(Date.now()) 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    console.log(age_dt)

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

age = calculate_age(new Date("2003-05-13T00:00:00Z")) 
document.getElementById("bio").innerHTML = "Hey! I'm <mark>Aditya S. Diwakar</mark>, a " + age + "-year old software\nengineer & economic analyst."
