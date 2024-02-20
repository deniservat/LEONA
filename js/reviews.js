let accordionList = document.getElementById("accordion-list");
let addReviewItem;

// Sample reviews array (you may fetch this from a server/database)
let reviewsData = [
    { usernameEntered: "Martha", rating: 4, comment: "Radiant Lip Glow adds a natural, luminous touch. Effortless beauty for daily radiance, truly illuminating!" },
    { usernameEntered: "Louise", rating: 5, comment: "This kit is a must-have! The all-natural formula leaves my lips glowing and healthy. Perfect for daily use." }
];

// Function to display reviews statistics
function displayReviewsStatistics() {
    const totalReviewsElement = document.getElementById('total-reviews');
    const averageRatingElement = document.getElementById('average-rating');

    const totalReviews = reviewsData.length;
    const averageRating = calculateAverageRating();

    totalReviewsElement.textContent = `${totalReviews} Reviews`;
    displayStarRating(averageRating, averageRatingElement);
}

// Function to calculate the average rating
function calculateAverageRating() {
    if (reviewsData.length === 0) {
        return 0;
    }

    const totalRating = reviewsData.reduce((sum, review) => sum + parseInt(review.rating), 0);
    return totalRating / reviewsData.length;
}


// Function to display star rating
function displayStarRating(averageRating, element) {
    const fullStars = Math.floor(averageRating);
    const halfStar = averageRating - fullStars > 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let ratingHTML = '';

    for (let i = 0; i < fullStars; i++) {
        ratingHTML += `<svg class="star average-rating" width="24" height="24" viewBox="0 0 24 24">
        <path class="star-path full" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>`;
    }

    if (halfStar) {
        ratingHTML += `<svg class="star average-rating" width="24" height="24" viewBox="0 0 24 24">
        <path class="empty" d="M12.2584 16.8419L12 16.686L11.7416 16.8419L6.57613 19.9596L7.94693 14.0836L8.01549 13.7897L7.78739 13.5921L3.22308 9.63803L9.23227 9.12821L9.5327 9.10272L9.65036 8.82511L12 3.2813L14.3496 8.82511L14.4673 9.10272L14.7677 9.12821L20.7769 9.63803L16.2126 13.5921L15.9845 13.7897L16.0531 14.0836L17.4239 19.9596L12.2584 16.8419Z"/>
        <path class="full" d="M12 17.27V2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>`;
    }

    for (let i = 0; i < emptyStars; i++) {
        ratingHTML += `<svg class="star average-rating" width="24" height="24" viewBox="0 0 24 24">
        <path class="star-path empty" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>`;
    }

    element.innerHTML = ratingHTML;
}

//Update the handleStarClick function to correctly identify the clicked star -->
function handleStarClick(event) {
    const selectedRating = event.currentTarget.getAttribute('data-rating');

    if (selectedRating) {
        document.getElementById('rating').value = selectedRating;
        highlightSelectedStars(selectedRating);
    }
}

//Update the highlightSelectedStars function to use the correct class for the stars -->
function highlightSelectedStars(selectedRating) {
    const stars = document.querySelectorAll('.star:not(.average-rating)');
    
    stars.forEach(star => {
        const starRating = parseInt(star.getAttribute('data-rating'));

        if (starRating <= selectedRating) {
            star.innerHTML = `<svg class="star-path user-rating" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="full" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>`;
        } else {
            star.innerHTML = `<svg class="star-path user-rating" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="empty" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>`;
        }
    });
}

// Initialize star rating for the review form


// Display initial reviews statistics
displayReviewsStatistics();

// Function to scroll to the reviews section and toggle the accordion button
function scrollToReviews() { 
    const reviewsSection = document.getElementById('reviews-scroll-to');
    reviewsSection.scrollIntoView({ behavior: 'smooth'}, true);

    // Toggle the class to change the content of the accordion button
    const accordionButton = document.getElementById('accordion-btn-expand');
    const accordionBody = document.querySelector('#accordion-content-3');

    // Check if the accordion is currently collapsed
    const isCollapsed = accordionButton.classList.contains('collapsed');

    // Toggle the collapsed class
    accordionButton.classList.toggle('collapsed', !isCollapsed);

    // Toggle the "show" class to display/hide the accordion content
    accordionBody.classList.toggle('show', isCollapsed);
}



