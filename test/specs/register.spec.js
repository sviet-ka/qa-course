import RegisterPage from '../pages/RegisterPage';

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
    RegisterPage.firstNameInput.setValue('Ivan');
    RegisterPage.lastNameInput.setValue('Ivanov');
    RegisterPage.emailNameInput.setValue('ivanov@gmail.com');
    RegisterPage.passwordInput.setValue('12345kk789');
    RegisterPage.submitForm();
    browser.pause(3000);
    // how to delete existing user?
    RegisterPage.firstNameInput.setValue('Ivan');
    RegisterPage.lastNameInput.setValue('Ivanov');
    RegisterPage.emailNameInput.setValue('ivanov@gmail.com');
    RegisterPage.passwordInput.setValue('12345kk789');
    RegisterPage.submitForm();
    expect(RegisterPage.errorEmailExists).to.be.ok;
    expect(RegisterPage.errorEmailExistsText.getText()).eq('User with this e-mail exists');
  });
});
