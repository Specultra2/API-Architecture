module.exports = {
  defaultServerResponse : {
    status: 400,
    message: '',
    body: {}
  },
  productMessage: {
    PRODUCT_CREATED: 'Product Created Successfully',
    PRODUCT_FETCHED: 'Product Fetched Successfully',
    PRODUCT_UPDATED: 'Product Updated Successfully',
    PRODUCT_NOT_FOUND: 'Product Not Found',
    DELETE_PRODUCT: 'Delete Product Successfully'
  },
  userMessage: {
    SIGNUP_SUCCESS : 'Signup Success',
    DUPLICATE_EMAIL : 'User already exist with given email',
    LOGIN_SUCCESS: 'Login Success',
    USER_NOT_FOUND: 'User Not Found',
    INVALID_PASSWORD: 'Invalid Password'
  },
  
  requestValidationMessage: {
    BAD_REQUEST: 'Invalid fields',
    TOKEN_MISSING: 'Token missing from header'
  },
  databaseMessage: {
    INVALID_ID: 'Invalid Id'
  }
}