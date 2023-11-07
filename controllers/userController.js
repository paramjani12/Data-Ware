const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({
      data: users,
    })
  } catch (error) {
    res.status(400).json({
      status: 'Error',
      message: error,
    })
  }
}

exports.createUser = (req, res) => {
  res.status(200).json({
    message: 'Success',
    data: 'Created New user successfully',
  })
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('codes')
      .select('-__v -user')
    res.status(200).json({
      status: 'success',
      data: { user },
    })
  } catch (error) {
    res.status(400).json({
      status: 'Error',
      message: error.message,
    })
  }
}

exports.updateUser = (req, res) => {
  res.status(200).json({
    message: 'Success',
    data: 'user data updated successfully',
  })
}

exports.deleteUser = (req, res) => {
  res.status(204).json({
    message: 'Success',
  })
}
