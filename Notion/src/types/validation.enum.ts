export enum Validation {
  EMPTY_FIELDS = "This field is required.",
  INVALID_EMAIL = "Invalid email format.",
  INVALID_PASSWORD = "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number.",
  PASSWORDS_DO_NOT_MATCH = "Passwords do not match.",
  REGISTRATION_FAILED = "Registration failed.",
  LOGIN_FAILED = "Invalid email or password.",
  REGISTRATION_SUCCESS = "Registration successful.",
  LOGIN_SUCCESS = "Login successful.",
}
