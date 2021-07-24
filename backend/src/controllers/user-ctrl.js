const moment = require('moment');
const bcrypt = require('bcryptjs');
const User = require('../models/user-model');

// tao user
const createUser = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user'
    });
  }

  if (!body.username) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user with username'
    });
  }

  if (!body.email) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user with email'
    });
  }

  if (!body.password) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user with password'
    });
  }

  try {
    const userExisted = await User.findOne({ email: req.body.email });
    if (userExisted) {
      return res.status(400).json({
        success: false,
        error: `The user with email: ${body.email} is existed`
      });
    }
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
      return res.status(201).send({
        success: true,
        user,
        token,
        id: user._id,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      message: 'User not created!'
    });
  }
};

// get users
const getUsers = async (req, res) => {
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
      query.fullname = { $regex: reg };
      query.email = { $regex: reg };
      query.username = { $regex: reg };
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

    const data = await User.find(query)
      .populate('categories')
      .limit(limit);
    const totalCount = await User.countDocuments();

    return res.status(200).send({
      status: 200,
      msg: 'ok',
      data,
      found: data.length,
      total: totalCount,
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

// get user by id
const getUserById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    console.log(`### id : ${id}`);

    const data = await User.findById({ _id: id }).populate('userCategories');

    if (!data) {
      return res.status(500).send({
        status: 500,
        data: null,
        msg: `Can not get user with ID = ${ID} `,
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

// update user
const updateUser = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    console.log(`### id : ${id}`);

    const body = req.body;
    const query = {};
    if (typeof body.username !== 'undefined') {
      query.username = body.username;
    }
    if (typeof body.email !== 'undefined') {
      query.email = body.email;
    }
    if (typeof body.image !== 'undefined') {
      query.image = body.image;
    }
    if (typeof body.categoryId !== 'undefined') {
      query.categoryId = body.categoryId;
    }
    if (typeof body.fullname !== 'undefined') {
      query.fullname = body.fullname;
    }
    if (typeof body.createdBy !== 'undefined') {
      query.createdBy = body.createdBy;
    }
    if (typeof body.updatedBy !== 'undefined') {
      query.updatedBy = body.updatedBy;
    }
    if (typeof body.password !== 'undefined') {
      query.password = await bcrypt.hash(body.password, 8);
    }
    if (Object.keys(query).length > 0) {
      const data = await User.findOneAndUpdate({ _id: id }, query, {
        new: true
      });
      if (!data) {
        return res.status(500).send({
          status: 500,
          data: null,
          msg: `Can not update user with ID = ${id} `,
          exe_time: new Date().getTime() - start
        });
      }
      return res.status(200).send({
        status: 200,
        data,
        user: data,
        msg: 'ok',
        exe_time: new Date().getTime() - start
      });
    }
  } catch (e) {
    console.log('internal server error', e.message);
    return res.status(500).send({
      status: 500,
      data: null,
      error: e,
      msg: 'internal server error',
      exe_time: new Date().getTime() - start
    });
  }
};

// delete user
const deleteUser = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    const data = await User.remove({ _id: id });
    if (!data) {
      return res.status(500).send({
        status: 500,
        data: null,
        msg: `Can not delete post with ID = ${ID} `,
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


const getMe = async (req, res) => {
  const start = new Date().getTime();
  return res.status(200).send({
    status: 200,
    data: req.User,
    msg: 'ok',
    exe_time: new Date().getTime() - start
  });
};

// user login
const userLogin = async (req, res) => {
  const start = new Date().getTime();
  try {
    //  login by email
    const { email, password } = req.body
    user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).send({
        status: 401,
        success: false,
        msg: 'Login failed! Check authentication credentials',
        errorCode: 'MESSAGE.USER_NOT_FOUND',
        exe_time: new Date().getTime() - start
      });
    }
    if (user.categories && user.categories.permissions) {
      const permissions = JSON.parse(user.categories.permissions);
      console.log(
        "permissions['user-categories']",
        permissions['user-categories']
      );
      if (
        permissions['user-categories'] &&
        permissions['user-categories'].includes('admin-access')
      ) {
        const token = await user.generateAuthToken();
        const data = await User.findOne({ email: user.email }).populate(
          'userCategories'
        );
        return res.status(200).send({
          status: 200,
          success: true,
          user: data,
          token,
          msg: 'ok',
          exe_time: new Date().getTime() - start
        });
      }
      return res.status(500).send({
        status: 500,
        success: false,
        msg: 'You do not have permission to access admin',
        errorCode: 'MESSAGE.ADMIN_PERMISSION_DENIED',
        exe_time: new Date().getTime() - start
      });
    }
    return res.status(500).send({
      status: 500,
      success: false,
      msg: 'You do not have permission to access admin',
      errorCode: 'MESSAGE.ADMIN_PERMISSION_DENIED',
      exe_time: new Date().getTime() - start
    });
  } catch (error) {
    console.log('internal server error', error.message);
    res.status(500).send({
      status: 500,
      success: false,
      error: error.message,
      errorCode: error.message,
      msg: 'internal server error',
      exe_time: new Date().getTime() - start
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getMe,
  // authenticate
  userLogin
}