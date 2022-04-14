import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="relative group">
            <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <Image
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                alt="Front of men&#039;s Basic Tee in black."
                width={300}
                height={350}
                className="object-cover object-center w-full h-full lg:w-full lg:h-full"
              />
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
