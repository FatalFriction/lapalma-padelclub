import Image from "next/image";
import './background.css'

export default function Background() {
  return (
    <div id="back" className="relative w-full h-full overflow-hidden">
      <Image
        src="/img18.webp"
        alt="Lapalma Padel Club BSD Court"
        fill
        priority
        quality={75}
        className="object-cover mix-blend-normal pointer-events-none select-none"
      />

      <Image
        src="/img1.webp"
        alt="Lapalma Padel Club BSD Lounge"
        fill
        quality={75}
        className="object-cover mix-blend-normal opacity-0 pointer-events-none select-none"
      />
    </div>
  );
}
