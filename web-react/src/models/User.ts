export default class User {
    _id: string = ""
    first_name: string = ""
    last_name: string = ""
    email: string = ""
    application?: string = ""
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
}