import Image from "next/image";

function Header() {
  return (
    <div className="sticky bg-[#333336] top-0 z-[1000] flex h-[72px] items-center px-10 md:px-12 lg:px-15">
      <Image
        src="/logo.png"
        width={40}
        height={40}
        className="cursor-pointer"
      />
      <h3 className="text-white px-2">Story Listing</h3>
    </div>
  );
}

export default Header;
