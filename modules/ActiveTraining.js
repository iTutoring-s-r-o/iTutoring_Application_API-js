/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import APIController from "../apiController";

class ActiveTraining
{
    static #MODULE = "ActiveTraining";

    static #GET_CURRENT_STEP = "GetCurrentStep";
    static COMPLETE_CURRENT_STEP = "CompleteCurrentStep";
    static REPORT_VIDEO_TIMESTAMP = "ReportVideoTimestamp";
    static GET_FINAL_TEST = "GetFinalTest";
    static SET_TEST_ANSWER = "SetTestAnswer";
    static #COMPLETE = "Complete";
    static #END_TRAINING = "EndTraining";
    static #ACK = "Ack";
    static #GET_PROGRESS = "GetProgress";


    static async getProgress()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_PROGRESS);
        return res;
    }

    static async getCurrentStep()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_CURRENT_STEP);
        return res;
    }

    static async completeCurrentStep()
    {
        var res = await APIController.Post(this.#MODULE, this.COMPLETE_CURRENT_STEP);
        return res;
    }

    static async reportVideoTimestamp(timestamp)
    {
        var res = await APIController.Post(this.#MODULE, this.REPORT_VIDEO_TIMESTAMP, {
            'timestamp': timestamp
        });
        return res;
    }

    static async getFinalTest()
    {
        var res = await APIController.Get(this.#MODULE, this.GET_FINAL_TEST);
        return res;
    }

    static async setTestAnswer(questionId, optionId)
    {
        var res = await APIController.Post(this.#MODULE, this.SET_TEST_ANSWER, {
            'questionId': questionId,
            'optionId': optionId
        });
        return res;
    }

    static async complete()
    {
        var res = await APIController.Post(this.#MODULE, this.#COMPLETE);
        return res;
    }

    static async endTraining()
    {
        var res = await APIController.Post(this.#MODULE, this.#END_TRAINING);
        return res;
    }   

    static async ack()
    {
        var res = await APIController.Post(this.#MODULE, this.#ACK);
        return res; 
    }
}

export default ActiveTraining;