import APIController from "./api/apiController";

class Payments
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "Payments";

    // All method names
    static #PURCHASE = "Purchase";
    static #VALIDATE_PURCHASE = "ValidatePurchase";

    /**
     * Purchase specific product. After calling you'll be redirected depending on the result to success or cancel (failed) url
     * @param {*} product product name as defined in php such as HOUR_LESSON
     * @param {*} type payment type (credits, card), use PaymentType enum
     * @param {*} successUrl
     * @param {*} cancelUrl 
     * @param {*} successUrlParams  additional query string to success url - optional
     * @returns if stripe payment; returns stripe page url
     */
    static async Purchase(product, isSaled, type, successUrl, cancelUrl, successUrlParams = "")
    {
        var url = await APIController.Post(this.#MODULE, this.#PURCHASE, {
            'product': product,
            'saled': APIController.BoolToInt(isSaled),
            'type': type,
            'successUrl': successUrl,
            'cancelUrl': cancelUrl,
            'successUrlParams': successUrlParams,
        });

        return url;
    }

    /**
     * Call on success page after purchase to mark the payment as successful.
     *  
     * Will return false if is already marked.
     * @param {*} id 
     * @returns bool
     */
    static async ValidatePurchase(transactionId)
    {
        var res = await APIController.Get(this.#MODULE, this.#VALIDATE_PURCHASE, { 'id': transactionId });

        return APIController.IntToBool(res);
    }
}

export default Payments;