//login

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
                  <span >Something Wrong !</span>
                </div>
`;

const login = document.getElementById("login");

login.addEventListener("click", function (e) {
  e.preventDefault();
  const number = document.getElementById("number").value;
  const password = document.getElementById("password").value;

  if (number == "0" && password == "1234") {
    
  } else {
    document.getElementById("message").innerHTML = rongMessage;
  }
});
