"use client";

interface Props {
  src: string;
}

export default function VideoPlayer({ src }: Props) {
  return (
    <div className="w-full h-[500px]">
      {/* Mask */}
      <div className="z-10 absolute w-full h-[500px] flex items-end pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>

      <video
        className="w-full h-full outline-none object-cover"
        src={src}
        controls
        muted
        autoPlay
      />
    </div>
  );
}
