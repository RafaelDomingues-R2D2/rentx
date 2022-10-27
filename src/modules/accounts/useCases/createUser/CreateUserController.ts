import {Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response){
        const {name, username, email, password, driver_license} = request.body

        const createUseCase = container.resolve(CreateUserUseCase)

        await CreateUserUseCase.execute({
            name,
            username,
            email,
            password,
            driver_license
        })
    }
}

export { CreateUserController }