const axios = require('axios');
const USERS_URL = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json';
const USER_PROFILES_URL = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json';

const fetchUser = async (name) => {
    const users = await axios.get(USERS_URL);
    const targetUser = users.data.filter((user) => { 
        return user.username === name}
    );
    // We build the result with a "code" field so that we get more information
    // in case there is no user or we have duplicates.(It should not be the case if the DB prevents it)
    if (targetUser.length === 0) {
        return {
            code: "USER IS NOT REGISTERED"
        };
    } else if (targetUser.length > 1) {
        return {
            code: "MORE THAN ONE USER WITH THAT NAME"
        };
    } else {
        return {
            code: "OK",
            userid: targetUser[0].uid,
            username: targetUser[0].username
        };
    }
};

const fetchUserDetails = async (id) => {
    const userProfiles = await axios.get(USER_PROFILES_URL);
    const targetUserProfile = userProfiles.data.filter((userProfile) => { 
        return userProfile.userUid === id}
    );
    // We assume the "userUid" is unique in DB
    return {
        userid : targetUserProfile[0].userUid,
        address: targetUserProfile[0].address,
        birthdate: targetUserProfile[0].birthdate
    };
};

module.exports = { fetchUser, fetchUserDetails };