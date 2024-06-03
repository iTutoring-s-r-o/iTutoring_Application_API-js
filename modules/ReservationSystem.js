import BillingInfo from "../objects/billingInfo";
import APIController from "./../apiController";

class ReservationSystem
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "ReservationSystem";

    static #SEND_REQUEST = "SendRequest";
    static #ADD_ITEM_TO_CART = "AddItemToCart";
    static #GET_CART_ITEMS = "GetCartItems";
    static #GET_TOTAL_PRICE = "GetTotalPrice";
    static #PLACE_ORDER = "PlaceOrder";
    static #SEND_ORDER_CONFIRMATION_EMAIL = "SendOrderConfirmationEmail";
    static #CLEAR_CART = "ClearCart";
    static #APPLY_SALE_COUPON = "ApplySaleCoupon";
    static #GET_APPLIED_SALE_COUPONS = "GetAppliedSaleCoupons";
    static #REMOVE_SALE_COUPON = "RemoveSaleCoupon";
    static #GET_SALE_AMOUNTS = "GetSaleAmounts";
    static #GET_CART_ITEMS_COUNT = "GetCartItemsCount";
    static #REMOVE_ITEM_FROM_CART = "RemoveItemFromCart";
    static #GET_AVAILABLE_STATES = "GetAvailableStates";
    static #ORDER_IS_PLACED = "OrderIsPlaced";

    static async orderIsPlaced()
    {
        var res = await APIController.Get(this.#MODULE, this.#ORDER_IS_PLACED);

        return res;
    }

    static async getAvailableStates()
    {
        var states = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_STATES);
        return states;
    }

    static async removeItemFromCart(itemSku)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_ITEM_FROM_CART, { 'sku': itemSku });
    }

    static async getCartItemsCount()
    {
        var count = await APIController.Get(this.#MODULE, this.#GET_CART_ITEMS_COUNT);
        return count;
    }


    static async addItemToCart(itemSku)
    {
        await APIController.Post(this.#MODULE, this.#ADD_ITEM_TO_CART, { 'itemSku': itemSku });
    }

    static async getCartItems()
    {
        var items = await APIController.Get(this.#MODULE, this.#GET_CART_ITEMS);

        return items;
    }

    static async getTotalPrice()
    {
        var price = await APIController.Get(this.#MODULE, this.#GET_TOTAL_PRICE);

        return price;
    }

    /**
     * 
     * @param {BillingInfo} billingInfo - BillingInfo model expected. You can use prepared js object or create just array.
     * @param {*} proforma 
     * @param {*} vopAgree 
     * @param {*} gdprAgree 
     * @returns order id
     */
    static async placeOrder(billingInfo, proforma = 1, vopAgree = 0, gdprAgree = 0)
    {
        var orderId = await APIController.Post(this.#MODULE, this.#PLACE_ORDER, {
            'billingInfo': JSON.stringify(billingInfo),
            'proforma': proforma,
            'vopAgree': vopAgree,
            'gdprAgree': gdprAgree
        });

        return orderId;
    }

    static async sendOrderConfirmationEmail()
    {
        await APIController.Get(this.#MODULE, this.#SEND_ORDER_CONFIRMATION_EMAIL);
    }

    static async clearCart()
    {
        await APIController.Post(this.#MODULE, this.#CLEAR_CART);
    }

    static async applySaleCoupon(code)
    {
        await APIController.Post(this.#MODULE, this.#APPLY_SALE_COUPON, { 'code': code });
    }

    static async getAppliedSaleCoupons()
    {
        var coupons = await APIController.Get(this.#MODULE, this.#GET_APPLIED_SALE_COUPONS);

        return coupons;
    }

    static async removeSaleCoupon(code)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_SALE_COUPON, { 'code': code });
    }

    /**
     * 
     * @returns {Promise<array>} - array - sale amounts as sku=>amount
     */
    static async getSaleAmounts()
    {
        var amounts = await APIController.Get(this.#MODULE, this.#GET_SALE_AMOUNTS);

        return amounts;
    }

    /**
     * Send request for tutoring. Will register as event
     * @param {*} name 
     * @param {*} email 
     * @param {*} tel 
     * @param {*} msg 
     * @param {*} place  must be PlaceID !
     */
    static async SendRequest(name, email, tel, msg, place)
    {
        await APIController.Post(this.#MODULE, this.#SEND_REQUEST, {
            "name": name,
            "email": email,
            "tel": tel,
            "msg": msg,
            "place": place
        })
    }
}

export default ReservationSystem;