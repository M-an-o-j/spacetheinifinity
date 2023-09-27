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

// const OtpEmail = async (req, res, next) => {

//     const { email } = req.body
//     function getRandom(max) {
//         return Math.round(Math.random() * max)
//     }

//     for (let step = 0; step < 5; step++) {

//         otp += getRandom(6)
//     }

//     const message = `Hey this is ${otp}`

//     try {
//         sendOtp({
//             email: email,
//             subject: "message from aliens",
//             message
//         })
//     } catch (error) {
//         res.status(400).json({
//             message: error
//         })
//     }

//     res.status(200).json({
//         message: `send it successfully !!`,
//         otp
//     })

//     otp = ""
// }

module.exports = { AlienEmail }