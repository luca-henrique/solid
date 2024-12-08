/*

  ## Open/Close Principle
   
    
*/

import { OrderProcessor } from "./single-responsibility-principle";

interface Order {
  isValid: () => boolean;
}

export class OrderProcessorWithPreAndPostProcessor extends OrderProcessor {
  super() {}

  process(order: Order) {
    this.beforeProcessing();
    this.process(order);
    this.afterProcessing();
  }

  beforeProcessing() {}

  afterProcessing() {}
}
