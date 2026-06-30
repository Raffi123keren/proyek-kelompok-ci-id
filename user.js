const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
// Ganti dengan model database Anda (contoh menggunakan Sequelize/Mongoose)
const User = require('../models/User'); 

// @route   POST /api/register
// @desc    Register user
// @access  Public
router.post(
  '/register',
  [
    // 1. Validasi Input
    check('username', 'Username harus diisi').not().isEmpty(),
    check('email', 'Silakan masukkan email yang valid').isEmail(),
    check('password', 'Password minimal harus 6 karakter').isLength({ min: 6 })
  ],
  async (req, res) => {
    // Cek hasil validasi input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // 2. Cek apakah user sudah terdaftar
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'Email sudah terdaftar' }] });
      }

      // 3. Buat instance user baru
      user = new User({
        username,
        email,
        password
      });

      // 4. Enkripsi password menggunakan bcrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // 5. Simpan user ke database
      await user.save();

      // 6. Kembalikan respons sukses
      res.status(201).json({ message: 'Registrasi berhasil!' });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;