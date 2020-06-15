const Disease = require("../models/disease");

exports.getDisease = async (req, res) => {
  const diseases = await Disease.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return Disease.find().sort({ date: -1 });
    })
    .then((diseases) => {
      res.status(200).json(diseases);
    })
    .catch((err) => console.log(err));
};
exports.createDisease = (req, res, next) => {
    console.log("hii");
    // this function work only when form data is there
    const { title, description } = req.body
      let disease = new Disease({title, description}); // so post will be there with all the fields coming
  
      disease.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        res.json(result);
      });
   
  };
  
  exports.updateDisease = (req, res, next) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "Some Error Occured",
        });
      }
  
      let disease = req.disease;
      disease = _.extend(disease, fields);
      disease.updated = Date.now();
  
      disease.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        res.json(post);
      });
    });
  };
  
  exports.deletePost = (req, res) => {
    let disease = req.disease;
    disease.remove((err, disease) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({
        message: "Disease deleted successfully",
      });
    });
  };