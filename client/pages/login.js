export class LoginPage{
    constructor(page){
        this.page = page
        this.username_textbox = page.getByPlaceholder('Enter your username')
        this.password_textbox = page.getByPlaceholder('Enter your password')
        this.login_button = page.getByRole('link', { name: 'Sign in' })
    }

  async goToLoginPage(url){
    await this.page.goto(url)
  }

   async login(username, password){
    await this.username_textbox.fill(username)
    await this.password_textbox.fill(password)
    await this.login_button.click()
   }

}