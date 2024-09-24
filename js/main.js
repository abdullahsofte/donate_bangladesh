// histpry content show and donation content hide
document
  .getElementById("show-history-content-btn")
  .addEventListener("click", function () {
    document.getElementById("donation-content").classList.add("hidden");
    document.getElementById("history-content").classList.remove("hidden");
  });
//  doantion content show and history content hide

document
  .getElementById("show-donation-content-btn")
  .addEventListener("click", function () {
    document.getElementById("donation-content").classList.remove("hidden");
    document.getElementById("history-content").classList.add("hidden");
  });

// add doante function
document
  .getElementById("donate-now")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addAmountFeild = document.getElementById("donate-input-feild").value;

    const currentDonationBalance =
      document.getElementById("donation-balence").innerText;
    const amountBlanace = document.getElementById("amount-blance").innerText;
    const amountBanalceNumber = parseFloat(amountBlanace);
    const currentBalanceNumber = parseFloat(currentDonationBalance);
    const addAmountFeildNumber = parseFloat(addAmountFeild);

    const newDonationBalance = currentBalanceNumber + addAmountFeildNumber;
    const amountRemoveFromStock = amountBanalceNumber - addAmountFeildNumber;
    document.getElementById("donation-balence").innerText = newDonationBalance;
    document.getElementById("amount-blance").innerText = amountRemoveFromStock;

    // script for donation date time zone
    const d = new Date();
    document.getElementById("dateTime").innerHTML = " Date : " + d;

    // script for get donation title
    const donationTitle = document.getElementById("donation-title").innerText;
    document.getElementById("donate_title_get").innerText =
      addAmountFeildNumber + " " + donationTitle;
  });



//   document
//   .getElementById("donate-now")
//   .addEventListener("click", function (event) {
//     event.preventDefault();

//     const addAmountFeild = document.getElementById("donate-input-feild").value;

//     // Convert input values to numbers for calculations
//     const currentDonationBalance =
//       document.getElementById("donation-balence").innerText;
//     const amountBlanace = document.getElementById("amount-blance").innerText;
//     const amountBanalceNumber = parseFloat(amountBlanace);
//     const currentBalanceNumber = parseFloat(currentDonationBalance);
//     const addAmountFeildNumber = parseFloat(addAmountFeild);

//     // Check if the input amount is 0 or invalid
//     if (addAmountFeildNumber <= 0 || isNaN(addAmountFeildNumber)) {
//       alert("Insufficient or invalid donation amount. Please enter a valid number.");
//       return;
//     }

//     // Check if the input amount exceeds the available balance
//     if (addAmountFeildNumber > amountBanalceNumber) {
//       alert("Insufficient balance to donate this amount.");
//       return;
//     }

//     // Calculate new balances
//     const newDonationBalance = currentBalanceNumber + addAmountFeildNumber;
//     const amountRemoveFromStock = amountBanalceNumber - addAmountFeildNumber;

//     // Update the UI with new balance and donation information
//     document.getElementById("donation-balence").innerText = newDonationBalance;
//     document.getElementById("amount-blance").innerText = amountRemoveFromStock;

//     // Script for donation date time zone
//     const d = new Date();
//     document.getElementById("dateTime").innerHTML = d;

//     // Script for getting donation title
//     const donationTitle = document.getElementById("donation-title").innerText;
//     document.getElementById("donate_title_get").innerText =
//       addAmountFeildNumber + " " + donationTitle;
//   });

