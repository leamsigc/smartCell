const nodemailer = require('nodemailer');

module.exports = (form) => {

    var transport = nodemailer.createTransport({
        service: 'hotmail',
        auth:{
            user:'fn_venezuela@hotmail.com',
            pass:'*********'
        }
    });

    const mailOption = {
        from:`"${form.name} " <${form.email}>`,
        to:'Dest',
        subject: form.subject,
        html:`
        <strong>Name:</strong>${form.name}</br>
        <strong>Email:</strong>${form.email}</br>
        <strong>Message:</strong>${form.msg}</br>
        `
    };

    transport.sendMail(mailOption,function(err,info){
        if(err)
            console.log(err);
        else
            console.log(info);

    });
};