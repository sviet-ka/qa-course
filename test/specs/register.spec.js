import RegisterPage from '../pages/RegisterPage';
import testUser from "../registerData";

before(() => {
  RegisterPage.open();
});

describe('Verify all elements present on the Register page', () => {
  it('should verify header is present ', () => {
    expect(RegisterPage.header.isDisplayed()).true;
  });

  it('should verify header text', () => {
    expect(RegisterPage.header.getText()).eq('User Register');
  });

  it('should verify paragraph is present ', () => {
    expect(RegisterPage.paragraph.isDisplayed()).true;
  });

  it('should verify paragraph text', () => {
    expect(RegisterPage.paragraph.getText()).eq(
      'Profiles with fictitious or dummy data will be deleted.',
    );
  });

  it('should verify support link is correct', () => {
    expect(RegisterPage.supportLinkHref).eq('mailto:support@pasv.us');
  });

  it('should verify there are 4 required elments on the Register page', () => {
    expect(RegisterPage.requiredFields.length).eq(4);
  });

  it('should verify "User with this e-mail exists" error is thrown', () => {
    RegisterPage.firstNameInput.setValue(testUser.firstName);
    RegisterPage.lastNameInput.setValue(testUser.lastName);
    RegisterPage.emailNameInput.setValue(testUser.email);
    RegisterPage.passwordInput.setValue(testUser.password);
    RegisterPage.submitForm();
    browser.pause(3000);


    expect(RegisterPage.errorEmailExists).to.be.ok;
    expect(RegisterPage.errorEmailExistsText.getText()).eq('User with this e-mail exists');
  });
});
