export class Store {
    id: number
    name: string;
    kontakt: string
    workingHours: string;

    location: any;
    images: string;
    constructor(obj?: any) {

        this.id = (obj && obj.id) || "";
        this.kontakt = (obj && obj.kontakt) || "";
        this.name = (obj && obj.name) || "";

        this.workingHours = (obj && obj.workingHours) || "";

        this.location = (obj && obj.location) || "";
        this.images = (obj && obj.images) || "";


    }
}