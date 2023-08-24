import { Resend } from 'resend';

const resend = new Resend('re_FWRddACv_N6hBSXAnDGeuhamz17M4bUMP');

export const sendEmail = async (email, subject, content)=>{

    try {
        const data = await resend.email.send({
            from: 'ClickMarket <clickmarket@gmail.com>',
            to: email,
            subject: subject,
            html: content,
        });
        
    } catch (error) {
        console.log(error);
    }


}
