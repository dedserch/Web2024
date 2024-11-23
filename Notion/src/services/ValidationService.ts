export class ValidationService {
    static validateTitle(title: string): boolean {
      return title.trim() !== ""
    }
  
    static validateEmail(email: string): boolean {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
      return emailRegex.test(email)
    }
  
    static validatePassword(password: string): boolean {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
      return passwordRegex.test(password)
    }
  
    static validatePasswordMatch(password: string, repeatPassword: string): boolean {
      return password === repeatPassword
    }
  }
  