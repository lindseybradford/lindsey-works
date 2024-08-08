import { Image } from '@src/components/ui/image';
import { Video } from '@src/components/ui/video/video';

import benchmarksHeroMp4 from './assets/benchmarks-hero.mp4';
import benchmarksHeroWebm from './assets/benchmarks-hero.webm';
import benchmarksStarsMp4 from './assets/benchmarks-stars.mp4';
import benchmarksStarsWebm from './assets/benchmarks-stars.webm';
import benchmarkStatsMp4 from './assets/benchmark-stats.mp4';
import benchmarkStatsWebm from './assets/benchmark-stats.webm';
import bottleProductWebm from './assets/bottle-product.webm';
// @ts-expect-error
import mixpanelMobileWebp from './assets/mixpanel-mobile-1.webp?&as=metadata';
// @ts-expect-error
import mixpanelMobileTwoWebp from './assets/mixpanel-mobile-2.webp?&as=metadata';
// @ts-expect-error
import mixpanelHomeWebp from './assets/mixpanel-home.webp?&as=metadata';
// @ts-expect-error
import mixpanelButtonWebp from './assets/mixpanel-button.webp?&as=metadata';
// @ts-expect-error
import mixpanelPricingWebp from './assets/mixpanel-pricing.webp?&as=metadata';
// @ts-expect-error
import bottleProductTwo from './assets/bottle-product-2.webp?&as=metadata';
// @ts-expect-error
import bottleProducts from './assets/bottle-products-list.webp?&as=metadata';

export const IntroductionBottom = () => {
  return (
    <>
      <div className="mt-24 grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="col-span-2 md:col-span-1 lg:col-span-6">
          <Video
            playAsGif
            mp4Src={benchmarksHeroMp4}
            webmSrc={benchmarksHeroWebm}
            innerClassName="aspect-[16/9]"
            height="596"
            width="1078"
          />
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-6 flex flex-col justify-end">
          <Image
            src={mixpanelHomeWebp.src}
            height={mixpanelHomeWebp.height}
            width={mixpanelHomeWebp.width}
            alt="Mixpanel mobile experience"
            className="aspect-[16/9] lg:max-w-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-6 flex justify-end">
          <Image
            src={mixpanelMobileWebp.src}
            height={mixpanelMobileWebp.height}
            width={mixpanelMobileWebp.width}
            alt="Mixpanel home animation"
            className="aspect-[1/1]"
            classNameInner="h-full object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-6">
          <Video
            playAsGif
            mp4Src={benchmarksStarsMp4}
            webmSrc={benchmarksStarsWebm}
            className="aspect-[16/9]"
            height="596"
            width="1078"
          />
        </div>

        <div className="col-span-2 md:col-span-1 lg:col-span-6">
          <div className="grid grid-cols-2 gap-8 lg:gap-10">
            <div className="col-span-2 md:col-span-1">
              <Image
                src={mixpanelButtonWebp.src}
                height={mixpanelButtonWebp.height}
                width={mixpanelButtonWebp.width}
                alt="Mixpanel home animation"
                className="aspect-[16/9]"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Image
                src={mixpanelHomeWebp.src}
                height={mixpanelHomeWebp.height}
                width={mixpanelHomeWebp.width}
                alt="Mixpanel mobile experience"
                className="aspect-[16/9] "
              />
            </div>
            <div className="col-span-2">
              <Video
                playAsGif
                mp4Src={benchmarkStatsMp4}
                webmSrc={benchmarkStatsWebm}
                className="aspect-[16/9]"
                height="596"
                width="1078"
              />
            </div>
            <div className="col-span-2">
              <Video
                playAsGif
                webmSrc={bottleProductWebm}
                className="aspect-[863/540]"
                height="1080"
                width="1726"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-6">
          <div className="grid grid-cols-2 gap-8 lg:gap-10">
            <div className="col-span-2">
              <Image
                src={mixpanelMobileTwoWebp.src}
                height={mixpanelMobileTwoWebp.height}
                width={mixpanelMobileTwoWebp.width}
                alt="Mixpanel home animation"
                className="aspect-[1/1] lg:max-w-lg"
                classNameInner="h-full object-cover"
              />
            </div>
            <div className="col-span-2">
              <Image
                src={mixpanelPricingWebp.src}
                height={mixpanelPricingWebp.height}
                width={mixpanelPricingWebp.width}
                alt="Mixpanel home animation"
                className="aspect-[16/9]"
                classNameInner="h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 lg:col-span-8">
          <Image
            src={bottleProductTwo.src}
            height={bottleProductTwo.height}
            width={bottleProductTwo.width}
            alt="Mixpanel home animation"
            className="aspect-[863/540]"
          />
        </div>
        <div className="col-span-2 lg:col-span-4">
          <Image
            src={bottleProducts.src}
            height={bottleProducts.height}
            width={bottleProducts.width}
            alt="Mixpanel home animation"
            className="aspect-[863/540] lg:max-w-lg"
          />
        </div>
      </div>
    </>
  );
};
