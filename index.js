const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const { success, info, warning, error } = require('./src/functions/messages.js');
// const mysqlDB = require('./src/functions/connection.js');

// mysqlDB.getConnection((err, connection) => {
// 	mysqlDB.query('SELECT * FROM blog_posts');

// });

var blog_posts = [
	{ postId: 0, postAuthor: 'Lawnless', postText: 'Hello World!', postDate: '30/11/2022 13:57' },
	{ postId: 1, postAuthor: 'Isa Haktan Colak', postText: 'Hello World 2!', postDate: '30/11/2022 13:57' },
	{ postId: 2, postAuthor: 'Yesa Altun', postText: 'Hello World 3!', postDate: '30/11/2022 13:57' }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.get('/read/:postId', (req, res) => {
	if (req.params.postId < blog_posts.length) {
		res.render('single-post', {
			postId: req.params.postId,
			postAuthor: blog_posts[req.params.postId].postAuthor,
			postText: blog_posts[req.params.postId].postText,
			postDate: blog_posts[req.params.postId].postDate
		});
	} else {
		res.status(404).send('404 Not Found!');
	}
});

app.listen(port, () => {
	success(`Site 'http://localhost:${port}' üzerinde aktif edildi.`);
});