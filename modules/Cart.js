import APIController from "../apiController";

class Cart 
{
    static #MODULE = "Cart";

    static #ADD_ITEM = "AddItem";
    static #GET_ITEMS = "GetItems";
    static #GET_TOTAL_PRICE = "GetTotalPrice";
    static #CLEAR = "Clear";
    static #APPLY_SALE_COUPON = "ApplySaleCoupon";
    static #GET_APPLIED_SALE_COUPONS = "GetAppliedSaleCoupons";
    static #REMOVE_SALE_COUPON = "RemoveSaleCoupon";
    static #GET_SALE_AMMOUNTS = "GetSaleAmounts";
    static #GET_ITEMS_COUNT = "GetItemsCount";
    static #REMOVE_ITEM = "RemoveItem";

    static async addItem(itemInstanceId)
    {
        await APIController.Post(this.#MODULE, this.#ADD_ITEM, {
            "itemInstanceId": itemInstanceId
        });
    }

    static async getItems()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_ITEMS);
        return res;
    }

    static async getTotalPrice()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_TOTAL_PRICE);
        return res;
    }

    static async clear()
    {
        await APIController.Post(this.#MODULE, this.#CLEAR);
    }

    static async applySaleCoupon(code)
    {
        var res = await APIController.Post(this.#MODULE, this.#APPLY_SALE_COUPON, {
            "code": code
        });

        return res;
    }

    static async getAppliedSaleCoupons()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_APPLIED_SALE_COUPONS);
        return res;
    }

    static async removeSaleCoupon(code)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_SALE_COUPON, {
            "code": code
        });
    }

    static async getSaleAmounts()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_SALE_AMMOUNTS);
        return res;
    }

    static async getItemsCount()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_ITEMS_COUNT);
        return res;
    }

    static async removeItem(itemInstanceId)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_ITEM, {
            "itemInstanceId": itemInstanceId
        });
    }
}

export default Cart;