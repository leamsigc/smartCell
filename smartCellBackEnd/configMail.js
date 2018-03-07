const nodemailer = require('nodemailer');
const person = require('./contra');

module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'Gmail',
 auth: {
 user: 'daytonacellrepair@gmail.com', // Cambialo por tu email
 pass: `${person.password}` // Cambialo por tu password
 }
 });

const mailOptions = {
 from: `”${formulario.name} 👻” <${formulario.email}>`,
 to: `${formulario.email}`, // Cambia esta parte por el destinatario
 subject: formulario.subject,
 html: `
 <strong>Nombre:</strong> ${formulario.name} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.msg}
 `
 };

transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}