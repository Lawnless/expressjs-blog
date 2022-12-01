const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const { success, info, warning, error } = require('./src/functions/messages.js');

var blog_posts = [
	{ postId: 0, postAuthor: 'John Doe', postTitle: 'This is title 1!', postText: 'Hello World!', postDate: '30/11/2022 13:57' },
	{ postId: 1, postAuthor: 'Mark Doe', postTitle: 'And it is 2!', postText: 'Hello Earth!', postDate: '30/11/2022 13:57' },
	{ postId: 2, postAuthor: 'Michael Doe', postTitle: 'This one is 3!', postText: 'Hello Mars!', postDate: '30/11/2022 13:57' }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use('/static', express.static(path.join(__dirname, './src')));

app.get('/', (req, res) => {
	res.render('index', { blog_posts: blog_posts });
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
			postTitle: blog_posts[req.params.postId].postTitle,
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