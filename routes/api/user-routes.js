const router = require("express").Router();
const { User } = require("../../models");

const {
  getUsers,
  getUserById,
  newUser,
  deleteUser,
  updateUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/users
router
.route("/")
.get(getUsers)
.post(newUser);

// /api/user/:id
router
.route("/:userId")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// :userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;
