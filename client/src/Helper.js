import { admins } from './variables';

export const isAdmin = (email) => {
	let ret = false;
	for (let i = 0; i < admins.length; i++) {
		if (email === admins[i]) {
			ret = true;
			break;
		}
	}
	return ret;
};
