class LoginPage {
  get headerTitle() {
    // Returns the title
    return $('#login-title');
  }
  get emailLabel() {
    // Returns the email label
    return $('label[for="loginEmail"]');
  }
  get emailField() {
    // Returns the email field
    return $('#loginEmail');
  }
  get passwordLabel() {
    // Returns the password label
    return $('label[for="loginPassword"]');
  }
  get passwordField() {
    // Returns the password field
    return $('#loginPassword');
  }
  get rememberMe() {
    // Returns the remember me checkbox
    return $('#rememberLoginChk');
  }
  get rememberMeLabel() {
    // Returns the remember me label
    return $('label[for="rememberLoginChk"]');
  }
  get overlay() {
    // Returns the overlay
    return $('#overlay');
  }
  get btnSubmit() {
    // Returns the submit button
    return $('#form-login > button');
  }
  // Login method
  async login(email, password, rememberMe) {
    if (email !== '') {
      await this.emailField.setValue(email);
    }
    if (password !== '') {
      await this.passwordField.setValue(password);
    }
    if (rememberMe === true) {
      await this.rememberMe.click();
    }
    await this.btnSubmit.click();
  }
}

module.exports = new LoginPage();
