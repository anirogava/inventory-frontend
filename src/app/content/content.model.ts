export enum Address {
  null = '',
  Choose = 'ადგილმდებარეობა',
  Main = 'მთავარი ოფისი',
  Gallery = 'კავეა გალერია',
  Mall = 'კავეა თბილისი მოლი',
  EastPoint = 'კავეა ისთ ფოინთი',
  CityMall = 'კავეა სითი მოლი',
}

export interface Inventory {
  id: number;
  address: string;
  name: string;
  price: number;
  userId: string;
}

export interface InventoryResult {
  count: number;
  items: Inventory[];
}
