export interface MailSenderGateway {
    sendEmail(subject: string, content: string, recipient: string): Promise<void>
}