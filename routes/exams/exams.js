const express = require('express');
const router = express.Router();
const examController = require('../../controllers/exams/exams');

router.get('/get', examController.getExams);
router.post('/add', examController.addExam);
router.post('/find', examController.findExam);
router.put('/update/:examId', examController.updateExam);
router.delete('/delete/:examId', examController.deleteExams);

module.exports = router;
