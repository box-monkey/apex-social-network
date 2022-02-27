// ----------   return to set up friend functionality ---------------
// user request functionality.
const { User } = require("../models");

const userController = {
  // gets all users
  getUsers(req, res) {
    User.find()
      .populate({
        path: "thoughts",
        select: "__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // gets a single user by id
  getUserById(req, res) {
    User.findById({ _id: params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // creates a new user
  newUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // deletes a user
  deleteUser({ params }, res) {
    User.findByIdAndDelete({ _id: params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // updates a user
  updateUser({ params, body }, res) {
    User.findByIdAndUpdate({ _id: params.userId }, body, {
      new: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No thought found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;

// friend stuff goes here?

// getAllUsers,
// getUserById,
// newUser,
// deleteUser,
// updateUser,
// // create friend
// // delete said friend
