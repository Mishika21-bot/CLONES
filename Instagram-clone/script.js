const samplePosts = [
    {
        id: 1,
        username: 'john_doe',
        userImage: 'images/downloadjd.jpeg',
        postImage: 'images/jd.jpeg',
        likes: 127,
        caption: 'Beautiful sunset today! 🌅',
        comments: 15,
        timeAgo: '2 hours ago',
        liked: false,
        saved: false
    },
    {
        id: 2,
        username: 'jane_smith',
        userImage: 'images/imagesjs.jpeg',
        postImage: 'images/js.jpeg',
        likes: 89,
        caption: 'Coffee and coding ☕️💻 #developer #life',
        comments: 8,
        timeAgo: '4 hours ago',
        liked: false,
        saved: false
    },
    {
        id: 3,
        username: 'travel_buddy',
        userImage: 'images/imagestb.jpeg',
        postImage: 'images/imagestb1.jpeg',
        likes: 234,
        caption: 'Adventures await! 🏔️ #travel #nature #mountains',
        comments: 32,
        timeAgo: '1 day ago',
        liked: false,
        saved: false
    }
];

document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    setupEventListeners();
});

function renderPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    samplePosts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
        <div class="post-header">
            <img src="${post.userImage}" alt="${post.username}">
            <span class="username">${post.username}</span>
            <i class="fas fa-ellipsis-h more"></i>
        </div>
        <img src="${post.postImage}" alt="Post" class="post-image">
        <div class="post-actions">
            <i class="fas fa-heart ${post.liked ? 'liked' : ''}" onclick="toggleLike(${post.id})"></i>
            <i class="fas fa-comment" onclick="focusComment(${post.id})"></i>
            <i class="fas fa-paper-plane"></i>
            <i class="fas fa-bookmark save ${post.saved ? 'saved' : ''}" onclick="toggleSave(${post.id})"></i>
        </div>
        <div class="post-likes">${post.likes.toLocaleString()} likes</div>
        <div class="post-caption">
            <span class="username">${post.username}</span>
            ${post.caption}
        </div>
        <div class="post-comments">View all ${post.comments} comments</div>
        <div class="post-time">${post.timeAgo}</div>
    `;
    return postDiv;
}

function setupEventListeners() {
    const modal = document.getElementById('post-modal');
    const plusIcon = document.querySelector('.fa-plus-square');
    const closeBtn = document.querySelector('.close');

    plusIcon.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

function toggleLike(postId) {
    const post = samplePosts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        renderPosts();
    }
}

function toggleSave(postId) {
    const post = samplePosts.find(p => p.id === postId);
    if (post) {
        post.saved = !post.saved;
        renderPosts();
    }
}

function focusComment(postId) {
    alert('Comment functionality would be implemented here!');
}

function viewStory(username) {
    alert(`Viewing ${username}'s story!`);
}

function createPost() {
    const imageInput = document.getElementById('post-image');
    const captionInput = document.getElementById('post-caption');
    
    if (!imageInput.files[0]) {
        alert('Please select an image!');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const newPost = {
            id: samplePosts.length + 1,
            username: 'your_username',
            userImage: 'https://via.placeholder.com/32',
            postImage: e.target.result,
            likes: 0,
            caption: captionInput.value || 'New post!',
            comments: 0,
            timeAgo: 'just now',
            liked: false,
            saved: false
        };

        samplePosts.unshift(newPost);
        renderPosts();
        
        imageInput.value = '';
        captionInput.value = '';
        document.getElementById('post-modal').style.display = 'none';
    };
    
    reader.readAsDataURL(imageInput.files[0]);
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post');
    
    posts.forEach(post => {
        const username = post.querySelector('.username').textContent.toLowerCase();
        const caption = post.querySelector('.post-caption').textContent.toLowerCase();
        
        if (username.includes(searchTerm) || caption.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = searchTerm === '' ? 'block' : 'none';
        }
    });
}

function loadMorePosts() {
    console.log('Loading more posts...');
}

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'l' && !event.ctrlKey && !event.metaKey) {
        const firstPost = samplePosts[0];
        if (firstPost) {
            toggleLike(firstPost.id);
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log('Instagram Clone loaded successfully! 📸');
