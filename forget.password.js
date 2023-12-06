const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/forgotpassword', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const User = {
    email: "aman@yopmail.com",
    password: 1234,
    otp: '',
    otpExpiration: Date,
}

// const User = mongoose.model('User', {
//     email: String,
//     password: String,
//     otp: String,
//     otpExpiration: Date,
// });

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'yopmail',
    auth: {
        user: 'maninder@yopmail.com',
        pass: 'maninder',
    },
});

// Generate a random OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Routes
app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).send('User not found');
    }

    // Generate OTP and expiration date
    const otp = generateOTP();
    const otpExpiration = new Date();
    otpExpiration.setMinutes(otpExpiration.getMinutes() + 5); // OTP expires in 5 minutes

    // Save OTP and expiration date to the user
    user.otp = otp;
    user.otpExpiration = otpExpiration;
    await user.save();

    // Send OTP email
    const mailOptions = {
        from: 'maninder@yopmail.com',
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('OTP sent successfully');
    });
});

app.post('/reset-password', async (req, res) => {
    const { email, otp, newPassword } = req.body;

    // Find the user by email and check if the OTP is valid
    const user = await User.findOne({
        email,
        otp,
        otpExpiration: { $gt: new Date() },
    });

    if (!user) {
        return res.status(400).send('Invalid or expired OTP');
    }

    // Update the user's password and clear the OTP fields
    user.password = newPassword;
    user.otp = undefined;
    user.otpExpiration = undefined;
    await user.save();

    res.status(200).send('Password reset successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
