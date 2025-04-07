const requestErrorMessage = (requestStatusCode: number) => {
	switch (requestStatusCode) {
		case 400: {
			return "Your request is invalid";
		}
		// case 401: {
		// 	return "Your API key is wrong";
		// }
		case 403: {
			return "You have reached your daily quota";
		}
		case 429: {
			return "You have made more requests per second than you are allowed";
		}
		case 500: {
			return "We had a problem with our server. Try again later";
		}
		case 504: {
			return "We're temporarily offline for maintenance. Please try again later";
		}
		default: {
			return "Something went wrong";
		}
	}
};

export default requestErrorMessage;
