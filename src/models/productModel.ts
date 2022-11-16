// With the "name" item
export interface IItemProp {
    articleNumber: string,
    name: string,
    description?: string,
    category: string,
    price: number,
    rating: number,
    imageName: string
}

export interface IItem extends IItemProp{
    item: IItemProp
}

// With the "name" product
export interface IProductProp {
    articleNumber: string,
    name: string,
    description?: string,
    category: string,
    price: number,
    rating: number,
    imageName: string
}

export interface IProduct extends IProductProp{
    product: IProductProp
    // item: IProductProp
}