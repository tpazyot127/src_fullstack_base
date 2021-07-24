// import moment from 'moment';
const Post = require('../models/post-model');

// create a new post:
const createPost = async (req, res) => {
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
    if (body.image) {
      query.image = body.image;
    }
    if (body.status) {
      query.status = body.status;
    }
    if (body.categories) {
      query.categories = body.categories;
    }
    if (body.createdBy) {
      query.createdBy = body.createdBy;
    }
    if (body.updatedBy) {
      query.updatedBy = body.updatedBy;
    }
    if (Object.keys(query).length > 0) {
      const post = new Post(query);
      const data = await post.save();
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
const updatePost = async (req, res) => {
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
    if (typeof body.status !== 'undefined') {
      query.status = body.status;
    }
    if (typeof body.categories !== 'undefined') {
      query.categories = body.categories;
    }
    if (typeof body.createdBy != 'undefined') {
      query.createdBy = body.createdBy;
    }
    if (typeof body.updatedBy !== 'undefined') {
      query.updatedBy = body.updatedBy;
    }
    if (Object.keys(query).length > 0) {
      const data = await Post.findOneAndUpdate({ _id: id }, query, {
        new: true
      });
      if (!data) {
        return res.status(500).send({
          status: 500,
          data: null,
          msg: `Can not update post with ID = ${id} `,
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

const getPostById = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    console.log(`### id : ${id}`);

    const data = await Post.findById(id);
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

// get a list of posts
const getPosts = async (req, res) => {
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

    const data = await Post.find(query)
      .populate('author categories')
      .sort({ _id: -1 })
      .limit(limit);
    const totalCount = await Post.countDocuments();

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
const deletePost = async (req, res) => {
  const start = new Date().getTime();
  try {
    const queryParams = req.params;
    const { id } = queryParams;
    const data = await Post.remove({_id: id});
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

module.exports = {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  updatePost
}