import { Image } from '@src/components/ui/image';
import { Video } from '@src/components/ui/video/video';

import benchmarksHeroMp4 from './assets/benchmarks-hero_opt.mp4';
import benchmarksHeroWebm from './assets/benchmarks-hero_opt.webm';

// @ts-expect-error
import mixpanelMobileWebp from './assets/mixpanel-mobile-1.webp?&as=metadata';

export const IntroductionBottom = () => {
  return (
    <div className="lg:mb-24">
      <Video
        playAsGif
        mp4Src={benchmarksHeroMp4}
        webmSrc={benchmarksHeroWebm}
        className="aspect-[16/9] max-w-52 md:max-w-lg lg:max-w-lg"
        height="596"
        width="1078"
      />
      <Image
        src={mixpanelMobileWebp.src}
        height={mixpanelMobileWebp.height}
        width={mixpanelMobileWebp.width}
        alt="Mixpanel mobile experience"
        className="aspect-[16/9] max-w-52 md:max-w-lg lg:max-w-lg"
      />
    </div>
  );
};
