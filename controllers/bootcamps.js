const Bootcamp = require('../models/Bootcamp');

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      data: bootcamps
    });

  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
}

// @desc      Get single bootcamps
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if(!bootcamp) {
      return res.status(400).json({
        success: false
      })
    }

    res.status(200).json({
      success: true,
      data: bootcamp
    });

  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps/
// @access    Private
exports.createBootcamp = async (req, res, next) => {
  try {
    
    const bootcamp = await Bootcamp.create(req.body);
  
      res.status(201).json({
      success: true,
      data: bootcamp
    });

  } catch (error) {
    
    res.status(400).json({
      success: false
    });
  }
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