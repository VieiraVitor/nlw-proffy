import { Request, Response } from 'express';
import db from '../database/connection';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController {

    async create(request: Request, response: Response){
        // pega cada campo do request.body(objeto enviado via JSON) e aplica destructuring
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        const trx = await db.transaction();

        try {
            const insertedUserIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });

            const user_id = insertedUserIds[0];

            await trx.commit();

            return response.status(201).send();
        } catch (err){
            await trx.rollback();

            return response.status(400).json({
                error: "Unexpected error while creating new class"
            })
        }

    }
}