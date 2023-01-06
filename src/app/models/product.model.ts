export class Product {

    id: string;

    category: string;

    description: string;

    image: string;

    price: string;

    rating: Rating;

    title: string;

    quantity: number

    constructor(obj?: any) {

        this.id = (obj && obj.id) || "";
        this.quantity = 1
        this.category = (obj && obj.category) || "";

        this.description = (obj && obj.description) || "";

        this.image = (obj && obj.image) || "";

        this.price = (obj && obj.price) || "";

        this.rating = (obj && obj.rating) || [];

        this.title = (obj && obj.title) || "";

    }
}

interface Rating {
    count: number,
    rate: number
}