const postList = document.getElementById('postList');

// Fetch Data Function
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            displayPosts(posts);
        })
        .catch(error => {
            console.error('Failed to fetch posts:', error);
            postList.innerHTML = `<li style="color: red;">Failed to load posts.</li>`;
        });
}

// Function to Render Posts on Page
function displayPosts(posts) {
    postList.innerHTML = '';  // Clear list if needed
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${post.id}. ${post.title}`;
        postList.appendChild(li);
    });
}

// Fetch posts when the page loads
fetchPosts();