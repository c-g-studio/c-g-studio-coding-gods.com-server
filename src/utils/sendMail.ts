import "dotenv/config";
import nodemailer, { SendMailOptions } from "nodemailer";
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

const transporter = nodemailer.createTransport(transporterConfig);

export const sendEmail = async (email: SendMailOptions): Promise<void> => {
  try {
    await transporter.sendMail(email);
  } catch (error) {
    console.log(error.message);
  }
};
