export enum Address {
  null = '',
  Choose = 'ადგილმდებარეობა',
  Main = 'მთავარი ოფისი',
  Gallery = 'კავეა გალერია',
  Mall = 'კავეა თბილისი მოლი',
  EastPoint = 'კავეა ისთ ფოინთი',
  CityMall = 'კავეა სითი მოლი',
}
export interface inventory {
  address: string;
  name: string;
  price: number;
}
export interface inventoryResult {
  id: number;
  address: string;
  name: string;
  price: number;
}
