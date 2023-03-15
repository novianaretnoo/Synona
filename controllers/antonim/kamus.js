const db = require('../../models');
const KamusAntonim = db.kamusantos;
const { Sequelize } = require('sequelize');

exports.create = async (req, res) => {
    if (!req.body.namaAwal || !req.body.namaLawan) {
        res.json({
            status: 400,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }

    const CekKamusAntonim = {
        namaAwal: req.body.namaAwal,
        namaLawan: req.body.namaLawan,
    };

    try {
        const createKamusAntonim = await KamusAntonim.create(CekKamusAntonim);
        res.json({
            message: "Sukses, Data Kamus Antonim berhasil ditambahkan",
            data: createKamusAntonim
        });
    }
    catch (error) {
        res.json({
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const GetDataKamusAntonim = await KamusAntonim.findAll();
        res.json({
            message: "Suksess, Semua data Kamus Antonim berhasil ditemukan",
            data: GetDataKamusAntonim
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}

// //optional, mau dipake atau engga
exports.getById = async (req, res) => {
    const id = req.params.id;
    const nomor = await KamusAntonim.count({ where: { id: id } });

    if (isNaN(id)) {
        res.json({
            status: 400,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    } else if (nomor == 0) {
        res.json({
            status: 404,
            message: "Id tidak ditemukan",
            data: null
        });
        return;
    }

    try {
        const GetDataKamusAntonim = await KamusAntonim.findByPk(id);
        res.json({
            message: "Suksess, Data Kamus Antonim berhasil ditemukan",
            data: GetDataKamusAntonim
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id;
    const nomor = await KamusAntonim.count({ where: { id: id } });

    if (isNaN(id)) {
        res.json({
            status: 400,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    }
    else if (nomor == 0) {
        res.json({
            status: 404,
            message: "Id tidak ditemukan",
            data: null
        });
        return;
    }

    if (!req.body.namaAwal || !req.body.namaLawan) {
        res.json({
            status: 400,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }

    const CekKamusAntonim = {
        namaAwal: req.body.namaAwal,
        namaLawan: req.body.namaLawan,
    };

    try {
        const updateKamusAntonim = await KamusAntonim.update(CekKamusAntonim, {
            where: { id: id }
        });
        res.json({
            message: "Sukses, Data Kamus Antonim berhasil diubah",
            data: updateKamusAntonim
        });
    } catch (error) {
        res.json({
            message: error.message || "Server Error",
            data: null
        });
    }
}  

exports.delete = async (req, res) => {
    const id = req.params.id;
    const nomor = await KamusAntonim.count({ where: { id: id } });

    if (isNaN(id)) {
        res.json({
            status: 400,
            message: "Id harus berupa angka",
            data: null
        });
        return;
    }
    else if (nomor == 0) {
        res.json({
            status: 404,
            message: "Id tidak ditemukan",
            data: null
        });
        return;
    }

    try {
        const deleteKamusAntonim = await KamusAntonim.destroy({
            where: { id: id }
        });
        res.json({
            message: "Sukses, Data Kamus Antonim berhasil dihapus",
            data: deleteKamusAntonim
        });
    }catch (error) {
        res.json({
            message: error.message || "Server Error",
            data: null
        });
    }
}