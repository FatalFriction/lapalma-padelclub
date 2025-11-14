interface CourtCardProps {
  title: string;
  description: string;
  image: string;
}

export function CourtCard({ title, description, image }: CourtCardProps) {
  return (
    <div
      className="
      group relative overflow-hidden
    bg-white/10 backdrop-blur-md
    border border-white/20
    rounded-2xl">
      <div
        className="h-[570px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="space-y-2 relative">
        <h3 className="text-4xl text-[#d7f04bde] highs-wrappers">
          {title}
        </h3>

        <p id="desc" className="desc-wrappers text-black text-lg">{description}</p>
      </div>
    </div>
  );
}
