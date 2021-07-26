const { onLoginButtonClick, onRegistrationButtonClick } = require("./event_handlers/index");
const { onChangePasswordSumbit, onUpdateUserInfoSumbit } = require("./event_handlers/profile");
const { onAddHabitButtonClick } = require('./event_handlers/dashboard');


function bindIndexListeners() {
  const loginButton = document.querySelector(".login");
  loginButton.addEventListener("click", onLoginButtonClick);

  const registrationButton = document.querySelector(".register");
  registrationButton.addEventListener("click", onRegistrationButtonClick);
}

function bindDashboardListeners() {
	const addHabbitButtons = document.querySelectorAll('.add-habit');
	addHabbitButtons.forEach((button) => button.addEventListener('click', onAddHabitButtonClick));
}

function bindProfileListeners() {
  const changeUserInfoSubmitButton = document.getElementById("user-info-form");
  changeUserInfoSubmitButton.addEventListener("submit", onUpdateUserInfoSumbit);

  const changePasswordSubmitButton = document.getElementById("change-password-form");
  changePasswordSubmitButton.addEventListener("submit", onChangePasswordSumbit);
}

function renderHabits() {}

function initPageBindings() {
  const path = window.location.pathname;
  if (path === "/") {
    bindIndexListeners();
  } else if (path === "/dashboard.html") {
    bindDashboardListeners();
  } else if (path === "/profile.html") {
    bindProfileListeners();
  }
}

module.exports = initPageBindings;
