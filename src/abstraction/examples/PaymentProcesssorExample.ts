// Mostly we are using abstract classes and interfaces
// Basically we are doing is hide the complex / unnessacary implementation for the user

interface PaymentProcessor {
  processPayment(amount: number): void;
}

class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} via PayPal`);
  }
}

class StripeProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} via Stripe`);
  }
}

function checkout(processor: PaymentProcessor, amount: number) {
  processor.processPayment(amount);
}

checkout(new PayPalProcessor(), 500);
checkout(new StripeProcessor(), 750);