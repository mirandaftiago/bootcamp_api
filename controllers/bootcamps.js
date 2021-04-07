// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Show all bootcamps'
  });
}

// @desc      Get single bootcamps
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Show bootcamp with ID ${req.params.id}`
  });
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps/
// @access    Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Create new bootcamp'
  });
}

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Public
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Update bootcamp with ID ${req.params.id}`
  });

}

// @desc      Delete single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Delete bootcamp with ID ${req.params.id}`
  });
}