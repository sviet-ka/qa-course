import BasePage from './BasePage';

class RegisterPage extends BasePage {
  get header() {
    return $('h1');
  }

  get paragraph() {
    return $('p');
  }

  get labelFirstName() {
    return $('label[for="firstName"]');
  }

  get requiredFields() {
    return $$('//span[@class="invalid-feedback w-auto ml-2"]');
  }

  get firstNameInput() {
    return $('[name="firstName"]');
  }
  get lastNameInput() {
    return $('[name="lastName"]');
  }

  get emailNameInput() {
    return $('[name="email"]');
  }

  get passwordInput() {
    return $('[name="password"]');
  }

  get submitBtn() {
    return $('button[type="submit"]');
  }

  get supportLinkHref() {
    return $('//a[contains(text(),"support@pasv.us")]').getAttribute('href');
  }

  submitForm() {
    this.submitBtn.click();
  }

  get loginLink() {
    return $('//a[@qa="login-link"]');
  }

  get errorEmailExists() {
    return $('//div[@id="root"]//div[@xpath="1"]');
  }

  get errorEmailExistsText() {
    return $('//div[@id="root"]//h4[@class="notification-title"]');
  }

  open() {
    super.open('https://stage.pasv.us/user/register');
  }
}

export default new RegisterPage();
