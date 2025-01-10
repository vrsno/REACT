export const tasksDone = (id, tasks) =>{
    const newTasks = tasks.map(item =>{
        const idTasks = item.id
        let task = Object.assign({}, item)
        if (id === idTasks){
            task.done = !item.done
        }
        return task
    })
    return newTasks
}