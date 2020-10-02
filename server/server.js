require('dotenv').config()
const express = require('express'),
    app = express(),
    path = require('path'),
    nodemailer = require('nodemailer'),
    controller = require('./controller'),
    {
        SERVER_PORT,
        SMTP_HOST,
        SMTP_USER,
        SMTP_PASS,
    } = process.env,
    transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    })



app.use(express.static(__dirname + '/../build'))

app.use(express.json())

app.get('/resume', controller.resumeRedirect)

app.get('/api/githubstats', controller.getGitHubStats)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body,
        msg = {
            from: SMTP_USER,
            to: 'jeff@jeffpalm.dev',
            subject: `[Contact Form] - ${subject}`,
            text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
        }

    await transporter.sendMail(msg, (error, info) => {
        if (error) return res.status(500).send(error)
    })

    res.sendStatus(200)
})

app.listen(SERVER_PORT, () => {
    console.log(`Servin and observin port: ${SERVER_PORT}`)
})
