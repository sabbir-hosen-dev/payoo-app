const rongMessage = `
                <div role="alert" class="alert alert-error px-4 p-1  text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span >Wrong Password!</span>
                </div>
`;

//add money btn click to form hide and add
const addMoneyBtn = document.getElementById("add-money-btn");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const addMoneyForm = document.getElementById("add-money-form");
  const cashOutForm = document.getElementById("cash-out-form");
  addMoneyForm.classList.remove("hidden");
  cashOutForm.classList.add("hidden");
});

//catch out money btn click to form hide and add
const cashOutBtn = document.getElementById("cash-out-btn");
cashOutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const addMoneyForm = document.getElementById("add-money-form");
  const cashOutForm = document.getElementById("cash-out-form");
  addMoneyForm.classList.add("hidden");
  cashOutForm.classList.remove("hidden");
});

// add money function
const addMoney = document.getElementById("add-money");
const addInput = document.getElementById("addInput");
const addPass = document.getElementById("addPass");
const message = document.getElementById("message");


addMoney.addEventListener("click", function (e) {
  e.preventDefault();

  if (addInput.value == "" ) {
    alert("Please Amount input");
  }
  if ( addPass == "") {
    alert("Please passwoud input");
  }

  if (addPass.value == "1234") {
    const stringBalance = document.getElementById("balance");
    const balance = Number(stringBalance.innerText);
    let money = balance + Number(addInput.value)

    stringBalance.innerText = money;

    addInput.value = "";
    addPass.value = "";
    message.innerHTML = "" 
  }
  else{
    message.innerHTML = rongMessage 
  }
});


