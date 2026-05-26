import { useTranslation } from "react-i18next";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { Heading } from "@/components/ui/heading";
import type { GalleryItem } from "@/data/galleryData";

interface PortfolioGalleryProps {
  items: GalleryItem[];
}

export function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Heading level={2} className="mb-10 md:mb-14">
          {t("portfolio.gallery.heading")}
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <div
                key={item.id}
                className={`flex flex-col gap-4${isLast ? " md:col-span-2" : ""}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-muted">
                  <ReactCompareSlider
                    style={{ width: "100%", height: "100%" }}
                    itemOne={
                      <ReactCompareSliderImage
                        src={item.imageBefore}
                        alt={`${t(item.numberKey)} ${t("portfolio.gallery.labelBefore")}`}
                        style={{ objectFit: "cover" }}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={item.imageAfter}
                        alt={`${t(item.numberKey)} ${t("portfolio.gallery.labelAfter")}`}
                        style={{ objectFit: "cover" }}
                      />
                    }
                    handle={
                      <ReactCompareSliderHandle
                        buttonStyle={{
                          width: 44,
                          height: 44,
                          backgroundColor: "hsl(var(--primary))",
                          color: "hsl(var(--primary-foreground))",
                          border: "none",
                        }}
                        linesStyle={{
                          color: "hsl(var(--primary))",
                          width: 2,
                        }}
                      />
                    }
                  />
                </div>

                <div className="space-y-1">
                  <span className="block text-xs font-semibold tracking-widest uppercase text-primary">
                    {t(item.numberKey)}
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {t(item.titleKey)}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(item.captionKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