// Function to generate HTML for star ratings
function generateStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars > 0;

    let starsHTML = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            // Full star
            starsHTML += `<svg class="star-path full" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>`;
        } else if (i === fullStars + 1 && halfStar) {
            // Half star
            starsHTML += `<svg class="star-path full" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12.2584 16.8419L12 16.686L11.7416 16.8419L6.57613 19.9596L7.94693 14.0836L8.01549 13.7897L7.78739 13.5921L3.22308 9.63803L9.23227 9.12821L9.5327 9.10272L9.65036 8.82511L12 3.2813L14.3496 8.82511L14.4673 9.10272L14.7677 9.12821L20.7769 9.63803L16.2126 13.5921L15.9845 13.7897L16.0531 14.0836L17.4239 19.9596L12.2584 16.8419Z"/>
                <path class="full" d="M12 17.27V2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>`;
        } else {
            // Empty star
            starsHTML += `<svg class="star-path empty" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>`;
        }
    }

    return starsHTML;
}

// Display initial reviews statistics and render existing reviews
displayReviewsStatistics();
renderAllReviews();

//Update the createRatingStars function to use the correct class for the stars -->
function createRatingStars() {
    const ratingStars = document.getElementById("review-stars");
    ratingStars.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        ratingStars.innerHTML += `<div class="star" data-rating="${i}" onclick="handleStarClick(event)">
        <svg class="star-path" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="empty" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
    </div>`;

        console.log("stars generated");
    }
}

let isReviewAdded = false; 

const addReview = () =>{
    if (!isReviewAdded) {
        let accordionList = document.getElementById("accordion-list");
        addReviewItem =document.createElement("div");
        addReviewItem.className = "accordion-item";
        addReviewItem.setAttribute("id", "add-review-scroll-to"); 
        addReviewItem.innerHTML = `
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-content-4">
            Add a review
            </button>
        </h2>
        <div id="accordion-content-4" class="accordion-collapse collapsed d-center section-p" data-bs-parent="#accordion-list">
            <div class="accordion-body">
                <form id="review-form">
                    <label class="form-label" for="username">Name</label>
                    <input class="form-input" type="text" id="username-review" required>

                    <label class="form-label" for="rating">Rating</label>
                    <div class="r-start" id="review-stars" onclick="handleStarClick(event)"></div>
                    <input type="hidden" id="rating" name="rating">

                    <label class="form-label" for="comment">Review</label>
                    <textarea class="form-input" id="comment-review" required></textarea>

                    <button class="btn-submit mt-4" type="button" onclick="submitReview()">Submit Review</button>
                </form>
            </div>
        </div>
    `
        accordionList.appendChild(addReviewItem);
        createRatingStars();
        console.log("creating starts called");
        isReviewAdded = true;
        const reviewsSection = document.getElementById('add-review-scroll-to');
        reviewsSection.scrollIntoView({ behavior: 'smooth'}, true);

    }
}

// Define a function to remove the review item
const removeReview = () => {
    accordionList.removeChild(addReviewItem);
    isReviewAdded = false; // Reset the flag when the item is removed
};

// Function to submit a new review
function submitReview() {
    const usernameEntered = document.getElementById("username-review").value;
    const rating = document.getElementById("rating").value;
    const comment = document.getElementById("comment-review").value;

    console.log("Username:", usernameEntered);
    console.log("Rating:", rating);
    console.log("Comment:", comment);

    // Validate input
    if (!usernameEntered || !rating || !comment) {
        alert("Please fill in all fields.");
        return;
    }

    // Convert rating to an integer
    const ratingInt = parseInt(rating);

    // Add the new review to the array
    const newReview = { usernameEntered, rating: ratingInt, comment };
    reviewsData.push(newReview);

    // Display updated reviews statistics
    displayReviewsStatistics();

    // Render all reviews in the #reviews-display-all section
    renderAllReviews();

    // Clear the form
    document.getElementById('username-review').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('comment-review').value = '';

    // Remove Add Review from HTML
    removeReview();
}


// Function to render all reviews in the #reviews-display-all section
function renderAllReviews() {
    const reviewsDisplayAll = document.getElementById('reviews-display-all');
    reviewsDisplayAll.innerHTML = '';

    reviewsData.forEach(review => {
        const starsHTML = generateStarsHTML(review.rating);
        const reviewHTML = `<div class="review d-start mt-5">
                <p class="review-name">${review.usernameEntered}</p>
                <div>${starsHTML}</div>
                <p class="filter-value-label pt-3">${review.comment}</p>
            </div>`;
        
        reviewsDisplayAll.innerHTML += reviewHTML;
    });
}


