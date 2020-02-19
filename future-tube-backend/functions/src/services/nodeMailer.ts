import {MailSenderGateway} from "../business/gateways/email/mailSenderGateway";
import * as nodemailer from 'nodemailer'

export class NodeMailer implements MailSenderGateway {
    private static FROM_EMAIL = "recovery_password@astromatch.com"
    private static EMAIL_TEST = "leonardocpn@gmail.com"

    async sendEmail(subject: string, content: string, recipient: string): Promise<void> {
        const transporter = nodemailer.createTransport({
            host: "debugmail.io",
            port: 25,
            secure: false,
            auth: {
                user: "leonardocpn@gmail.com",
                pass: "2f5d9160-4438-11ea-b33f-fff072c093bd"
            },
            tls: {rejectUnauthorized: false}
        })

        const mailOptions = {
            from: NodeMailer.FROM_EMAIL,
            to: NodeMailer.EMAIL_TEST,
            subject,
            text: content
        }

        transporter.sendMail(mailOptions, (error: any, info: any) => {
            if (error)
                return error.message
        })
    }
}
