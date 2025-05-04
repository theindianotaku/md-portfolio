import Image from 'next/image';

import desktopWebP from '@/assets/images/hero.webp';

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center max-w-[300px] md:flex-[3] md:max-w-[400px]">
      <Image
        src={desktopWebP}
        alt="Debashish's photo"
        width={desktopWebP.width}
        height={desktopWebP.height}
        className="object-cover"
        sizes="(min-width: 768px) 37.5vw, 90vw"
        priority
      />
    </div>
  );
};

export default HeroImage;
