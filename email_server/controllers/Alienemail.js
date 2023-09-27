const sendemail = require('../utiles/sendEmail')

// let otp = ""

const AlienEmail = async (req, res, next) => {
    const { name, email } = req.body

    const message = `Hey ${name} , we are aliens. Now you are connected with us`

    try {
        sendemail({
            email: email,
            subject: "message from aliens",
            message
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
    res.status(200).json({
        message: `send it successfully ${name} !!`
    })

}


module.exports = { AlienEmail }
