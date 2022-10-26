import APIController from "./../apiController";

class Email
{
    /**
        * Respective module name for this class
        */
    static #MODULE = "Email";

    static #SEND = "Send";

    /**
     * Send email
     * 
     * @param {*} header email header
     * @param {*} message email main text (p)
     * @param {*} params email parameters as key: value \n (as array)
     * @param {*} fHeader heading in footer
     * @param {*} fMessage main text in footer
     * @param {*} fReason text below footer, saying like: You receiving this email because...
     * @param {*} buttonText button text in email
     * @param {*} buttonLink button url link in email
     * @param {*} title 'optional' int 0/1 to hide the buttons
     * @param {*} toEmail Email title
     * @param {*} toName Receipent name
     * @param {*} buttonHide bool to hide button (false is default)
     * @param {*} fromEmail 'optional' - sender email (itutoring is default)
     * @param {*} fromName 'optional' - sender name {itutoring is default)
     * @returns bool
     */
    static async Send(header, message, params, fHeader, fMessage, fReason, buttonText, buttonLink, title, toEmail, toName, buttonHide = false, fromEmail = 'default', fromName = 'default')
    {
        var postQuery = {
            'header': header,
            'message': message,
            'params': JSON.stringify(params),
            'fHeader': fHeader,
            'fMessage': fMessage,
            'fReason': fReason,
            'buttonText': buttonText,
            'buttonLink': buttonLink,
            'buttonHide': APIController.BoolToInt(buttonHide),
            'title': title,
            'toEmail': toEmail,
            'toName': toName,
        }
        if (fromEmail != 'default')
        {
            postQuery.fromEmail = fromEmail;
        }

        if (fromName != 'default')
        {
            postQuery.fromName = fromName;
        }

        await APIController.Post(this.#MODULE, this.#SEND, postQuery);

        return true;
    }
}

export default Email;