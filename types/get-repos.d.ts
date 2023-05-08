import { Repository } from "./repositories"

export type ErrorMessage = {
    status: number,
    remaining: string,
    message: string
}

interface IResponse {
    response: Promise<Array<Repository> | ErrorMessage>
}