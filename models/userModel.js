const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    dob: {
      type: Date,
      required: [true, 'date of birth is requirerd'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minLength: [6, 'password length should be more than 6 characters'],
      select: false,
    },
    passwordChangedAt: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = await bcrypt.hash(this.password, 12) 

  next()
})

userSchema.methods.matchPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword)
}


const User = mongoose.model('User', userSchema)

module.exports = User
