const express = require('express')
const router = express.Router()
const { findFood, findFoods } = require('../controllers/foodController')
const { proposeFood, findProposedFood } = require('../controllers/proposedFoodController')
const measureController = require('../controllers/measureController')
const { validateRegister, register } = require('../controllers/userController')
const { login, logout } = require('../controllers/authController')
const { catchErrors } = require('../handlers/errorHandlers')


/*****
  USER
*****/
router.post('/login', login)
router.post('/register',
    validateRegister,
    catchErrors(register),
    login
)
router.post('/logout', logout)


/*****
  API
*****/
router.get(
    '/api/foods',
    catchErrors(findFoods)
)
router.get(
    `/api/foods/:food`,
    catchErrors(findFood)
)
router.post(
    `/api/proposedfoods`,
    catchErrors(proposeFood)
)
router.get(
    '/api/proposedfoods/:food',
    catchErrors(findProposedFood)
)
// router.get(
//     `/api/search`,
//     catchErrors(foodController.searchFood)
// );

router.get(
    '/api/measures',
    catchErrors(measureController.findMeasures)
)
router.get(
    `/api/measures/:measure`,
    catchErrors(measureController.findMeasure)
)


module.exports = router;