import todo from '../Model/Todo.js';
import Todo from '../Model/Todo.js'

export const addTodo = async (request, response) => {
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAllTodo = async (request, response) => {

    try {
        const res = await Todo.find({}).sort({ 'createdAt': -1 })
        return response.status(200).json(res);

    }
    catch (error) {
        return response.status(500).json(error.message);

    }

}

export const toggleTodo = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }

        )

        await todo.save()
        return response.status(200).json(todo);
    }

    catch (error) {
        return response.status(500).json(error.message)
    }
}

export const updateTodo = async (request, response) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const todo = await Todo.findById(request.params.id);

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const del = await Todo.findByIdAndDelete(request.params.id)

        return response.status(200).json(del);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}