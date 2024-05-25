import APIController from "../apiController";

class Inventory
{
    static #MODULE = "Inventory";

    static #GET_AVAILABLE_ITEMS = "GetAvailableItems";

    static async getAvailableItems(category = "ANY", max = -1, offset = 0)
    {
        var items = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_ITEMS, {
            'category': category,
            'max': max,
            'offset': offset,
        });

        return items;
    }
}

export default Inventory;