const router = require('express').Router()
//variabel untuk menampung/ mengambil data antonim dan kamus controller, lalu menginisiasi endpoin

const JenisAntonimController = require('../controllers/antonim/jenis')
const FaktorAntonimController = require('../controllers/antonim/sifat')
const KamusAntonimController = require('../controllers/antonim/kamus')

router.post('/antonim/jenis', JenisAntonimController.create)
router.get('/antonim/jenis', JenisAntonimController.getAll)
// router.get('/antonim/jenis/:id', JenisAntonimController.findOne) optional
router.put('/antonim/jenis/:id', JenisAntonimController.update)
router.delete('/antonim/jenis/:id', JenisAntonimController.delete)

router.post('/antonim/faktor', FaktorAntonimController.create)
router.get('/antonim/faktor', FaktorAntonimController.getAll)
// router.get('/antonim/faktor/:id', FaktorAntonimController.findOne) optional
router.put('/antonim/faktor/:id', FaktorAntonimController.update)
router.delete('/antonim/faktor/:id', FaktorAntonimController.delete)

router.post('/antonim/kamus', KamusAntonimController.create)
router.get('/antonim/kamus', KamusAntonimController.getAll)
// router.get('/antonim/kamus/:id', KamusAntonimController.findOne) optional
router.put('/antonim/kamus/:id', KamusAntonimController.update)
router.delete('/antonim/kamus/:id', KamusAntonimController.delete)

module.exports = router