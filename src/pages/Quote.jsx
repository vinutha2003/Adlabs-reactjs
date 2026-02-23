export default function Quote() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8">
      
      <h1 className="text-4xl font-bold">Request a Quote</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-3">Printing </h2>
          <button className="btn bg-orange-500">Request</button>
        </div>

        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-3"> Events </h2>
          <button className="btn bg-pink-500">Request</button>
        </div>

        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-3">Digital Marketing </h2>
          <button className="btn bg-purple-500">Request</button>
        </div>

      </div>
    </section>
  );
}