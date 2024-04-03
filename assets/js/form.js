const submitLink = document.querySelector('#submitLink');



submitLink.addEventListener('click', function(event) {

    //check if form has been fully completed
    const titleHolder = document.getElementById("inputTitle").value;
    const userHolder = document.getElementById("inputUsername").value;
    const contentHolder = document.getElementById("inputContent").value;
    //submit form
    if (titleHolder != '' && userHolder != '' && contentHolder != '') {
        let inputUsername = document.querySelector('#inputUsername');
        let inputTitle = document.querySelector('#inputTitle');
        let inputContent = document.querySelector('#inputContent');


        localStorage.setItem("username", inputUsername.value);
        localStorage.setItem("title", inputTitle.value);
        localStorage.setItem("content", inputContent.value);
        localStorage.setItem('newPost', 'true');
    

        event.preventDefault();
        window.location.href="blog.html";
    }
    //alert user to completely fill in the form
    else {
        console.log(titleHolder);
        window.alert("Please make sure you have filled in your username, title, and content.");
        event.preventDefault();
    }
    
});

