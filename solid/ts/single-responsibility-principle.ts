/*

  ## Single Responsibility Principle
    - Este principio afirma que uma classe deve ter apenas uma responsibilidade
    
*/

interface Order {
  isValid: () => boolean;
}

export class OrderProcessor {
  constructor(
    readonly saveOrder: SaveOrder,
    readonly sendEmailOrderConfirmation: SendEmailOrderConfirmation
  ) {}

  process(order: Order) {
    if (order.isValid()) {
      const savedOrder = this.saveOrder.save(order);

      try {
        if (savedOrder) {
          this.sendEmailOrderConfirmation.sendConfirmationEmail(order);
        }
      } catch (error) {
        console.error("Error processing order:", error);
        // Adicione lógica para notificar erro ou reverter ações, se necessário
      }
    }
  }
}

export class SaveOrder {
  save(order: Order): Order | null {
    // Implementação da lógica de salvar o pedido
    // Retorna o pedido salvo ou null em caso de falha

    const success = true; // Simulação de sucesso/falha da operação

    if (success) {
      // Retornar a ordem caso salva com sucesso
      return order;
    } else {
      // Retornar null caso houver falha
      return null;
    }
  }
}

export class SendEmailOrderConfirmation {
  sendConfirmationEmail(order: Order) {}
}
