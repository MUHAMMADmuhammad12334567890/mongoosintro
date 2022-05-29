const { Router } = require("express");

const { studentControler } = require("../controllers/students.cont");

const router = Router();

router.get("/students", studentControler.getStudent);

router.post("/students", studentControler.postStudent);

router.delete('/students/:id', studentControler.deleteStudent)

router.patch('/students/:id', studentControler.patchStudent)

module.exports = router


