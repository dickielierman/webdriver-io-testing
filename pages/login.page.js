class LoginPage {
  get headerTitle() {
    return $('#login-title');
  }
  get emailLabel() {
    return $('label[for="loginEmail"]');
  }
  get emailField() {
    return $('#loginEmail');
  }

  get passwordLabel() {
    return $('label[for="loginPassword"]');
  }

  get passwordField() {
    return $('#loginPassword');
  }

  get rememberMe() {
    return $('#rememberLoginChk');
  }

  get rememberMeLabel() {
    return $('label[for="rememberLoginChk"]');
  }

  get overlay() {
    return $('#overlay');
  }

  get btnSubmit() {
    return $('#form-login > button');
  }
}

module.exports = new LoginPage();
