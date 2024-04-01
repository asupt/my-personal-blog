const submitLink = document.querySelector('#submitLink');

console.log(submitLink);

console.log(submitLink.href);
submitLink.addEventListener('click', function(event) {

    let inputUsername = document.querySelector('#inputUsername');
    let inputTitle = document.querySelector('#inputTitle');
    let inputContent = document.querySelector('#inputContent');


    localStorage.setItem("username", inputUsername.value);
    localStorage.setItem("title", inputTitle.value);
    localStorage.setItem("content", inputContent.value);
    localStorage.setItem('newPost', 'true');
    

    event.preventDefault();
    window.location.href="blog.html";
    
    
    
})

