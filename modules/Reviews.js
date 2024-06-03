import APIController from "../apiController";

class Reviews
{
    static #MODULE = "Reviews";

    static #GET_RANDOM_REVIEW = "GetRandomReview";
    static #GET_REVIEWS = "GetReviews";
    static #GET_RATING = "GetRating";

    /**
     * desc: Get random review
     * @returns 
     */
    static async GetRandomReview()
    {
        const review = await APIController.Get(this.#MODULE, this.#GET_RANDOM_REVIEW, {});

        return review;
    }

    /**
     * desc: Get reviews
     * @returns 
     */
    static async GetReviews()
    {
        const reviews = await APIController.Get(this.#MODULE, this.#GET_REVIEWS, {}, true);

        return reviews;
    }

    /**
     * desc: Get rating
     * @returns 
     */
    static async GetRating()
    {
        const rating = await APIController.Get(this.#MODULE, this.#GET_RATING, {}, true);

        return rating;
    }
}

export default Reviews;