/*

  ## Liskov
    
*/

interface Item {
  isInStock: () => boolean;
  isPacked: () => boolean;
}

interface Order {
  isValid: () => boolean;

  getItems: () => Item[];
  getId(): () => string;
}

export class OrderStockValidator {
  isValid(order: Order): boolean {
    for (const item of order.getItems()) {
      if (!item.isInStock()) {
        return false;
      }
    }
    return true;
  }
}

export class OrderStockAndPackValidator extends OrderStockValidator {
  isValid(order: Order): boolean {
    for (const item of order.getItems()) {
      if (!item.isInStock() || item.isPacked()) {
        return false;
      }
    }

    return true;
  }
}
