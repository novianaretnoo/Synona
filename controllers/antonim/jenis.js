const db = require('../../models');
const JenisAntonim = db.jantonims;
const { Sequelize } = require('sequelize');

exports.create = async (req, res) => {
    if (!req.body.antonimMutlak || !req.body.antonimSemirip || !req.body.antonimSelingkung) {
        res.json({
            status: 400,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }
    const CekJenisAntonim = {
        antonimMutlak: req.body.antonimMutlak,
        antonimSemirip: req.body.antonimSemirip,
        antonimSelingkung: req.body.antonimSelingkung,
    };

    try {
        const Createja = await JenisAntonim.create(CekJenisAntonim);
        res.json({
            message: "Sukses, Data jenis antonim berhasil ditambahkan",
            data: Createja
        });
    } catch (error) {
        res.json({
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.getAll = async (req, res) => {
    try {
        const Getja = await JenisAntonim.findAll();
        res.json({
            message: "Suksess, Semua data jenis antonim berhasil ditemukan",
            data: Getja
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
    const nomor = await JenisAntonim.count({ where: { id: id } });

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
        const GetIdja = await JenisAntonim.findOne({ where: { id: id } });
        res.json({
            message: "Sukses, Data jenis antonim berhasil ditemukan",
            data: GetIdja
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
    const nomor = await JenisAntonim.count({ where: { id: id } });

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
    
    if (!req.body.antonimMutlak || !req.body.antonimSemirip || !req.body.antonimSelingkung) {
        res.json({
            status: 400,
            message: "Sepertinya ada terlewat, coba ulang dan tidak boleh kosong!",
            data: null
        });
        return;
    }

    const CekJenisAntonim = {
        antonimMutlak: req.body.antonimMutlak,
        antonimSemirip: req.body.antonimSemirip,
        antonimSelingkung: req.body.antonimSelingkung,
    };

    try {
        const Updateja = await JenisAntonim.update(CekJenisAntonim, { where: { id: id } });
        res.json({
            message: "Sukses, Data jenis antonim berhasil diupdate",
            data: Updateja
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    const nomor = await JenisAntonim.count({ where: { id: id } });

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
        const Deleteja = await JenisAntonim.destroy({ where: { id: id } });
        res.json({
            message: "Sukses, Data jenis antonim berhasil dihapus",
            data: Deleteja
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message || "Server Error",
            data: null
        });
    }
}