const express = require('express');
const userController = require('../controller/user_controller');
const router = express.Router();
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/User');

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/api/register', userController.createUser)

//   // Check Required Fields
//   if(!name || !email || !password || !password2){
//     errors.push({ msg: 'Please fill in all fields'});
//   }

//   // Check passwords match
//   if(password !== password2){
//     errors.push({ msg: 'passwords do not match'});
//   }

//   // Check passwords length
//   if(password.length < 6) {
//     errors.push({ msg: 'Password should be at least 6 characters'});
//   }

//   if(errors.length > 0) {
//     res.render('register', {
//       errors,
//       name,
//       email,
//       password,
//       password2
//     });
//   } else {
//     // Validation passed
//     User.findOne({ email: email })
//     .then(user => {
//       if(user) {
//         // User exists
//         errors.push({ msg: 'Email is already registered'});
//         res.render('register', {
//           errors,
//           name,
//           email,
//           password,
//           password2
//         });
//       } else {
//          const newUser = new User({
//            name,
//            email,
//            password
//          });

//           console.log(newUser)
//           res.send('hello');

//       }
//     });
//   }

// });

module.exports = router;