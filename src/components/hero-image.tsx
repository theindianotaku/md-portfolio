import Image from 'next/image';

import desktopPNG from '@/assets/images/hero.png';
import desktopWebP from '@/assets/images/hero.webp';
import mobilePNG from '@/assets/images/hero-mobile.png';
import mobileWebP from '@/assets/images/hero-mobile.webp';

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center max-w-[300px] md:flex-[3] md:max-w-[400px]">
      <div className="md:hidden">
        <picture>
          <source srcSet={mobileWebP.src} type="image/webp" />
          <Image
            src={mobilePNG}
            alt="Debashish's photo"
            priority={true}
            width={mobilePNG.width}
            height={mobilePNG.height}
            className="w-full h-auto"
          />
        </picture>
      </div>
      <div className="hidden md:block">
        <picture>
          <source srcSet={desktopWebP.src} type="image/webp" />
          <Image
            src={desktopPNG}
            alt="Debashish's photo"
            priority={true}
            width={desktopPNG.width}
            height={desktopPNG.height}
            className="w-full h-auto"
          />
        </picture>
      </div>
    </div>
  );
};

export default HeroImage;
