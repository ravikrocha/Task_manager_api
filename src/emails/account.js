const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'ravikrocha@gmail.com',
        subject:'Welcome to the Task app',
        text: `Welcome to the app, ${name}. We're happy you are with us!`
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'ravikrocha@gmail.com',
        subject:'Sorry to see you go!',
        text:`we're sorry you left us ${name}. We will hope see you back soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}