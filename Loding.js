const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Sign in inpute
const SignIn_email = document.getElementById("SignIn_email");
const SignIn_password = document.getElementById("SignIn_password");
const btn_SignUp = document.getElementById("btn_SignUp");

// Sign up inpute  | Create Account |
const SignUp_email = document.getElementById("SignUp_email");
const SignUp_password = document.getElementById("SignUp_password");
const SignUp_Name = document.getElementById("SignUp_Name");
const btn_SignIn = document.getElementById("btn_SignIn");


// const input = document.querySelectorAll("input");

// // input.addEventListener("focus" , function () {
// //   console.log('bhbhs');

// // })
// input.onChange = function() {
//     // input.style.border = "solid red 1px";
//     console.log('bhbhs');

// }

// error validition
let error = false;

let sign_data; // هخزن بداخلها البيانات

// Create function in crud
if (localStorage.data_sign != null) {
  sign_data = JSON.parse(localStorage.data_sign);
} else {
  sign_data = [];
}

btn_SignUp.onclick = function () {
  // save obj data in store
  let data_sign = {
    id : Math.random(),
    SignUp_Name: SignUp_Name.value.toLowerCase(),
    SignUp_email: SignUp_email.value.toLowerCase(),
    SignUp_password: SignUp_password.value,
  };
  // // validation in data
  // if (SignUp_Name.value == "") {
  //   document.querySelector("#isError1").innerHTML = "Please, enter your name";
  //   error = true;
  // } else {
  //   document.querySelector("#isError1").innerHTML = " ";
  // }
  // // validation in data
  // if (SignUp_email.value == "") {
  //   document.querySelector("#isError2").innerHTML = "Please, enter your email";
  //   error = true;
  // } else {
  //   document.querySelector("#isError2").innerHTML = " ";
  // }


  sign_data.forEach(items => {
    
if (SignUp_password.value === items.SignUp_password) {
  console.log(items);
}else{
  console.log('noo found');
}



  })
  // validation in data
  if (SignUp_password.value == "") {
    document.querySelector("#isError3").innerHTML =
      "Please, enter your password";
    error = true;
  }else if (SignUp_password.value == items.SignUp_password) {
    document.querySelector("#isError3").innerHTML =
    "Please, enter strong password";
    error = true;
  
    
  } else {
    document.querySelector("#isError3").innerHTML = " ";
  }
 


  // if (error) {
  //   error = false;
  // } else {
  //   error = true;
  //   sign_data.push(data_sign);
  //   clearData_sign();
  //   alert("Successfully");
  // }
  // localStorage.setItem("data_sign", JSON.stringify(sign_data));
  // // if click other delete error masseg
  // document.querySelector("#isError4").innerHTML = " ";
  // document.querySelector("#isError5").innerHTML = " ";
};
function clearData_sign() {
  SignUp_Name.value = " ";
  SignUp_email.value = " ";
  SignUp_password.value = "";
}

// if typing delete masseg error
function typeing() {
  document.querySelector("#isError1").innerHTML = " ";
  document.querySelector("#isError2").innerHTML = " ";
  document.querySelector("#isError3").innerHTML = " ";
  document.querySelector("#isError4").innerHTML = " ";
  document.querySelector("#isError5").innerHTML = " ";
  SignIn_email.style.border = "1px solid green";
  SignIn_password.style.border = "1px solid green";

}

btn_SignIn.onclick = function (e) {
  e.preventDefault();

  // let Filter_email = sign_data.map((datafilter) => {
  // return datafilter.SignUp_email
  // });

  // let Filter_pss = sign_data.map((datafilter) => {
  // return datafilter.SignUp_password
  // });

  // let FiterName = [];

  // Filter_email.forEach((Filters) => {
  // if (Filters === SignIn_email.value.toLowerCase() ) {
  //     FiterName.push(Filters);
  // }
  // });

  // Filter_pss.forEach((Filters) => {
  // if ( Filters === SignIn_password.value) {
  //     FiterName.push(Filters);
  // }
  // });



  
  // // // validation in data
  if (SignIn_email.value == "") {
    document.querySelector("#isError4").innerHTML = "Please, enter your email";
    SignIn_email.style.border = "solid red 1px";
    error = true;
  } else {
    document.querySelector("#isError4").innerHTML = " ";
    SignIn_email.style.border = "none";
  }
  // validation in data
  // if (SignIn_password.value == "") {
  //   document.querySelector("#isError5").innerHTML = "Please, enter your password";
  //   SignIn_password.style.border = "solid red 1px";
  //   error = true;
  // } else {
  //   document.querySelector("#isError5").innerHTML = " ";
  //   SignIn_password.style.border = "none";
  // }



  if (error) {
    error = false;
  } else {
    error = true;





    sign_data.map((items) => {
      // console.log(items.SignUp_email);
    
      if (SignIn_email.value.toLowerCase() === items.SignUp_email) {
        // document.querySelector("#isError4").innerHTML = "Email is not found ";
        // error = true;
        console.log(items.SignUp_password);


      }else{
        console.log('no');
      }
      //  else {
      //   document.querySelector("#isError4").innerHTML = " ";
      //   SignIn_password.style.border = "none";
    
      //   alert("ook");
      // }
    });
    









      // if (SignIn_email.value.toLowerCase() !== sign_data.SignUp_email) {
      //   document.querySelector("#isError4").innerHTML = "Email is not found ";
      //   error = true;
      // } 
      // // else if (SignIn_password.value !== "000") {
      // //   document.querySelector("#isError5").innerHTML = "Password is not found";
      // //   error = true;
      // // }
      //  else {
      //   document.querySelector("#isError4").innerHTML = " ";
      //   // document.querySelector("#isError5").innerHTML = " ";
      //   SignIn_password.style.border = "none";
      //   alert('ook')
      //   console.log('fninfnnfnknndjnjknd ');
      //   // let forme = document.querySelector("#form_sign_in");
      //   // forme.action = "CRUD.html";
      // }
    
  }











  // if click other delete error masseg
  document.querySelector("#isError1").innerHTML = " ";
  document.querySelector("#isError2").innerHTML = " ";
  document.querySelector("#isError3").innerHTML = " ";
};













let admn = document.querySelector("#admin");
admin.onclick = function () {
  typeing();
};

// // show password
let show = false;
function show_pss_sign_in() {
  if (show) {
    SignIn_password.setAttribute("type", "text");
    show = false;
    let show_mypss = document.querySelector("#show_mypss");
    show_mypss.innerHTML = "visibility";
  } else {
    let show_mypss = document.querySelector("#show_mypss");
    show_mypss.innerHTML = "visibility_off";
    SignIn_password.setAttribute("type", "password");
    show = true;
  }
}

function show_pss_sign_up() {
  if (show) {
    SignUp_password.setAttribute("type", "text");
    show = false;
    let show_mypss = document.querySelector("#show_mypss");
    show_mypss.innerHTML = "visibility";
  } else {
    let show_mypss = document.querySelector("#show_mypss");
    show_mypss.innerHTML = "visibility_off";
    SignUp_password.setAttribute("type", "password");
    show = true;
  }
}
