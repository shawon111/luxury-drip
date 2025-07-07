export default function CancelPage() {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
      <p>Your payment was not completed.</p>
      <a href="/cart" className="mt-6 inline-block text-blue-600 underline">
        Return to Cart
      </a>
    </div>
  );
}
