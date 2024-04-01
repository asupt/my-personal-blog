console.log(localStorage.getItem('username'));
console.log(localStorage.getItem('title'));
console.log(localStorage.getItem('content'));

let u1 = localStorage.getItem('username');
let t1 = localStorage.getItem('title');
let c1 = localStorage.getItem('content');

console.log(localStorage.getItem('newPost'));

let postObject = {
    username: u1,
    title: t1,
    content: c1
}

if (localStorage.getItem('newPost') == 'true') {

var postsArray = [];
var oldPosts = [];

if (localStorage.getItem('fullBlog') != undefined) {
    oldPosts = JSON.parse(localStorage.getItem('fullBlog'));
}

postsArray.push(postObject);

if (oldPosts != []) {
    fullBlog = postsArray.concat(oldPosts);
}
else {
    fullBlog = []
}

if (fullBlog != []) {
    localStorage.setItem('fullBlog', JSON.stringify(fullBlog));
}
else {
    localStorage.setItem('fullBlog', JSON.stringify(postsArray));
}

localStorage.setItem('newPost', 'false');

console.log(localStorage.getItem('fullBlog'));

}

// localStorage.clear();