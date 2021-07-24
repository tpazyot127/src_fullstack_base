const UserCategory = require('../models/user-category-model');


//tao ban ghi moi
const createUserCategory = async (req, res) => {
  const start = new Date().getTime();
  try {
    const body = req.body;
    const query = {};
    if (body.title) {
      query.title = body.title;
    } else {
      return res.status(500).send({
        status: 500,
        data: null,
        error:'chưa nhập tên bảng',
        exe_time: new Date().getTime() - start
      });
    }
    if (body.image) {
      query.image = body.image;
    }
    if (body.description) {
      query.description = body.description;
    }
    if (body.status) {
      query.status = body.status;
    }
    if (body.createdBy) {
      query.createdBy = body.createdBy;
    }
    if (body.updatedBy) {
      query.updatedBy = body.updatedBy;
    }
    if (Object.keys(query).length > 0) {
      const userCategory = new UserCategory(query);
      const data = await userCategory.save();
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
      exe_time: new Date().getTime() - starts
    });
  }
};

//  get user category
const getUserCategories = async (req, res) => {
  const start = new Date().getTime();
  try {
    const body = req.body;
    const query = {};
    if (body.title) {
      query.title = body.title;
    }
    if (body.image) {
      query.image = body.image;
    }
    if (body.description) {
      query.description = body.description;
    }
    if (body.status) {
      query.status = body.status;
    }
    if (body.createdBy) {
      query.createdBy = body.createdBy;
    }
    if (body.updatedBy) {
      query.updatedBy = body.updatedBy;
    }
    if (Object.keys(query).length > 0) {
      const data = await UserCategory.find();
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

// sua ban ghi 

const updateUserCategory = async (req, res) => {
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
    if (typeof body.status !== 'undefined') {
      query.content = body.content;
    }
    if (typeof body.image !== 'undefined') {
      query.image = body.image;
    }
    if (typeof body.createdBy != 'undefined') {
      query.createdBy = body.createdBy;
    }
    if (typeof body.updatedBy != 'undefined') {
      query.updatedBy = body.updatedBy;
    }

    if (Object.keys(query).length > 0) {
      const data = await UserCategory.findOneAndUpdate({ _id: id }, query, {
        new: true
      });
      if (!data) {
        return res.status(500).send({
          status: 500,
          data: null,
          msg: `Can not update user - category with ID = ${id} `,
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

// lay tung ban ghi 
const getUserCategoryById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    console.log(`### id : ${id}`);

    const data = await UserCategory.findById(id);
    if (!data) {
      return res.status(500).send({
        status: 500,
        data: null,
        msg: `Can not get post with ID = ${ID} `,
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

// xoa ban ghi  
const deleteUserCategory = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    const data = await UserCategory.remove({_id: id});
    if (!data) {
      return res.status(500).send({
        status: 500,
        data: null,
        msg: `Can not delete user category with ID = ${ID} `,
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
  createUserCategory,
  getUserCategories,
  updateUserCategory,
  getUserCategoryById,
  deleteUserCategory
}