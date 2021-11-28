import axios from 'axios'

const BASE_URL = 'https://nodereplit.nathanmartinez2.repl.co'

export const sendMessage = (messageData) => {
	if (!messageData || !messageData.username || !messageData.message) return

	axios.post(`${BASEURL}/users`, messageData)
		.then(function(response) {
			console.log(response);
			alert('Message Sent!')
		})
		.catch(function(error) {
			console.log(error);
			alert('Unable to send message.')
		});
}