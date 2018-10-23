export class PersonalInfo {

    private _handle: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;

    get handle(): string {
        return this._handle;
    }

    set handle(value: string) {
        this._handle = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}