// Sample blog post data
const blogPosts = [
    {
        id: 1,
        title: "Top 10 Study Destinations Around the World",
        excerpt: "Explore the best places to study abroad, from vibrant cities to serene campuses.",
        image: "assets/images/travel-to-study.png",
        author: "Jane Doe",
        date: "2023-05-01"
    },
    {
        id: 2,
        title: "The Art of Cooking: 5 Essential Techniques",
        excerpt: "Master the basics of cooking with these five essential techniques every chef should know.",
        image: "assets/images/cooking.png",
        author: "John Smith",
        date: "2023-05-05"
    },
    {
        id: 3,
        title: "Understanding the Universe: A Beginner's Guide to Space",
        excerpt: "Dive into the wonders of space with this beginner's guide to the universe.",
        image: "assets/images/space.png",
        author: "Alice Johnson",
        date: "2023-05-10"
    },
    {
        id: 4,
        title: "The Benefits of Learning a New Language",
        excerpt: "Discover how learning a new language can enhance your cognitive abilities and career prospects.",
        image: "assets/images/learning.png",
        author: "Michael Brown",
        date: "2023-05-15"
    },
    {
        id: 5,
        title: "Top 5 Online Courses to Boost Your Career",
        excerpt: "Explore the best online courses that can help you advance your career in various fields.",
        image: "assets/images/career-growth.png",
        author: "Emily Davis",
        date: "2023-05-20"
    },
    {
        id: 6,
        title: "Healthy Study Habits for Academic Success",
        excerpt: "Learn how to develop healthy study habits that can lead to academic success.",
        image: "assets/images/study-habits.png",
        author: "David Wilson",
        date: "2023-05-25"
    },
    {
        id: 7,
        title: "Exploring the Benefits of Meditation",
        excerpt: "Discover how meditation can improve your mental health and overall well-being.",
        image: "assets/images/meditation.png",
        author: "Sarah Connor",
        date: "2023-06-01"
    },
    {
        id: 8,
        title: "The Future of Technology: Trends to Watch",
        excerpt: "Stay ahead of the curve by understanding the latest technology trends shaping our world.",
        image: "assets/images/technology.png",
        author: "Mark Zuckerberg",
        date: "2023-06-05"
    },
    {
        id: 9,
        title: "Traveling on a Budget: Tips and Tricks",
        excerpt: "Learn how to travel the world without breaking the bank with these budget-friendly tips.",
        image: "assets/images/budget-travel.png",
        author: "Emily Johnson",
        date: "2023-06-10"
    }
];

// Function to create a post card
function createPostCard(post) {
    return `
        <div class="post-card">
            <img src="${post.image}" alt="${post.title}">
            <div class="post-card-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <p><small>By ${post.author} on ${post.date}</small></p>
                <a href="blog-post.html?id=${post.id}" class="read-more-btn">Read more</a>
            </div>
        </div>
    `;
}

// Function to display featured posts
function displayFeaturedPosts() {
    const featuredPostsContainer = document.getElementById('featuredPosts');
    if (featuredPostsContainer) {
        // Display the first three posts as featured
        featuredPostsContainer.innerHTML = blogPosts.slice(0, 3).map(createPostCard).join('');
    }
}

// Function to display all blog posts
function displayAllPosts() {
    const allPostsContainer = document.getElementById('allPosts');
    if (allPostsContainer) {
        allPostsContainer.innerHTML = blogPosts.map(createPostCard).join('');
    }
}

let comments = []; // Array to store comments

// Function to display comments
function displayComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = comments.map(comment => `<p>${comment}</p>`).join('');
}

// Function to handle comment submission
document.getElementById('commentForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const comment = document.getElementById('comment').value;
    comments.push(comment); // Add comment to the array
    displayComments(); // Update the comments display
    document.getElementById('commentForm').reset(); // Reset the form
});

// Function to display a single blog post
function displayBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (postId) {
        const post = blogPosts.find(p => p.id === parseInt(postId));
        if (post) {
            const blogPostContainer = document.getElementById('blogPost');
            if (blogPostContainer) {
                blogPostContainer.innerHTML = `
                    <h1>${post.title}</h1>
                    <p><small>By ${post.author} on ${post.date}</small></p>
                    <img src="${post.image}" alt="${post.title}" style="max-width: 100%; height: auto;">
                    <p>${post.excerpt}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                `;
                displayComments(); // Display comments for the post
            }
        }
    }
}


// Function to handle blog creation
document.getElementById('createBlogForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const title = document.getElementById('title').value;
    const excerpt = document.getElementById('excerpt').value;
    const image = document.getElementById('image').value;
    const author = document.getElementById('author').value;
    const date = document.getElementById('date').value;

    // Create a new blog post object
    const newPost = {
        id: blogPosts.length + 1, // Incremental ID
        title: title,
        excerpt: excerpt,
        image: image,
        author: author,
        date: date
    };

    // Add the new post to the blogPosts array
    blogPosts.push(newPost);

    // Optionally, redirect to the blog list or show a success message
    alert('Blog post created successfully!');
    window.location.href = 'blog-list.html'; // Redirect to the blog list page
});

let likeCount = 0; // Initialize like count

// Function to handle like button click
document.getElementById('likeButton')?.addEventListener('click', function() {
    likeCount++; // Increment like count
    document.getElementById('likeCount').innerText = likeCount; // Update like count display
});

function shareOnFacebook() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const post = blogPosts.find(p => p.id === parseInt(postId));
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank');
}

function shareOnTwitter() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const post = blogPosts.find(p => p.id === parseInt(postId));
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank');
}

// Call appropriate functions based on the current page
if (document.body.classList.contains('home')) {
    displayFeaturedPosts();
} else if (document.body.classList.contains('blog-list')) {
    displayAllPosts();
} else if (document.body.classList.contains('blog-post')) {
    displayBlogPost();
}