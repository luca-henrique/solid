/*

  ## Inversion Dependency
    - Evitar que classes tenham que implementar metodos que não são necessarios
*/

interface Order {
  isValid: () => boolean;
}

// Errado
class PgConnection {
  constructor(readonly url: string) {}
}

class PgOrderRepository {
  save(order: Order): boolean {
    const connection = new PgConnection("database.url");

    return true;
  }
}

class ConfirmationEmailSender {
  sendConfirmationEmail(order: Order) {}
}

class OrderProcessor {
  process(order: Order) {
    const pgOrderRepository = new PgOrderRepository();
    const mailSender = new ConfirmationEmailSender();

    if (order.isValid() && pgOrderRepository.save(order)) {
      mailSender.sendConfirmationEmail(order);
    }
  }
}

interface MailSender {
  sendConfirmationEmail: (order: Order) => void;
}

interface OrderRepository {
  save: (order: Order) => boolean;
}

class ConfirmationEmailSend implements MailSender {
  sendConfirmationEmail = (order: Order) => {};
}

class OrderRepositoryPg implements OrderRepository {
  save = (order: Order) => {
    return true;
  };
}
