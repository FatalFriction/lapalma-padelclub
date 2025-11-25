import Image from "next/image";
import "./background.css";

export default function Background() {
  return (
    <div id="back" className="relative w-full h-full overflow-hidden">
      <Image
        src="/img18.webp"
        alt="Lapalma Background"
        fill
        priority
        quality={100}
        sizes="(max-width: 768px) 200vw, 100vw"
      />
    </div>
  );
}
