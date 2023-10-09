export class UserHasOpenRentsError extends Error {
    public readonly name = 'UserHasOpenRentsError'

    constructor() {
        super('User has open rents. Can not be deleted.')
    }
}