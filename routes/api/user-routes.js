const router = require('express').Router();
const { User } = require('../../models');

const {
getUsers,
getUserById,
newUser,
deleteUser,
updateUser,
// create friend
// delete said friend
} = require('../../controllers/user-controller');

// /api/users
router
.route('/')
.get(getUsers)
.post(newUser);

// /api/user/:id
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)


module.exports = router
