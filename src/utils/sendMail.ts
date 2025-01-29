import nodemailer, { SendMailOptions }  from 'nodemailer';
import 'dotenv/config'
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

export const sendEmail = async (email:SendMailOptions):Promise<void> => {
    transporter
        .sendMail(email)
        .then(() => console.log("Email send success"))
        .catch((error) => console.log(error.message));
};


