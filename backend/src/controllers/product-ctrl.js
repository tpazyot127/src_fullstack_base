const Product = require('../models/product-model');


// tao ban ghi moi
const createProduct = async (req, res) => {
  const start = new Date().getTime();
  try {
    const body = req.body;
    const query = {};

    if (body.title) {
      query.title = body.title;
    } else {
      return res.status(500).send({
        status: 500,
        data: {},
        error: "chua nhap tieu de",
        exe_time: new Date().getTime() - start
      });
    }
    if (body.description) {
      query.description = body.description;
    }
    if (body.content) {
      query.content = body.content;
    }
    if (body.price) {
      query.price = body.price;
    }
    if (body.image) {
      query.image = body.image;
    }
    if (body.images) {
      query.image = body.image;
    }
    if (body.sale_price) {
      query.sale_price = body.sale_price;
    }
    if (body.status) {
      query.status = body.status;
    }
    if (body.categoryId) {
      query.categoryId = body.categoryId;
    }
    if (body.createdBy) {
      query.createdBy = body.createdBy;
    }
    if (body.updatedBy) {
      query.updatedBy = body.updatedBy;
    }
    if (Object.keys(query).length > 0) {
      const product = new Product(query);
      const data = await product.save();
      return res.status(200).send({
        status: 200,
        data,
        msg: 'ok',
        exe_time: new Date().getTime() - start
      });
    }
  } catch (e) {
    console.log('internal server error', e);
    return res.status(500).send({
      status: 500,
      data: null,
      msg: 'internal server error',
      error: e,
      exe_time: new Date().getTime() - start
    });
  }
};

// get a list of posts
const getProducts = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.query;
    let limit = 100;
    if (queryParams && queryParams.limit) {
      limit = Number(queryParams.limit);
    }
    let query = {};
    if (typeof queryParams.status !== 'undefined') {
      query.status = queryParams.status;
    }
    if (typeof queryParams.categories !== 'undefined') {
      query.categories = queryParams.categories;
    }
    if (
      typeof queryParams.startDate !== 'undefined' &&
      typeof queryParams.endDate !== 'undefined'
    ) {
      const startDate = moment(
        new Date(queryParams.startDate.replace('-', ','))
      ).startOf('day');
      const endDate = moment(
        new Date(queryParams.endDate.replace('-', ','))
      ).endOf('day');
      query.createdAt = {
        $gte: startDate.toDate(),
        $lte: endDate.toDate()
      };
    }

    const data = await Product.find(query)
      .populate('author categories')
      .sort({ _id: -1 })
      .limit(limit);
    const totalCount = await Product.countDocuments();

    return res.status(200).send({
      status: 200,
      msg: 'ok',
      data: data ? data : [],
      query,
      found: data.length,
      total: totalCount,
      exe_time: new Date().getTime() - start
    });
  } catch (e) {
    console.log('internal server error', e.message);
    res.status(500).send({
      status: 500,
      data: [],
      error: e.message,
      msg: 'internal server error',
      exe_time: new Date().getTime() - start
    });
  }
};

//lay tung ban ghi

const getProductById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    console.log(`### id : ${id}`);

    const data = await Product.findById(id);
    if (!data) {
      return res.status(500).send({
        status: 500,
        data: null,
        msg: `Can not get product with ID = ${ID} `,
        exe_time: new Date().getTime() - start
      });
    }
    return res.status(200).send({
      status: 200,
      data,
      msg: 'ok',
      exe_time: new Date().getTime() - start
    });
  } catch (e) {
    console.log('internal server error', e.message);
    return res.status(500).send({
      status: 500,
      data: null,
      msg: 'internal server error',
      exe_time: new Date().getTime() - start
    });
  }
};

// delete ban ghi 
const deleteProduct = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    const data = await Product.remove({ _id: id });
    if (!data) {
      return res.status(500).send({
        status: 500,
        data: null,
        msg: `Can not delete product with ID = ${ID} `,
        exe_time: new Date().getTime() - start
      });
    }
    return res.status(200).send({
      status: 200,
      data,
      msg: 'ok',
      queryParams,
      exe_time: new Date().getTime() - start
    });
  } catch (e) {
    console.log('internal server error', e.message);
    res.status(500).send({
      status: 500,
      data: null,
      msg: 'internal server error',
      exe_time: new Date().getTime() - start
    });
  }
};

//  sua san pham 
const updateProduct = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    console.log(`### id : ${id}`);
    //  ham query
    const body = req.body;
    const query = {};
    if (typeof body.title !== 'undefined') {
      query.title = body.title;
    }
    if (typeof body.description !== 'undefined') {
      query.description = body.description;
    }
    if (typeof body.content !== 'undefined') {
      query.content = body.content;
    }
    if (typeof body.image !== 'undefined') {
      query.image = body.image;
    }
    if (typeof body.price !== 'undefined') {
      query.price = body.price;
    }
    if (typeof body.images !== 'undefined') {
      query.images = body.images;
    }
    if (typeof body.sale_price !== 'undefined') {
      query.sale_price = body.sale_price;
    }
    if (typeof body.status !== 'undefined') {
      query.status = body.status;
    }
    if (typeof body.categoryId !== 'undefined') {
      query.categoryId = body.categoryId;
    }
    if (typeof body.createdBy != 'undefined') {
      query.createdBy = body.createdBy;
    }
    if (typeof body.updatedBy !== 'undefined') {
      query.updatedBy = body.updatedBy;
    }
    if (Object.keys(query).length > 0) {
      const data = await Product.findOneAndUpdate({ _id: id }, query, {
        new: true
      });
      if (!data) {
        return res.status(500).send({
          status: 500,
          data: null,
          msg: `Can not update product with ID = ${id} `,
          exe_time: new Date().getTime() - start
        });
      }
      return res.status(200).send({
        status: 200,
        data,
        msg: 'ok',
        exe_time: new Date().getTime() - start
      });
    }
  } catch (e) {
    console.log('internal server error', e.message);
    return res.status(500).send({
      status: 500,
      data: null,
      msg: 'internal server error',
      exe_time: new Date().getTime() - start
    });
  }
};
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct
}