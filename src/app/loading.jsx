import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image
        className="h-auto w-auto"
        src="spinner.svg"
        width={200}
        height={200}
        quality={100}
        priority
        alt="loading..."
      />
    </div>
  );
}
