import { CartItem } from '../models/cartModel'

export interface IBreadcrumb {
    className: string,
    hideOrShowProducts: string,
    currentPage: string
}

export interface IBreadcrumbLink {
    hideOrShow: string,
    pageBefore: string
}

export interface IExternalLinkIcon {
    link: string,
    icon: string
}

export interface ILgCard {
    id: string,
    heading: string
}

export interface IMenuIcon {
    icon: string,
    quantity?: number
}

export interface IMainMenu {
    className: string,
    quantity?: number,
}

export interface ShoppingCartProp {
    item: CartItem
}

export interface IFeaturedProducts {
    className: string,
    title: string,
    items: CartItem[]
  }