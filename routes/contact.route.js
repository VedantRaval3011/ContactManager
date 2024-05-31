const express = require("express")
const router = express.Router();
const {getAllContacts,getContact,updateContact,deleteContact,createContact} = require("../controllers/contact.controller.js");
const validateToken = require("../middleware/validateTokenHandler.middleware.js");

router.use(validateToken)
// router.route("/").get(getAllContacts);
// router.route("/").post(createContact);
router.route("/").get(getAllContacts).post(createContact);

// router.route("/:id").get(getContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;