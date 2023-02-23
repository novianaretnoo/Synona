//variabel untuk menampung/ mengambil data quiz controller, lalu menginisiasi endpoin
const quizController = require('../controllers/quiz')
const router = require('express').Router()

router.post('/', quizController.create)
router.get('/', quizController.getAll)
router.get('/:id', quizController.findOne)
router.put('/:id', quizController.update)
router.delete('/:id', quizController.delete)
router.get('/category/:id', quizController.getByCategoryId)

module.exports = router