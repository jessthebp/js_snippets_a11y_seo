/*horseman-config enable-explore*/
var star_ratings = []
var review_date = []
var count_of_ratings = []
var full_reviews = []
var reviews = document.querySelectorAll('[data-hook="review"]')
// data-hook="review-star-rating"
// data-hook="review-date"
for (var i = 0; i < reviews.length; i++)
{
    let count = i
var star_rating = reviews[i].querySelector('[data-hook="review-star-rating"]').innerText
var review = reviews[i].querySelector('[data-hook="review-date"]').innerText
count_of_ratings.push(count)
star_ratings.push(star_rating)
review_date.push(review)
    
}
const zip = (a, b) => a.map((k, i) => [k, b[i]]);
const extended = zip(star_ratings, review_date)
extended.unshift(['rating', 'date'])

return {
    cell: reviews.length,
    extended: extended
}

// gets star ratings and dates for series of products-- uses data-hooks, specifically for amazon
