"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
require("dotenv/config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const { UKR_NET_USER, UKR_NET_PASSWORD } = process.env;
const transporterConfig = {
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
        user: UKR_NET_USER,
        pass: UKR_NET_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
};
const transporter = nodemailer_1.default.createTransport(transporterConfig);
const sendEmail = async (email) => {
    try {
        await transporter.sendMail(email);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.sendEmail = sendEmail;
