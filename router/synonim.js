const router = require('express').Router()
//variabel untuk menampung/ mengambil data synonim dan kamus controller, lalu menginisiasi endpoin
const JenisSynonimController = require('../controllers/synonim/jenis')
const FaktorSynonimController = require('../controllers/synonim/faktor')
const KamusSynonimController = require('../controllers/synonim/kamus')

router.post('/synonim/jenis', JenisSynonimController.create)
router.get('/synonim/jenis', JenisSynonimController.getAll)
// router.get('/synonim/jenis/:id', JenisSynonimController.findOne) optional
router.put('/synonim/jenis/:id', JenisSynonimController.update)
router.delete('/synonim/jenis/:id', JenisSynonimController.delete)

router.post('/synonim/faktor', FaktorSynonimController.create)
router.get('/synonim/faktor', FaktorSynonimController.getAll)
// router.get('/synonim/faktor/:id', FaktorSynonimController.findOne) optional
router.put('/synonim/faktor/:id', FaktorSynonimController.update)
router.delete('/synonim/faktor/:id', FaktorSynonimController.delete)

router.post('/synonim/kamus', KamusSynonimController.create)
router.get('/synonim/kamus', KamusSynonimController.getAll)
// router.get('/synonim/kamus/:id', KamusSynonimController.findOne) optional
router.put('/synonim/kamus/:id', KamusSynonimController.update)
router.delete('/synonim/kamus/:id', KamusSynonimController.delete)


module.exports = router



