//Let's add querySelectors.
let button = document.querySelector(".btn");
   
//Let's add an EventListener for the button.
button.addEventListener("click", CalculateBMI);

//Let's declare the function.
function CalculateBMI(e) {
    e.preventDefault()
    //Let's target the information.
    //First, the first name and lastname
    let firstname = document.querySelector(".firstname");
    let lastname = document.querySelector(".lastname");

    //After that, we target the height and weight. 
    let height = document.querySelector(".height");
    let weight = document.querySelector(".weight");
    

    //Then, we need to find the formula for BMI. The best way it to Google it.
    //The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters. When using English measurements, pounds should be divided by inches squared.
    //Create a variable to show the formula for BMI above.
    //So, it should work with any number.
    let BMI = weight.value/(height.value**2);
    
    //Let us convert it to 2 decimal places.
    BMI = BMI.toFixed(2);

    

    //Log it in your console to check if it works there.
    //If it does, it will work on your browser.
    //If not, then check the code above.
    console.log(BMI);

    //Then target the result paragraph we made in the html earlier.
    let p = document.querySelector(".result");

    //Let's assign BMI value to the "p" variable.
    // p.innerHTML = `Your BMI value is ${BMI}`;

    //But we need to make form validation. Telling the user that you haven't finished filling in the Calculator
    //This is called form validation. When you enter data, the browser and/or the web server will check to see that the data is in the correct format and within the constraints set by the application.
    //Form validation is useful when you need a user to input information that is expected to meet certain requirements. There are two validation standards: server side validation and client side validation. There are several ways to achieve accurate form validation for each of these standards.
    //Form validation is when the computor checks your work to see if it is at the right place in the right formats and reaches the requirments of the said webpage. 
    if (firstname.value == "") {
        setTimeout(() => {
            p.innerHTML = "Please enter a value in the First Name box."
            p.style.color = "red"
            p.style.width = "500px"
            p.style.textAlign = "center"
            setTimeout(() =>{
                p.innerHTML = ""
            },1500)
        },100)
    } else if(lastname.value == ""){
        setTimeout(() =>{
            p.innerHTML = "Please enter a value in the Last Name box."
            p.style.color = "red"
            p.style.width = "500px"
            p.style.textAlign = "center"
            setTimeout(() =>{
                p.innerHTML = ""
            }, 1500)
        },)
    } else if(height.value == ""){
        setTimeout(() =>{
            p.innerHTML = "Please enter a value in the Height box."
            p.style.color = "red"
            p.style.width = "500px"
            p.style.textAlign = "center"
            setTimeout(() =>{
                p.innerHTML = ""
            },1500)
        },100)
    } else if(weight.value == ""){
        setTimeout(() =>{
            p.innerHTML = "Please enter a value in the Weight box."
            p.style.color = "red"
            p.style.width = "500px"
            p.style.textAlign = "center"
            setTimeout(() =>{
                p.innerHTML = ""
            },1500)
        },100)
    } else {
        //Now we will see what are the value ranges of a BMI
        //BMI ranges:
        // under 18.5 – This is described as underweight. 
        //between 18.5 and 24.9 – This is described as the 'healthy range'. between 25 and 29.9 – This is described as overweight. between 30 and 39.9 – This is described as obesity.
        //Let us also add a variable to show what the first name and last name of the typed word is.
        
            names = firstname.value; 
            named = lastname.value;
        
        if (BMI < 18.5) {
            p.innerHTML = `${names}  ${named}, Your BMI value is ${BMI}kg/m<sup>2</sup>. You are underweight, please see a medical doctor.`
            p.style.color = "red"
            p.style.width = "500px"
            p.style.textAlign = "center"
            clearBMI()
        } else if(BMI >= 18.5 && BMI <= 24.9){
            p.innerHTML = `${names}  ${named}, Your BMI value is ${BMI}kg/m<sup>2</sup>. You are have a healthy BMI. Good Job!`
            p.style.color = "green"
            p.style.width = "500px"
            p.style.textAlign = "center"
            clearBMI()
        } else if(BMI >= 24.9 && BMI <= 29.9){
            p.innerHTML = `${names}  ${named}, Your BMI value is ${BMI}kg/m<sup>2</sup>. You are overweight, please see a medical doctor.`
            p.style.color = "red"
            p.style.width = "500px"
            p.style.textAlign = "center"
            clearBMI()
        } else{
            p.innerHTML = `${names}  ${named}, Your BMI value is ${BMI}kg/m<sup>2</sup>. You are obese, please see a medical doctor.`
            p.style.color = "red"
            p.style.width = "500px"
            p.style.textAlign = "center"
            clearBMI()
        };
    };
    
};

//Let us create a function that clear all the boxes after calculating the BMI.
function clearBMI() {
    let firstname = document.querySelector(".firstname");
    let lastname = document.querySelector(".lastname");
    let height = document.querySelector(".height");
    let weight = document.querySelector(".weight");

    firstname.value = "";
    lastname.value = "";
    height.value = "";
    weight.value = "";
}

   

