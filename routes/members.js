﻿const express = require("express");
const router = express.Router();
const {
  createNewMember,
  getMembers,
  getMemberById,
  getMembersCount,
  updateMember,
  deleteMember,
} = require("../controllers/members");

router.get("/members", getMembersCount, getMembers);
router.post("/members", createNewMember);
router.get("/members/:id", getMemberById);
router.delete("/members/:id", deleteMember);
router.put("/members/:id", updateMember);
router.get("/members/count", getMembersCount);

module.exports = router;
