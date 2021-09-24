const productService = require('../service/productService')
const constants = require('../constants')
module.exports.createProduct = async (req, res) => {
  
  let response = {...constants.defaultServerResponse};
  try{
    const responseFromService = await productService.createProduct(req.body)
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_CREATED;
    response.body = responseFromService;
  }catch(err) {
    console.log('Something went wrong: Controller: createProduct', err)
    
    response.message = err.message;
    
  }
    return res.status(response.status).send(response);

}

module.exports.getAllProduct = async (req, res) => {
  
  let response = {...constants.defaultServerResponse};
  try{
    const responseFromService = await productService.getAllProduct(req.query)
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = responseFromService;
  }catch(err) {
    console.log('Something went wrong: Controller: getAllProduct', err)
    
    response.message = err.message;
    
  }
    return res.status(response.status).send(response);

}

module.exports.getProductById = async (req, res) => {
  
  let response = {...constants.defaultServerResponse};
  try{
    const responseFromService = await productService.getProductById(req.params)
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = responseFromService;
  }catch(err) {
    console.log('Something went wrong: Controller: getProductById', err)
    
    response.message = err.message;
    
  }
    return res.status(response.status).send(response);

}


module.exports.updateProduct = async (req, res) => {
  
  let response = {...constants.defaultServerResponse};
  try{
    const responseFromService = await productService.updateProduct({
      id: req.params.id,
      updateInfo: req.body
    });
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_UPDATED;
    response.body = responseFromService;
  }catch(err) {
    console.log('Something went wrong: Controller: getProductById', err)
    
    response.message = err.message;
    
  }
    return res.status(response.status).send(response);

}


module.exports.deleteProduct = async (req, res) => {
  
  let response = {...constants.defaultServerResponse};
  try{
    const responseFromService = await productService.deleteProduct(req.params);
    response.status = 200;
    response.message = constants.productMessage.DELETE_PRODUCT;
    response.body = responseFromService;
  }catch(err) {
    console.log('Something went wrong: Controller: deleteProduct', err)
    
    response.message = err.message;
    
  }
    return res.status(response.status).send(response);

}