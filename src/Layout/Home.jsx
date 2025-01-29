import Menue from "../Components/Manue/Menue";
import Slider from "../Components/Slider/Slider";
import Slider2 from "../Components/Slider/Slider2";
import boss from "../assets/home/chef-service.jpg";
import salad from "../assets/menu/salad-bg.jpg"
import backgroundImage from "../assets/home/featured.jpg"
const Home = () => {
  const items = [
    { image: salad },
    { image: salad },
    { image: salad },
  ];

  return (
    <div>
      {/* Slider Box */}
      <div className="mt-[-6px]">
        <Slider />
      </div>

      {/* Online Order Section */}
      <div className="flex flex-col items-center">
        <span className="text-yellow-300 font-bold text-3xl">
          --𝔣𝔯𝔬𝔪 11.00𝔭𝔪 𝔱𝔬 12.00𝔞𝔪--
        </span>
        <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3" />
        <span>𝗢𝗨𝗥 𝗢𝗡𝗟𝗜𝗡𝗘 𝗢𝗥𝗗𝗘𝗥</span>
        <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3" />

        <div className="h-[400px] ">
          <Slider2 />
        </div>


        <div className="mt-3">
          <img src={boss} alt="" />
        </div>
        <div className="w-[600px] h-[200px] bg-opacity-20 bg-yellow-50 rounded-md mt-[-250px] p-4">
          <h1 className="text-center text-3xl font-semibold text-black-100">𝔽𝕆𝕆𝔻𝕀𝔼𝕊</h1>
          <p className="text-center text-sm mt-4 text-sky-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum
            deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto
            ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="mt-14  flex flex-col items-center">
        <Menue />
      </div>

      {/* Contact Section */}
      <div className="bg-[#534f51] h-[140px] flex justify-center items-center">
        <span className="text-4xl text-white">Call Us :+𝟠𝟠𝟘𝟙𝟜𝟘𝟘𝟚𝟚𝟚𝟙𝟟𝟘</span>
      </div>

      {/* Chef Recommends */}
      <div className="flex justify-center flex-col items-center mt-8">
        <span className="text-yellow-300 font-bold text-xl"> --𝚂𝚑𝚘𝚞𝚕𝚍 𝚃𝚛𝚢--</span>
        <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3" />
        <span className="font-bold text-3xl">C͏H͏E͏F͏ R͏E͏C͏O͏M͏M͏A͏N͏D͏S͏</span>
        <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3" />

        {/* Chef Recommends Food Cards */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {items.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src={item.image}
                alt="Salad"
                className="w-[120px] h-[120px] object-cover rounded-[0px_200px_200px_200px]"
              />
              <h3 className="text-xl font-semibold mt-4">Salad</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Fresh and healthy salad with a mix of greens, veggies, and dressing.
              </p>
              <button className="mt-4 px-6 py-2 bg-[##E8E8E8] text-[##BB8506] hover:text-[#BB8506] rounded-lg hover:bg-[#1F2937] border-b-2 border-[#BB8506]">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {/* FROM OUR MEnue */}
        <div
          className="h-[400px] w-full bg-cover bg-center flex items-center flex-col relative mt-5"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Blackish Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-white">
            <span className="text-yellow-300 font-bold text-xl"> --Check it Out--</span>
            <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3" />
            <span className="font-bold text-3xl text-[#BB8506]">FROM OUR MENU</span>
            <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3" />
          </div>
          {/* Content 2 */}
          <div className="w-[400px] ml-60 absolute mt-32">
            <p className="text-white text-justify"> <strong>March 20, 2023
              WHERE CAN I GET SOME?</strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores
              maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="p-4 border-white border-b-2 rounded-md text-yellow-400 hover:bg-white">Read More</button>
          </div>
          <img className="w-[300px] absolute mt-32 mr-[550px]" src={backgroundImage} alt="" />
        </div>


      </div>
    </div>
  );
};

export default Home;
