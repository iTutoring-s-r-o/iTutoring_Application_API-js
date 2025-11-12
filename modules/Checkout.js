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
    static #GET_BILLING_INFO = "GetBillingInfo";
    static #CONVERT_ORDER_VARIABLE_SYMBOL_TO_ID = "ConvertOrderVariableSymbolToId";
    static #CONVERT_TRANSACTION_ID_TO_ORDER_ID = "ConvertTransactionIdToOrderId";

    static async convertTransactionIdToOrderId(transactionId)
    {
        var res = await APIController.Get(this.#MODULE, this.#CONVERT_TRANSACTION_ID_TO_ORDER_ID, {
            "transactionId": transactionId
        });
        return res;
    }

    static async convertOrderVariableSymbolToId(variableSymbol)
    {
        var res = await APIController.Get(this.#MODULE, this.#CONVERT_ORDER_VARIABLE_SYMBOL_TO_ID, {
            "variableSymbol": variableSymbol
        });
        return res;
    }

    static async getBillingInfo()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_BILLING_INFO);
        return res;
    }

    static async getAvailableStates()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_STATES);
        return res;
    }

    static async placeOrder(billingInfo, customerId = null, note = "")
    {
        var res = await APIController.Post(this.#MODULE, this.#PLACE_ORDER, {
            "billingInfo": JSON.stringify(billingInfo),
            "customerId": customerId,
            "note": note
        });
        return res;
    }

    static async initiatePurchase(orderId, customCallbackUrl = null)
    {
        var res = await APIController.Post(this.#MODULE, this.#INITIATE_PURCHASE, {
            "orderId": orderId,
            "customCallbackUrl": customCallbackUrl
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