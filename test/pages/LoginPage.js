import BasePage from './BasePage';

class LoginPage extends BasePage {
  get header() {
    return $('h1');
  }
  get requiredFields() {
    return $$('//span[@class="invalid-feedback w-auto ml-2"]');
  }

  get labelEmail() {
    return $('//label[@for="email"]');
  }
  get labelPassword() {
    return $('//label[@for="password"]');
  }

  get emailInputField() {
    return $('//input[@name="email"]');
  }

  get passwordInputField() {
    return $('//input[@name="password"]');
  }

  get loginBtn() {
    return $('button[type="submit"]');
  }

  get personalPage() {
    return $('//div[@id="user-section"]//a[@class="dropdown-toggle nav-link"]').getText();
  }

  submitForm() {
    this.loginBtn.click();
  }

  get forgotPasswordLink() {
    return $('//a[@qa="forgot-password-link"]');
  }

  selectForgotPassword() {
    this.forgotPasswordLink.click();
  }

  open() {
    super.open('https://stage.pasv.us/user/login');
  }
}

export default new LoginPage();
