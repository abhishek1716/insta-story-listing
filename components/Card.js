import Image from "next/image";

const Card = () => {
  return (
    <div class="p-8 lg:w-64 flex flex-row">
      <div class="bg-white rounded-lg shadow-xl">
        <div class="p-16">
          <div>
            <Image src="/instagram-story.png" width={120} height={200} />
          </div>
          <div class="mt-8 text-center">
            <h1 class="font-bold text-lg text-gray-700 mb-1">
              Customer support 24/7
            </h1>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button class="mt-6 bg-blue-500 hover:bg-blue-400 text-white rounded-full px-12 py-3 shadow-xl focus:outline-none">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
