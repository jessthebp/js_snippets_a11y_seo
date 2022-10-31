/* horseman-config enable-explore */
var star_ratings = []
var review_date = []
var count_of_ratings = []
var reviewerid = []
var reviewid = []
let productlist = []
var reviews = document.querySelectorAll('[id^="customer_review-"]')
let product = document.title

for (var i = 0; i < reviews.length; i++)
{
    let count = i
    // get reviewer from the second half of the selector
    var reviewer = reviews[i].dataset.celWidget
var star_rating = reviews[i].querySelector('[data-hook="review-star-rating"]').innerText
var review = reviews[i].querySelector('[data-hook="review-date"]').innerText
var indivreviewid = reviews[i].dataset.csaCId
count_of_ratings.push(count)
    reviewerid.push(reviewer)
    reviewid.push(indivreviewid)
    console.log(indivreviewid)
star_ratings.push(star_rating)
review_date.push(review)
productlist.push(product)

}
const zip = (a, b, c, d, e) => a.map((k, i) => [k, b[i], c[i], d[i], e[i]]);
const extended = zip(star_ratings, review_date, reviewerid, productlist, reviewid)
extended.unshift(['rating', 'date', 'reviewerid', 'product', 'review_id'])

return {
    cell: reviews.length,
    explore: extended
}

// gets star ratings and dates for series of products-- uses data-hooks, specifically for amazon
