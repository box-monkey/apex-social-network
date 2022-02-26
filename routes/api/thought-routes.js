// /api/thoughts
const router = require("express").Router();
const {
  getThoughts,
  getThoughtsById,
  updateThoughts,
  deleteThoughts,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// api/thoughts
router.route("/").get(getThoughts);

// api/thoughts/:id
router
  .route("/")
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

router.route("");

router.route("/:thoughtId/reactions").delete(deleteThoughts);

// api/thoughts/thoughtsId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughtsId/<reactions>/<reactionId>
router.route("toughtsId/reactions/:reactionId").delete(removeReaction);

module.exports = router;

//     GET to get all thoughts
//     GET to get a single thought by its _id
//     POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

//     PUT to update a thought by its _id
//     DELETE to remove a thought by its _id
// /api/thoughts/:thoughtId/reactions

//     POST to create a reaction stored in a single thought's reactions array field
