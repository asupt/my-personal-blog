console.log(localStorage.getItem('username'));
console.log(localStorage.getItem('title'));
console.log(localStorage.getItem('content'));

let u1 = localStorage.getItem('username');
let t1 = localStorage.getItem('title');
let c1 = localStorage.getItem('content');

console.log(localStorage.getItem('newPost'));

//create object for the newest post

let postObject = {
    username: u1,
    title: t1,
    content: c1
}

//determine whether the page was accessed by submit button on form or by refresh/other method

if (localStorage.getItem('newPost') == 'true') {

var postsArray = [];
var oldPosts = [];
//check if the relevant key in storage has been set before accessing archive of older posts
if (localStorage.getItem('fullBlog') != undefined) {
    oldPosts = JSON.parse(localStorage.getItem('fullBlog'));
}
//begin forming the array of posts to generate
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
}

//final array generated
var blogArray = JSON.parse(localStorage.getItem('fullBlog'));
console.log(blogArray);

////////////// Creating elements on the blog //////////////

const blogBody = document.querySelector('#blogBody');

var idNumber = 0;

// iterate through objects in the stored array of blog posts

for (i of blogArray) {
console.log(i);
// sequential ID generation

idNumber += 1;
idNew = "b"+idNumber

localStorage.setItem('id', idNew);

//create blog post elements

var item = document.createElement("div");
item.className = 'item'; 
item.setAttribute('id', idNew);

var itemTitle = document.createElement("h2");
itemTitle.className = 'postData';
itemTitle.setAttribute('id', 'title');
itemTitle.textContent = i.title;

var itemContent = document.createElement("p");
itemContent.className = 'postData';
itemContent.setAttribute('id', 'content');
itemContent.textContent = i.content;

var extraSpace = document.createElement("p");

var itemUsername = document.createElement("h3");
itemUsername.className = 'postData';
itemUsername.setAttribute('id', 'username');
itemUsername.textContent = i.username;

blogBody.appendChild(item);

// get location of newest parent post
newPost = document.querySelector('#'+idNew);

//create blog post
newPost.appendChild(itemTitle);
newPost.appendChild(itemContent);
newPost.appendChild(extraSpace);
newPost.appendChild(itemUsername);

}


// localStorage.clear();