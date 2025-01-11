export const credentials = {
    standardUser: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    lockedOutUser: {
      username: 'locked_out_user',
      password: 'secret_sauce',
    },
    incorrectUsername: 'nonexistent_user',
    incorrectPassword: 'wrong_password',
  };
  
  export const errorMessages = {
    lockedOut: 'Sorry, this user has been locked out.',
    incorrectCredentials: 'Username and password do not match',
    usernameRequired: 'Username is required',
  };
  