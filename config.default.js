'use strict';

var crypto = require('crypto');

module.exports = {
	root: '',
	db: {
		host: '127.0.0.1',
		db: 'gandhi'
	},
	auth: {
		secret: 'rubber bunny'
	},
	mail: {
		transport: 'SMTP',
		mailOptions: {
			service: 'Mandrill',
			auth: {
				user: 'mike.marcacci@gmail.com',
				pass: '0eCce8d2FKfLrTxiFYOReg'
			}
		},
		messageOptions: {
			from: 'BQI <bigquestions@uchicago.edu>'
		}
	},
	components: {
		directory: __dirname + '/components'
	},
	files: {
		directory: __dirname + '/files'
	},
	port: 3000
};
