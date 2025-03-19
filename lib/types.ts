// This file contains type definitions for the data.
// It describes the shape of the data, and what data type each property should accept.
import { navLinks } from "./data"

// SECTION TYPES
export type SectionName = typeof navLinks[number]["name"];

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