const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: allWorkouts});
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout");
}

const createNewWorkout = (req, res) => {
    const { body } = req;
    console.log(body);
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        excercises: body.excercises,
        trainerTips: body.trainerTips,
    };
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createdWorkout});
};

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
}

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};