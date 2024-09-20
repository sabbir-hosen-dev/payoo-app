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

//select form show btn
const addMoneyBtn = document.getElementById("add-money-btn");
const cashOutBtn = document.getElementById("cash-out-btn");

// select form
const addMoneyForm = document.getElementById("add-money-form");
const cashOutForm = document.getElementById("cash-out-form");

function formShow(value) {
  console.log(value);
  if (value) {
    addMoneyForm.classList.remove("hidden");
    cashOutForm.classList.add("hidden");
  } else {
    addMoneyForm.classList.add("hidden");
    cashOutForm.classList.remove("hidden");
  }
}

addMoneyBtn.addEventListener("click", () => formShow(true));
cashOutBtn.addEventListener("click", () => formShow(false));

// add money function
const addMoney = document.getElementById("add-money");
const addInput = document.getElementById("addInput");
const addPass = document.getElementById("addPass");
const message = document.getElementById("message");

addMoney.addEventListener("click", function (e) {
  e.preventDefault();

  if (addInput.value == "") {
    alert("Please Amount input");
    return;
  }
  if (addPass == "") {
    alert("Please passwoud input");
    return;
  }

  if (addPass.value == "1234") {
    const stringBalance = document.getElementById("balance");
    const balance = Number(stringBalance.innerText);
    let money = balance + Number(addInput.value);

    stringBalance.innerText = money;

    addInput.value = "";
    addPass.value = "";
    message.innerHTML = "";
  } else {
    message.innerHTML = rongMessage;
  }
});

// catch out function
const outMoney = document.getElementById("cash-out");
const outInput = document.getElementById("outInput");
const outPass = document.getElementById("outPass");
const rongPassMsg = document.getElementById("out-pass-message");

outMoney.addEventListener("click", function (e) {
  e.preventDefault();

  if (outInput.value == "") {
    alert("Please Amount input");
    return;
  }
  if (outPass.value == "") {
    alert("Please passwoud input");
    return;
  }

  if (outPass.value == "1234") {
    const stringBalance = document.getElementById("balance");
    const balance = Number(stringBalance.innerText);
    const inputBalance = Number(outInput.value);

    if (balance - inputBalance < 0) {
      alert("Please input balid amaoud");
    } else {
      stringBalance.innerText = balance - inputBalance;
    }
    outInput.value = "";
    outPass.value = "";
    rongPassMsg.innerHTML = "";

  } else {
    console.log("hi")
    rongPassMsg.innerHTML = rongMessage;
  }
});
