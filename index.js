// 1. Data for the three posts in your HTML
const postData = [
    { likes: 21, isLiked: false },    // Vincent
    { likes: 12502, isLiked: false }, // Gustave
    { likes: 15137, isLiked: false }  // Joseph
]

// 2. Select all heart icons and all <h4> tags (where the likes are)
const heartIcons = document.querySelectorAll('.icons img:first-child')
const likeTexts = document.querySelectorAll('h4')

// 3. Add the logic to each heart
heartIcons.forEach((heart, index) => {
    // Add a pointer cursor so you know it's a button
    heart.style.cursor = "pointer"
    
    heart.addEventListener('click', function() {
        const post = postData[index]
        
        if (post.isLiked) {
            post.likes--
            heart.classList.remove('liked')
        } else {
            post.likes++
            heart.classList.add('liked')
        }
        
        // Toggle the state
        post.isLiked = !post.isLiked
        
        // Update the actual text on the screen
        likeTexts[index].textContent = `${post.likes.toLocaleString()} likes`
    })
})
