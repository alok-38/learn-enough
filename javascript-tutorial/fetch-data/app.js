document.addEventListener('DOMContentLoaded', function () {
    const loadPostsBtn = document.getElementById('loadPostsBtn');
    
    // Attach a click event listener to the button
    loadPostsBtn.addEventListener('click', function () {
        // Fetch data from the JSONPlaceholder API when the button is clicked
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // Handle the fetched data
                displayPosts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});

function displayPosts(posts) {
    const postList = document.getElementById('postList');

    // Clear any existing content
    postList.innerHTML = '';

    // Loop through the posts and create list items
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        postList.appendChild(listItem);
    });
}