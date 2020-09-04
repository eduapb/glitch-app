const { fetchUser, fetchUserDetails } = require('../services/user.service');

// date should be a Date object and no_years an integer
const dateAddYears = (date, no_years) => {
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();
	return new Date(year + no_years, month, day);
};

const checkAge = (req, res, next) => {
	const birthdate = new Date(req.headers.userData.birthdate);

	// If the user is less than 10 years old we continue, otherwise we stop
	if (Date.now() < dateAddYears(birthdate, 10)) {
		next();
	} else {
		res.status(401).json({
			message: 'USER IS TOO OLD TO SEND REQUESTS TO SANTA :('
		});
	}
};

const isRegistered = async (req, res, next) => {
	const user = await fetchUser(req.body.username.trim().toLowerCase());
	if (user.code !== 'OK') {
		res.status(401).json({
			message: user.code
		});
	} else {
		const userDetails = await fetchUserDetails(user.userid);
		req.headers.userData = {
			userid: user.userid,
			wish: req.body.wish.trim(),
			username: user.username,
			address: userDetails.address,
			birthdate: userDetails.birthdate
		};
		next();
	}
};

module.exports = { checkAge, isRegistered };
