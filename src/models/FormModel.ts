import {TaskModel} from "./TaskModel";

export interface FormModel {
    /*
        Idea behind making this a seperate interface is so people check out
        the three possible methods

        Form has three methods: hidden, add, edit
        All methods respond to a certain state the form is in
     */
    method: string;

    /*
        Purpose of this task object is so the task that is being edited
        can be stored here, and retrieve previous values of the task

        The task can be null if the method is either hidden or add,
        because there is no need to store a task in that case
     */
    task: TaskModel | null;
}