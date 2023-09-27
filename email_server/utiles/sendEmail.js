const nodemailer = require('nodemailer')

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "Your email",
            pass: "Your pass"
        }
    });

    const message = {
        from: `Your email`,
        to:options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(message,(err) => {
        if(err){
            console.log(err)
        }else{
            console.log("email sent successfully");
        }
    })
}

module.exports = sendEmail; 