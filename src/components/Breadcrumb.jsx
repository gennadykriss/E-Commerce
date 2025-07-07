export default function Breadcrumb({ stage }) {
  const steps = ['Bag', 'Checkout', 'Order Confirmed'];

  const getStepClass = (index) => {
    const currentIndex = {
      cart: 0,
      form: 1,
      done: 2
    }[stage];

    return index === currentIndex
      ? 'font-semibold text-black'
      : index < currentIndex
      ? 'text-gray-500'
      : 'text-gray-400';
  };

  return (
    <div className="text-center text-sm uppercase tracking-wide mb-8">
      <div className="flex justify-center items-center space-x-2 text-gray-400">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center space-x-2">
            <span className={getStepClass(index)}>{step}</span>
            {index < steps.length - 1 && <span className="text-gray-400">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
