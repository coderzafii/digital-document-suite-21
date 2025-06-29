
const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        How Our Free Online Tools Work
      </h2>

      <p className="mt-2 max-w-xl mx-auto text-gray-600">
        No learning curve. Just three simple steps to get your file work done instantly.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
        <div className="p-8 rounded-xl shadow-sm bg-neutral-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Upload Your File</h3>
          <p className="mt-2 text-sm text-gray-600">
            Drag & drop or browse your PDF, image, or document file — quick and secure.
          </p>
        </div>
        <div className="p-8 rounded-xl shadow-sm bg-neutral-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Choose Your Action</h3>
          <p className="mt-2 text-sm text-gray-600">
            Select the tool you need — merge, convert, compress, extract, or generate.
          </p>
        </div>
        <div className="p-8 rounded-xl shadow-sm bg-neutral-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Download Instantly</h3>
          <p className="mt-2 text-sm text-gray-600">
            Your file is processed in seconds. Download it instantly — no login, no wait.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
