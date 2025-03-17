// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

// MENU TYPES

export type Menu = {
    categories: [Category],
}

export type Category = {
    categoryName: string,
    groups: [Group],
    isMixable: boolean,
}

export type Group = {
    groupName: string,
    items: [MenuItem],
    dozenPrice: number,
    color: string,
}

export type MenuItem = {
    itemName: string,
    description: string,
    ingredients: [string],
}