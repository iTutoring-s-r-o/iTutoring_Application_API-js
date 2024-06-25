/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";


/**
 * @deprecated Use general Reviews class instead.
 */
class GoogleReviews
{
    static #MODULE = "Reviews";

    static #GET_RANDOM_REVIEW = "GetRandomReview";

    /**
     * @deprecated Use general Reviews class instead.
     * @param {*} last_review_timestamp 
     * @returns 
     */
    static async GetRandomReview(last_review_timestamp = -1)
    {
        var review = await APIController.Get(this.#MODULE, this.#GET_RANDOM_REVIEW, {
            "last_review": last_review_timestamp,
        }, true);

        return JSON.parse(review);
    }
}

export default GoogleReviews;