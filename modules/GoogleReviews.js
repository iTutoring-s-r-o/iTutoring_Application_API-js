import APIController from "../apiController";

class GoogleReviews
{
    static #MODULE = "GoogleReviews";

    static #GET_RANDOM_REVIEW = "GetRandomReview";

    static async GetRandomReview(last_review_timestamp = -1)
    {
        var review = await APIController.Get(this.#MODULE, this.#GET_RANDOM_REVIEW, {
            "last_review": last_review_timestamp,
        });

        return JSON.parse(review);
    }
}

export default GoogleReviews;