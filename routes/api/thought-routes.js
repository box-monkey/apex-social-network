// /api/thoughts
const router = require("express").Router();
const {
  getThoughts,
  getThoughtsById,
  deleteThoughts,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// api/thoughts
router.route("/").get(getThoughts);

// api/thoughts/:id
router.route("/:thoughtId").get(getThoughtsById).delete(deleteThoughts);

// api/thoughtsid/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// api/thoughtid/reactions/:reactionsId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
