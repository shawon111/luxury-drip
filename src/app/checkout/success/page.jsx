export default function SuccessPage() {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p>Your payment was successful.</p>
      <p>You will receive a confirmation email shortly.</p>
      <a href="/" className="mt-6 inline-block text-blue-600 underline">
        Back to Home
      </a>
    </div>
  );
}