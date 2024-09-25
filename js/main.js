// histpry content show and donation content hide
document
  .getElementById("show-history-content-btn")
  .addEventListener("click", function () {
    document.getElementById("donation-content").classList.add("hidden");
    document.getElementById("history-content").classList.remove("hidden");
    this.classList.add("bg-secondary", "text-white");
    this.classList.remove("btn-outline");

    document.getElementById("show-donation-content-btn")
      .classList.remove("bg-primary", "text-white");
    document.getElementById("show-donation-content-btn")
      .classList.add("btn-outline");
  });

//  doantion content show and history content hide

document
  .getElementById("show-donation-content-btn")
  .addEventListener("click", function () {
    document.getElementById("donation-content").classList.remove("hidden");
    document.getElementById("history-content").classList.add("hidden");
    this.classList.add("bg-primary", "text-white");
    this.classList.remove("btn-outline");
    document.getElementById("show-history-content-btn")
      .classList.remove("bg-secondary", "text-white");
    document.getElementById("show-history-content-btn")
      .classList.add("btn-outline");
  });



// Donation add for Noakhali
document.getElementById("donate-now-1").addEventListener("click", function () {
  const addAmountField = document.getElementById("donate-input-field-1").value;
  if (isNaN(addAmountField) || addAmountField.trim() === "") {
      alert("Please enter a valid number.");
      document.getElementById("donate-input-field-1").value = "";
      return;
  }

  const addAmountFieldNumber = parseFloat(addAmountField);
  if (addAmountFieldNumber <= 0) {
      alert("Donation amount must be a positive number.");
      document.getElementById("donate-input-field-1").value = "";
      return;
  }

  const currentDonationBalance = document.getElementById("donation-balance-1").innerText;
  const amountBalance = document.getElementById("amount-blance").innerText;

  const amountBalanceNumber = parseFloat(amountBalance);
  const currentBalanceNumber = parseFloat(currentDonationBalance);

  if (addAmountFieldNumber > amountBalanceNumber) {
      alert("Insufficient balance.");
      document.getElementById("donate-input-field-1").value = "";
      return;
  }

  const newDonationBalance = currentBalanceNumber + addAmountFieldNumber;
  const amountRemovedFromStock = amountBalanceNumber - addAmountFieldNumber;
  document.getElementById("donation-balance-1").innerText = newDonationBalance;
  document.getElementById("amount-blance").innerText = amountRemovedFromStock;
  document.getElementById("donate-input-field-1").value = "";

  // Showing for history
  const d = new Date();
  const formattedDate = d.toString();
  const donationTitle = document.getElementById("donation-title-1").innerText;

  const newEntry = `
      <div tabindex="0" class="collapse collapse-open bg-gray-100 border border-gray-300 p-4 rounded-lg">
          <div class="collapse-title text-xl font-medium">
              Donation: ${addAmountFieldNumber} ${donationTitle}
          </div>
          <div class="collapse-content">
              <span>Date: ${formattedDate}</span>
          </div>
      </div>
  `;

  document.getElementById("history-content").innerHTML += newEntry;

  alert(`Congrats! You have donated ${addAmountFieldNumber} for ${donationTitle}.`);
});

// Donation add for Feni
document.getElementById("donate-now-2").addEventListener("click", function () {
  const addAmountField = document.getElementById("donate-input-field-2").value;
  if (isNaN(addAmountField) || addAmountField.trim() === "") {
      alert("Please enter a valid number.");
      document.getElementById("donate-input-field-2").value = "";
      return;
  }

  const addAmountFieldNumber = parseFloat(addAmountField);
  if (addAmountFieldNumber <= 0) {
      alert("Donation amount must be a positive number.");
      document.getElementById("donate-input-field-2").value = "";
      return;
  }

  const currentDonationBalance = document.getElementById("donation-balance-2").innerText;
  const amountBalance = document.getElementById("amount-blance").innerText;

  const amountBalanceNumber = parseFloat(amountBalance);
  const currentBalanceNumber = parseFloat(currentDonationBalance);

  if (addAmountFieldNumber > amountBalanceNumber) {
      alert("Insufficient balance.");
      document.getElementById("donate-input-field-2").value = "";
      return;
  }

  const newDonationBalance = currentBalanceNumber + addAmountFieldNumber;
  const amountRemovedFromStock = amountBalanceNumber - addAmountFieldNumber;
  document.getElementById("donation-balance-2").innerText = newDonationBalance;
  document.getElementById("amount-blance").innerText = amountRemovedFromStock;
  document.getElementById("donate-input-field-2").value = "";

  // Showing for history
  const d = new Date();
  const formattedDate = d.toString();
  const donationTitle = document.getElementById("donation-title-2").innerText;

  const newEntry = `
      <div tabindex="0" class="collapse collapse-open bg-gray-100 border border-gray-300 p-4 rounded-lg">
          <div class="collapse-title text-xl font-medium">
              Donation: ${addAmountFieldNumber} ${donationTitle}
          </div>
          <div class="collapse-content">
              <span>Date: ${formattedDate}</span>
          </div>
      </div>
  `;

  document.getElementById("history-content").innerHTML += newEntry;

  alert(`Congrats! You have donated ${addAmountFieldNumber} for ${donationTitle}.`);
});

// Donation add for Quota Movement
document.getElementById("donate-now-3").addEventListener("click", function () {
  const addAmountField = document.getElementById("donate-input-field-3").value;
  if (isNaN(addAmountField) || addAmountField.trim() === "") {
      alert("Please enter a valid number.");
      document.getElementById("donate-input-field-3").value = "";
      return;
  }

  const addAmountFieldNumber = parseFloat(addAmountField);
  if (addAmountFieldNumber <= 0) {
      alert("Donation amount must be a positive number.");
      document.getElementById("donate-input-field-3").value = "";
      return;
  }

  const currentDonationBalance = document.getElementById("donation-balance-3").innerText;
  const amountBalance = document.getElementById("amount-blance").innerText;

  const amountBalanceNumber = parseFloat(amountBalance);
  const currentBalanceNumber = parseFloat(currentDonationBalance);

  if (addAmountFieldNumber > amountBalanceNumber) {
      alert("Insufficient balance.");
      document.getElementById("donate-input-field-3").value = "";
      return;
  }

  const newDonationBalance = currentBalanceNumber + addAmountFieldNumber;
  const amountRemovedFromStock = amountBalanceNumber - addAmountFieldNumber;
  document.getElementById("donation-balance-3").innerText = newDonationBalance;
  document.getElementById("amount-blance").innerText = amountRemovedFromStock;
  document.getElementById("donate-input-field-3").value = "";

  // Showing for history
  const d = new Date();
  const formattedDate = d.toString();
  const donationTitle = document.getElementById("donation-title-3").innerText;

  const newEntry = `
      <div tabindex="0" class="collapse collapse-open bg-gray-100 border border-gray-300 p-4 rounded-lg">
          <div class="collapse-title text-xl font-medium">
              Donation: ${addAmountFieldNumber} ${donationTitle}
          </div>
          <div class="collapse-content">
              <span>Date: ${formattedDate}</span>
          </div>
      </div>
  `;

  document.getElementById("history-content").innerHTML += newEntry;

  alert(`Congrats! You have donated ${addAmountFieldNumber} for ${donationTitle}.`);
});
