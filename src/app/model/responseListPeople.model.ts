import { Person } from "./person.model";

export interface ResponseListPeople{
    count: number,
    next: string,
    previous: string,
    results: Person[]
}