export default {

  patterns : {
    username  : /^[a-zA-Z0-9\.\-\_]{4,26}$/,
    email     : /^([a-zA-Z0-9_\.-]+)@([a-zA-Z\.-]+)\.([a-z\.]{2,6})$/,
    password  : /^.{6,60}$/,
    noCode    : /^(?!.*<.*?\/?>)/ ,
    fullName  : /^[a-zA-Z0-9\.\-\_\ ]{1,200}$/,
    url       : /^http(s)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)$/,
    tileTitle : /^[^<>]+$/
  },

  errors : {
    emailAndPassword: {
      pattern: 'Invalid email or password'
    },
    email: {
      pattern: 'Email is invalid',
      uniqueEmail: 'Email is already taken'
    },
    password: {
      pattern: 'Invalid password'
    },
    username: {
      pattern: 'Only letters and numbers are allowed.',
      minlength: 'Login must contain from 4 to 25 characters.',
      maxlength: 'Login must contain from 4 to 25 characters.',
      uniqueUsername: 'Username is already taken'
    },
    signupPass: {
      minlength: 'Must be at least 6 scharackters'
    },
    retypePass: {
      correctlyRetypedField: 'Passwords don’t match'
    },
    url: {
      pattern: 'URL is invalid'
    },
    newPassword: 'Passwords don\'t match',
    required: 'Field is required',
    default: ''
  }
}