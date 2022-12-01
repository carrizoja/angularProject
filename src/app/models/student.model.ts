export class Student {
    id: number;
    firstName: string;
    lastName: string;
    createdAt: Date;
    isTop10: boolean;

    constructor(id:number,firstName: string, lastName: string, createdAt: Date, isTop10: boolean) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = createdAt;
        this.isTop10 = isTop10;
    }

    alternateTop10() {
        this.isTop10 = !this.isTop10;

    }

}


