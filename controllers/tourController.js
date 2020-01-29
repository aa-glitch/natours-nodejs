exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: 'This has to be devloped'
  });
};

exports.getTour = (req, res) => {
  //console.log(req.params);
  res.status(200).json({
    status: 'success',
    data: 'This has to be devloped'
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: 'This has to be devloped'
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Update tour here'
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
