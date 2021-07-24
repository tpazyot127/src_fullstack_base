const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, minLength: 10 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: value => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: 'Invalid Email address' });
        }
      }
    },
    fullname: { type: String, required: false },
    status: { type: String, required: true },
    image: { type: String, required: false },
    categoryId: { type: Schema.Types.ObjectId, required: false },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: false },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: String, required: false },
  }
);

userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

userSchema.virtual('userCategories', {
  ref: 'UserCategory',
  localField: 'categories',
  foreignField: '_id',
  justOne: true
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email }).populate('categories');
  if (!user) {
    throw new Error('MESSAGE.LOGIN_EMAIL_NOT_EXISTED');
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error('MESSAGE.LOGIN_WRONG_PASS');
  }
  return user;
};

const User = mongoose.model('User', userSchema)

module.exports = User

