import { tv } from 'tailwind-variants';

import { cn } from '@src/utils/cn';
import { RoundedCorner } from '@src/constants';
import { Image } from '@src/components/ui/image';
import { Video } from '@src/components/ui/video/video';

import benchmarksHeroMp4 from './assets/benchmarks-hero.mp4';
import benchmarksHeroWebm from './assets/benchmarks-hero.webm';
import benchmarksStarsMp4 from './assets/benchmarks-stars.mp4';
import benchmarksStarsWebm from './assets/benchmarks-stars.webm';
import benchmarkStatsMp4 from './assets/benchmark-stats.mp4';
import benchmarkStatsWebm from './assets/benchmark-stats.webm';
import bottleProductWebm from './assets/bottle-product.webm';
import mixpanelImmersiveOnboardingSetupWebm from './assets/mixpanel-immersive-onboarding-setup-guide.webp';
import bottleAutomationWebm from './assets/bottle-automation.webp';

// @ts-expect-error
import benchmarksPoster from './assets/benchmarks-poster.webp?&as=metadata';
// @ts-expect-error
import statsPoster from './assets/stats-poster.webp?&as=metadata';
// @ts-expect-error
import starsPoster from './assets/stars-poster.webp?&as=metadata';
// @ts-expect-error
import mixpanelMobileTwoWebp from './assets/mixpanel-mobile-2.webp?&as=metadata';
// @ts-expect-error
import mixpanelPricingWebp from './assets/mixpanel-pricing.webp?&as=metadata';
// @ts-expect-error
import bottleProductOne from './assets/bottle-product-1.webp?&as=metadata';
// @ts-expect-error
import bottleProductTwo from './assets/bottle-product-2.webp?&as=metadata';
// @ts-expect-error
import bottleProducts from './assets/bottle-products-list.webp?&as=metadata';
// @ts-expect-error
import heliographReadme from './assets/mixpanel-heliograph-readme.webp?&as=metadata';
// @ts-expect-error
import heliographButtons from './assets/mixpanel-heliograph-buttons.webp?&as=metadata';
// @ts-expect-error
import heliographInput from './assets/mixpanel-heliograph-input.webp?&as=metadata';

export const Layout = tv({
  slots: {
    parentGrid: 'grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10',
    halfColumn: 'col-span-2 md:col-span-3 lg:col-span-6',
    nestedGrid: 'grid gap-8 lg:gap-10',
    quarterColumn: 'col-span-2 md:col-span-3',
  },
});

export const IntroductionBottom = () => {
  const { parentGrid, halfColumn, nestedGrid, quarterColumn } = Layout.slots;

  return (
    <>
      <div className={cn(parentGrid, 'mt-24')}>
        <div className={cn(halfColumn)}>
          <div className={cn(nestedGrid)}>
            <div className={cn(halfColumn)}>
              <Video
                playAsGif
                poster={benchmarksPoster.src}
                mp4Src={benchmarksHeroMp4}
                webmSrc={benchmarksHeroWebm}
                className="aspect-[16/9]"
                height="596"
                width="1078"
              />
            </div>
            <div className={cn(halfColumn, 'flex justify-end')}>
              <div className="lg:max-w-md grow">
                <Image
                  src={mixpanelMobileTwoWebp.src}
                  height={mixpanelMobileTwoWebp.height}
                  width={mixpanelMobileTwoWebp.width}
                  alt="Mixpanel mobile experience"
                  className="aspect-[1/1]"
                  classNameInner="h-full object-cover"
                />
              </div>
            </div>
            <div className={cn(quarterColumn)}>
              <div className="lg:max-w-sm">
                <Video
                  poster={statsPoster.src}
                  roundedCorner={RoundedCorner.RoundedXl}
                  mp4Src={benchmarkStatsMp4}
                  webmSrc={benchmarkStatsWebm}
                  className="aspect-[16/10]"
                  height="596"
                  width="1078"
                  playAsGif
                />
              </div>
            </div>
            <div className={cn(quarterColumn)}>
              <Image
                src={heliographInput.src}
                height={heliographInput.height}
                width={heliographInput.width}
                alt="Mixpanel mobile experience"
                className="aspect-[16/10]"
                classNameInner="h-full object-cover"
              />
            </div>

            <div className={cn(halfColumn)}>
              <Image
                src={mixpanelPricingWebp.src}
                height={mixpanelPricingWebp.height}
                width={mixpanelPricingWebp.width}
                alt="Mixpanel pricing flow"
                className="aspect-[16/9]"
                classNameInner="h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className={cn(halfColumn)}>
          <div className={cn(nestedGrid)}>
            <div className={cn(halfColumn)}>
              <Image
                roundedCorner={RoundedCorner.RoundedXl}
                src={mixpanelImmersiveOnboardingSetupWebm}
                height="1800"
                width="3200"
                alt="Mixpanel Heliograph components in immersive onboarding flow"
                className="aspect-[3200/1800]"
              />
            </div>
            <div className={cn(halfColumn)}>
              <Image
                src={heliographButtons.src}
                height={heliographButtons.height}
                width={heliographButtons.width}
                alt="Mixpanel mobile experience"
                className="aspect-[16/10]"
                classNameInner="h-full object-cover"
              />
            </div>
            <div className={cn(halfColumn)}>
              <div className="grow lg:max-w-lg">
                <Image
                  src={heliographReadme.src}
                  height={heliographReadme.height}
                  width={heliographReadme.width}
                  alt="Mixpanel mobile experience"
                  className="aspect-[2/1]"
                  classNameInner="h-full object-cover"
                />
              </div>
            </div>
            <div className={cn(halfColumn)}>
              <Video
                poster={starsPoster.src}
                mp4Src={benchmarksStarsMp4}
                webmSrc={benchmarksStarsWebm}
                className="aspect-[16/9]"
                height="596"
                width="1078"
                playAsGif
              />
            </div>
          </div>
        </div>

        <div className="lg:col-start-3 lg:col-end-10 col-span-2">
          <Video
            playAsGif
            poster={bottleProductOne.src}
            webmSrc={bottleProductWebm}
            className="aspect-[863/540]"
            height="1080"
            width="1726"
          />
        </div>
        <div className={cn(halfColumn)}>
          <Image
            roundedCorner={RoundedCorner.RoundedXl}
            src={bottleAutomationWebm}
            height="1032"
            width="1920"
            alt="Bottle products dashboard"
            className="aspect-[1032/1920]"
          />
        </div>
        <div className={cn(halfColumn)}>
          <Image
            src={bottleProductTwo.src}
            height={bottleProductTwo.height}
            width={bottleProductTwo.width}
            alt="Bottle product detail"
            className="aspect-[863/540] "
          />
        </div>
      </div>
    </>
  );
};
