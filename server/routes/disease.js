
const express = require("express");
const {
  getDisease,
  createDisease,
  updateDisease,
} = require("../controllers/disease");
console.log("hiiiyhgyubybii");
const router = express.Router();
const { requireSignin } = require("../controllers/auth");

router.get("/disease", getDisease);

router.post(
  "/disease/new/:userId", // use this userID to check if the user is ADMIN or not
  // use requireSignin as middleware
  createDisease
);
router.put("/disease/:diseaseId", requireSignin, updateDisease);


module.exports = router;