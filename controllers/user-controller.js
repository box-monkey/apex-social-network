// user request functionality.
const { User } = require("../models");

const userController = {
  // gets all users
  getUsers(req, res) {
    User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    // User.find()
    //   .populate({
    //     path: "thoughts",
    //     select: "__v",
    //   })
    //   .select("-__v")
    //   .sort({ _id: -1 })
    //   .then((dbUserData) => res.json(dbUserData))
    //   .catch((err) => {
    //     console.log(err);
    //     res.sendStatus(400);
    //   });
  },
  // gets a single user by id
  getUserById({ params, body }, res) {
    User.findOne({ _id: params.userId })
      .populate({
        path: "thoughts",
        select: "__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id! " });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
    // --------------
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
  // create a friend (isnt that nice!)
  createFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true }
    )

      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // deletes a friend - oh no! :(
  deleteFriend({ params }, res) {
    User.findByIdAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendsId } },
      { new: true }
    )
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
