const Product = require('../db/model/productModel')
const {formatMongoData, checkObjectId} = require('../helper/dbHelper');
const constants = require('../constants')



module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({...serviceData});
    let res = await product.save();
    return formatMongoData(res);
  }catch(err) {
    console.log('Something went wrong: Service: createProduct', err);
    throw new Error(err);
  }
   
}
module.exports.getAllProduct = async ({skip = 0 , limit = 10}) => {
  try {
   

    let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
    return formatMongoData(products);
  }catch(err) {
    console.log('Something went wrong: Service: createProduct', err);
    throw new Error(err);
  }
   
}

module.exports.getProductById = async ({ id }) => {
  try {

    checkObjectId(id)
   
    let product = await Product.findById(id);

    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }

    return formatMongoData(product);
  }catch(err) {
    console.log('Something went wrong: Service: createProduct', err);
    throw new Error(err);
  }
   
}


module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {

    checkObjectId(id);
   
    let product = await Product.findOneAndUpdate(
      {_id : id },
      updateInfo,
      { new: true}
    )

    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }

    return formatMongoData(product);
  }catch(err) {
    console.log('Something went wrong: Service: createProduct', err);
    throw new Error(err);
  }
   
}



module.exports.deleteProduct = async ({ id }) => {
  try {

    checkObjectId(id);
   
    let product = await Product.findByIdAndDelete(id);

    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }

    return formatMongoData(product);
  }catch(err) {
    console.log('Something went wrong: Service: deleteProduct', err);
    throw new Error(err);
  }
   
}