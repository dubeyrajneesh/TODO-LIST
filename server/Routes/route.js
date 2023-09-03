import express , {Router} from 'express'
const router = express.Router() ;

import { addTodo } from './Routes-Controller.js';
import { getAllTodo } from './Routes-Controller.js';
import { toggleTodo } from './Routes-Controller.js';
import { updateTodo } from './Routes-Controller.js';
import { deleteTodo } from './Routes-Controller.js';



router.post('/todos' , addTodo) ;
router.get('/todos' , getAllTodo)
router.get('/todos/:id' , toggleTodo)
router.put('/todos/:id' , updateTodo)
router.delete('/todos/:id' , deleteTodo)

export default router 