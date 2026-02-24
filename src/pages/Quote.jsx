import { Link } from "react-router-dom";


export default function Quote() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8">
      
      <h1 className="text-4xl font-bold">Request a Quote...</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-3">🖨️📄PREMIUM PRINTZ & DESIGN🎨 </h2>
          <Link
    to="/getstarted"
    className="btn bg-blue-500 inline-block px-6 py-2 rounded-full hover:scale-105 transition"
  >
    Request
  </Link>
</div>
          

        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-3"> 🎉🎤Eventz🎊📅</h2>

          <Link
    to="/getstarted"
    className="btn bg-pink-500 inline-block px-6 py-2 rounded-full hover:scale-105 transition"
  >
    Request
  </Link>
</div>
          

        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-xl font-semibold mb-3"> 📱📢Digital Marketing📈🚀 </h2>

          <Link
    to="/getstarted"
    className="btn bg-purple-500 inline-block px-6 py-2 rounded-full hover:scale-105 transition"
  >
    Request
  </Link>
</div>
          

      </div>
    </section>
  );
}