import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import {
  // useContext,
  useEffect,
  useState,
} from "react";
import { RadioGroup } from "@headlessui/react";
import { Rating } from "@mui/material";
import { Colors, Product } from "@/interfaces/index";
// import CartContext from '@/context/cart/CartContext';

// Importing static products list
import products from "@/data/products.json";
// const product = products[0];

// const ProductDetails = ({ productElement }: any) => {
const ProductDetails = () => {
  // const { addToCart } = useContext(CartContext);

  const router = useRouter();
  const { query, isReady } = router;
  const { slug } = query;
  // Product details
  const [product, setProduct] = useState<Product>();
  // Product colors
  const [selectedColor, setSelectedColor] = useState<Array<Colors>>();
  // Product quantity counter
  const [count, setCount] = useState(1);
  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Setting class names from colors array
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  // Check product uuid with slug
  useEffect(() => {
    if (isReady) {
      console.log(slug);
      products.map((elem: Product) => {
        if (elem?.uuid === slug) {
          setProduct(elem);
          console.log(elem?.colors);
          setSelectedColor(elem?.colors);
        } else {
          setProduct(products[0]);
          setSelectedColor(products[0]?.colors);
        }
      });
    }
  }, [isReady, router, slug]);

  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>
      <section className="overflow-hidden text-gray-700 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="relative flex flex-col mx-auto md:flex-row lg:w-4/5">
            <div className="absolute z-10 w-40 h-16 top-3 left-3 ">
              <Image
                src="/images/promo.svg"
                alt="tarbouch"
                width="200px"
                height="100px"
              />
            </div>
            <Image
              alt="ecommerce"
              height="500px"
              width="500px"
              className="object-cover object-center w-[500px] h-[500px] border border-gray-200 rounded lg:w-1/2"
              src={product?.images[0] || "/images/products/default.png"}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                {product?.brand}
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {product?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Rating
                    color="blue"
                    name="rating"
                    defaultValue={2}
                    precision={1}
                  />
                  <span className="ml-3 text-gray-600">
                    {product?.reviews} Reviews
                  </span>
                </span>
                <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200">
                  <a className="font-bold text-primary-500">{product?.store}</a>
                </span>
              </div>
              <ul className="mx-6 leading-relaxed list-disc">
                {product?.description.map((line, i) => (
                  // eslint-disable-next-line react/jsx-key
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <div className="flex flex-col pb-5 mt-6 mb-5 border-b-2 border-gray-200 md:items-center md:flex-row">
                <form className="pb-4 md:pb-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product?.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "m-0 relative p-1 rounded-[5px] flex items-center justify-center cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="p" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-12 border border-black border-opacity-10 rounded-[5px]"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </form>
                <div className="ml-0 md:ml-6">
                  <h3 className="mb-4 text-sm font-medium text-gray-900">
                    Quantity
                  </h3>
                  <div className="relative flex flex-row w-full h-10 mt-1 bg-transparent rounded-lg">
                    <button
                      onClick={decrementCount}
                      data-action="decrement"
                      className="w-20 h-full text-gray-100 bg-gray-500 rounded-l outline-none cursor-pointer hover:bg-primary-500"
                    >
                      <span className="m-auto text-2xl font-thin leading-none">
                        −
                      </span>
                    </button>
                    <input
                      type="number"
                      name="clicks"
                      value={count}
                      onChange={(event) => {
                        const value = Number(event.target.value);
                        setCount(value);
                      }}
                      className="flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
                    />
                    <button
                      onClick={incrementCount}
                      data-action="increment"
                      className="w-20 h-full text-gray-100 bg-gray-500 rounded-r cursor-pointer hover:bg-primary-500"
                    >
                      <span className="m-auto text-2xl font-thin leading-none">
                        +
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  {product?.price}Dhs
                </span>
                <button
                  className="flex px-6 py-2 ml-auto text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-600"
                  // onClick={() => addToCart(productElement)}
                >
                  Ajouter au panier
                </button>
                <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-white bg-gray-400 border-0 rounded-full hover:bg-primary-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
