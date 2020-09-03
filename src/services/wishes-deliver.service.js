const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: parseInt(process.env.SMTP_PORT) || 587,
    auth: {
        user: process.env.SMTP_USER || 'marshall.lubowitz@ethereal.email',
        pass: process.env.SMTP_PASSWORD || 'tpGgDEmgfrnmfJgvAq'
    }
});

const buildMessage = (req_string) => {
    return {
        from: 'do_not_reply@northpole.com',
        to: 'santa@northpole.com',
        subject: 'New requests received',
        text: `${req_string}`,
        html: req_string.split('\n').reduce((pv,cv) => {
            return pv + `<ul>${cv}</ul>`;
        }, '')
    };
};

// Ideally we should find another way of storing and pulling the requests, 
// accessing the same global object on 2 different services could cause problems
pullRequests = () => {
    let ans = ''
    while(global.pendingRequests.length > 0) {
        let request = global.pendingRequests.shift();
        ans += `Username: ${request.username}\nAddress: ${request.address}\nWish: ${request.wish}\n`
    }
    return ans;
};

sendRequests = async () => {
    let requests_string = pullRequests();
    if (requests_string === '') {
        console.log('No pending requests');
    } else {
        console.log('Pending requests retrieved');
        const resp = await transporter.sendMail(buildMessage(requests_string));
        if (resp.accepted.length > 0) {
            console.log('Requests delivered successfully');
        } else {
            console.log('Error: Requests could not be delivered!!!');
        }
    }
}

startRequestDelivery = () => {
    setInterval(sendRequests, 15000);
};

module.exports = { startRequestDelivery };