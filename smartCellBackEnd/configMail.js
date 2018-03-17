const nodemailer = require('nodemailer');
const person = require('./contra');

module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'Gmail',
 port:587,
 auth: {
 user: 'daytonacellrepair@gmail.com', 
 pass: `${person.password}` 
 }
 });

const mailOptions = {
 from: `”${formulario.name} 👻” <${formulario.email}>`,
 to: 'leamsigc@hotmail.com', // Cambia esta parte por el destinatario
 subject: 'Cell Phone Repair',
 html: `<ul>
 <li>Name: ${formulario.name}</li> <br/>
 <li>E-mail: ${formulario.email}</li> <br/>
 <li>Phone Number: ${formulario.phone}</li>
 <h3>Message</h3>
 <p>${formulario.message}</p>
 `
 };

transporter.sendMail(mailOptions, function (err, info) {
 if (err){
     return console.log(err);
 }
 else{
     console.log('Message sent: %s',info.messageId);
     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 }
 });
}