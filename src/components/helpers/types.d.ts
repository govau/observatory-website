export interface PageContext {
  pageContext: any;
  location: any;
}

export interface MenuItems {
  map(
    arg0: (menuItem: any) => { text: any; link: any; active: boolean }
  ): MenuItems;
  items: Array<MenuItem>;
}

interface MenuItem {
  link: string;
  text: string;
}

interface DtaBlogType {
  link: string;
  text: string;
}

interface SelectOptionType {
  value?: string;
  text: string;
}

import { StringSchema, StringSchemaConstructor } from "yup";

declare module "yup" {
  interface StringSchema {
    format(format: string): StringSchema;
  }
}

export const date: StringSchemaConstructor;
