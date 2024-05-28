const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-b from-purple-500 to-indigo-600 text-white">
  <div className="order-2 py-8 md:py-0 md:order-1 w-full md:w-1/2 text-center">
    <h1 className="text-5xl font-bold mb-5">
      <span>Phone</span>
      <span>Hub</span>
    </h1>
    <p className="text-xl">Where Your Dream Phone Awaits!</p>
    <p className="text-xl">Elevate Your Everyday.</p>
  </div>
  <div className="order-1 md:order-2 w-full md:w-1/2">
    <img className="w-full" src="https://media.istockphoto.com/id/1338846217/photo/beautiful-young-woman-using-smartphone-walking-through-night-city-street-full-of-neon-light.webp?b=1&s=170667a&w=0&k=20&c=619v_mj55HVawFi9LrJGL95vb362Kqbxd6uDR1217rE=" alt="" />
  </div>
</div>

  );
};

export default Banner;
