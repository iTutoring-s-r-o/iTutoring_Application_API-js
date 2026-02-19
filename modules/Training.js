/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */


import APIController from "../apiController";

class Training
{
    static #MODULE = "Training";

    static #ASSIGN_TRAINING = "AssignTraining";
    static #UNASSIGN_TRAINING = "UnassignTraining";
    static #GET_ASSIGNED_TRAININGS = "GetAssignedTrainings";
    static #GET_TRAINING_DETAILS = "GetTrainingDetails";
    static #START_TRAINING = "StartTraining";
    static #GET_ACTIVE_TRAINING = "GetActiveTraining";
    static #GET_TRAINING_RESULT = "GetTrainingResult";
    static #IS_TRAINING_ASSIGNED_TO_LECTOR = "IsTrainingAssignedToLector";
    static #GET_ALL_AVAILABLE_TRAININGS = "GetAllAvailableTrainings";
    static #HAS_LECTOR_ALL_TRAININGS_COMPLETED = "HasLectorAllTrainingsCompleted";

    static async hasLectorAllTrainingsCompleted()
    {
        var res = await APIController.Get(this.#MODULE, this.#HAS_LECTOR_ALL_TRAININGS_COMPLETED);
        return res;
    }

    static async getAllAvailableTrainings()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_ALL_AVAILABLE_TRAININGS);
        return res;
    }

    static async isTrainingAssignedToLector(trainingId)
    {
        var res = await APIController.Get(this.#MODULE, this.#IS_TRAINING_ASSIGNED_TO_LECTOR, {
            'trainingId': trainingId
        });
        return res;
    }

    static async assignTraining(trainingId, lectorId)
    {
        var res = await APIController.Post(this.#MODULE, this.#ASSIGN_TRAINING, {
            'trainingId': trainingId,
            'lectorId': lectorId
        });
        return res;
    }

    static async unassignTraining(trainingId, lectorId)
    {
        var res = await APIController.Post(this.#MODULE, this.#UNASSIGN_TRAINING, {
            'trainingId': trainingId,
            'lectorId': lectorId
        });
        return res;
    }

    static async getAssignedTrainings(completedOnly)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_ASSIGNED_TRAININGS, {
            'completedOnly': completedOnly
        });
        return res;
    }

    static async getTrainingDetails(trainingId)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_TRAINING_DETAILS, {
            'trainingId': trainingId
        });
        return JSON.parse(res);
    }

    static async startTraining(trainingId)
    {
        var res = await APIController.Post(this.#MODULE, this.#START_TRAINING, {
            'trainingId': trainingId
        });
        return res;
    }

    static async getActiveTraining()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_ACTIVE_TRAINING);
        return JSON.parse(res);
    }

    static async getTrainingResult(trainingId)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_TRAINING_RESULT, {
            'trainingId': trainingId
        });
        return res;
    }
}

export default Training;