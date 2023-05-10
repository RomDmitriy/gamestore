export default class ProductDto {
  //TODO: добавить пример для API
  id: string;
  title: string;
  description: string;
  release_date: Date;
  type: string;
  supplier: {
    title: string;
  };
  sales_stopped: boolean;
  price: number;

  //TODO: добавить требования
}
