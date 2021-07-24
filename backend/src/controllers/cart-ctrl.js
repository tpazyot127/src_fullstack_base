// import moment from 'moment';
const Cart = require('../models/cart-model');

// create a new cart:
const createCart = async (req, res) => {
  const start = new Date().getTime();
  try {
    const body = req.body;
    const query = {};

    if (body.products) {
      query.products = body.products;
    } else {
      return res.status(500).send({
        status: 500,
        data: {},
        error: "not found product",
        exe_time: new Date().getTime() - start
      });
    }
    if (body.buyer) {
      query.buyer = body.buyer;
    }
    if (body.createdBy) {
      query.createdBy = body.createdBy;
    }
    if (body.updatedBy) {
      query.updatedBy = body.updatedBy;
    }
    if (Object.keys(query).length > 0) {
      const cart = new Cart(query);
      const data = await cart.save();
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


// update post
const updateCart = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    console.log(`### id : ${id}`);
    //  ham query
    const body = req.body;
    const query = {};
    if (typeof body.products !== 'undefined') {
      query.title = body.title;
    }
    if (typeof body.buyer !== 'undefined') {
      query.buyer = body.buyer;
    }
    if (typeof body.updatedBy !== 'undefined') {
      query.updatedBy = body.updatedBy;
    }
    if (typeof body.createdBy != 'undefined') {
      query.createdBy = body.createdBy;
    }
    if (Object.keys(query).length > 0) {
      const data = await Cart.findOneAndUpdate({ _id: id }, query, {
        new: true
      });
      if (!data) {
        return res.status(500).send({
          status: 500,
          data: null,
          msg: `Can not update cart with ID = ${id} `,
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


//lay tung ban ghi

const getCartById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    console.log(`### id : ${id}`);

    const data = await Cart.findById(id);
    if (!data) {
      return res.status(500).send({
        status: 500,
        data: null,
        msg: `Can not get cart with ID = ${ID} `,
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

// get a list of posts
const getCarts = async (req, res) => {
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
    if (typeof queryParams.keyword !== 'undefined') {
      const reg = new RegExp(queryParams.keyword, 'i');
      query.title = { $regex: reg };
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

    const data = await Cart.find(query)
      .populate('author cart')
      .sort({ _id: -1 })
      .limit(limit);
    const totalCount = await Cart.countDocuments();

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

// delete a post
const deleteCart = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    const data = await Cart.remove({ _id: id });
    if (!data) {
      return res.status(500).send({
        status: 500,
        data: null,
        msg: `Can not delete cart with ID = ${ID} `,
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

module.exports = {
  createCart,
  getCarts,
  getCartById,
  deleteCart,
  updateCart
}