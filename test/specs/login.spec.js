import LoginPage from '../pages/LoginPage';

before(() => {
    LoginPage.open();
});

describe('Verify all elements present on the Login page', () => {
    it('should verify header is present ', () => {
        expect(LoginPage.header.isDisplayed()).true;
    });
    it('should verify label Email is present ', () => {
        expect(LoginPage.labelEmail.isDisplayed()).true;
    });

    it('should verify label Password is present ', () => {
        expect(LoginPage.labelPassword.isDisplayed()).true;
    });
    it('should verify "Forgot your password?" element is present', () => {
        expect(LoginPage.forgotPasswordLink.isDisplayed()).true;
    });

    it('should verify there are 2 required elments on the Register page', () => {
        expect(LoginPage.requiredFields.length).eq(2);
    });

    it('should login to existing page', () => {
        LoginPage.emailInputField.setValue('ivanov@gmail.com');
        LoginPage.passwordInputField.setValue('12345kk789');
        LoginPage.submitForm();
        expect(LoginPage.personalPage).eq('Ivan Ivanov');
    });



});