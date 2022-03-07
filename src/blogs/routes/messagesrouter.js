import express from "express";
import {createMessage, getMessage, getMessages, updateMessage, deleteMessage} from '../controllers/messagescontrollers.js';


const router = express.Router();


router.post('/messages', createMessage)
router.get('/messages',getMessages)
router.get('/messages/:id', getMessage)
router.post('/messages/:id', updateMessage)
router.delete('/messages/:id', deleteMessage)

export default router;
