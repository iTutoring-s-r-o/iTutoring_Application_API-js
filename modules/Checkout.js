/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */


import APIController from "../apiController";

class Checkout
{
    static #MODULE = "Checkout";

    static #GET_AVAILABLE_STATES = "GetAvailableStates";
    static #PLACE_ORDER = "PlaceOrder";
    static #INITIATE_PURCHASE = "InitiatePurchase";
    static #GET_TRANSACTION_STATUS = "GetTransactionStatus";
    static #UPDATE_PAYMENT_STATUS_EXTERNAL = "UpdatePaymentStatusExternal";

    static async getAvailableStates()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_STATES);
        return res;
    }

    static async placeOrder(billingInfo, customerId = null)
    {
        var res = await APIController.Post(this.#MODULE, this.#PLACE_ORDER, {
            "billingInfo": JSON.stringify(billingInfo),
            "customerId": customerId
        });
        return res;
    }

    static async initiatePurchase(orderId)
    {
        var res = await APIController.Post(this.#MODULE, this.#INITIATE_PURCHASE, {
            "orderId": orderId
        });
        return res;
    }

    static async getTransactionStatus(comgateId)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_TRANSACTION_STATUS, {
            "comgateId": comgateId
        });
        return res;
    }

    static async updatePaymentStatusExternal(status, paymentId)
    {
        await APIController.Post(this.#MODULE, this.#UPDATE_PAYMENT_STATUS_EXTERNAL, {
            "status": status,
            "paymentId": paymentId
        });
    }
}

export default Checkout;