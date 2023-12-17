import {Router, Response, Request} from "express";
import {Task} from "../model/Task";
import {getTasks} from "../repositories/task-repository";


const router = Router();
// define the home page route
router.get('/', async (req, res: Response<Task[]>) => {
    console.log('here');
    res.send(await getTasks());
})

router.post('/', (req, res: Response<Task[]>) => {
    console.log(req.body);
})

export default router