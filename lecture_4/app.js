const todo = require('./todo');

async function main(){
    try {
        const taskInfo1 = {
            title: "Ponder Dinosaurs",
            description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
        };
        console.log("Creating the first task");
        const task1 = await todo.createTask(taskInfo1.title, taskInfo1.description);
        console.log(task1);

        const taskInfo2 = {
            title: "Play Pokemon with Twitch TV",
            description: "Should we revive Helix?"
        }
        console.log("Creating the second task");
        const task2 = await todo.createTask(taskInfo2.title, taskInfo2.description);

        console.log("Quering all tasks");
        const allTasks = await todo.getAllTasks()
        console.log(allTasks);
        
        console.log("Deleting the first task");
        await todo.removeTask(allTasks[0]._id);

        console.log("Quering remaining tasks");
        const remainingTasks = await todo.getAllTasks();
        console.log(remainingTasks)

        console.log("Completing remaining tasks");
        for(let i = 0; i < remainingTasks.length; i++){
            let completedTask = await todo.completeTask(remainingTasks[i]._id);
            console.log(completedTask);
        }
    }catch(err){
        console.log(err);
    }
}
main();