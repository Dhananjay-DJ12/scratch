import Image from "next/image";
import loader from "../public/assets/load.gif";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <Image
      src={loader}
      alt='loader'
      width={400}
      height={400}
      className='object-contain'
    />
    <p className='text-md font-bold text-white'>Loading...</p>
  </div>
);

export default Loader;
