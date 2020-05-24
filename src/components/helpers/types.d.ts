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
