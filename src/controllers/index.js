const postWish = async (req, res, next) => {
    const userData = req.headers.userData;
    
    // Since there is no restriction of amount of requests pending
    // or multiple requests from the same user, 
    // we just post the wish to the pendingRequests array.
    global.pendingRequests.push({
        username: userData.username,
        address: userData.address,
        wish: userData.wish
    });
    res.status(200).json({
        message: 'REQUEST SENT'
    });
};

module.exports = { postWish };