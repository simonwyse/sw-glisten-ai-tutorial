import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import StarBackground from "./StarBackground";
import Image from "next/image";

import StylizedLogoMark from "./StylizedLogoMark";

import background from "./background.jpg";
import { Slackside_One } from "next/font/google";

import clsx from "clsx";
import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <div className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicRichText field={slice.primary.heading} />
        </div>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <AnimatedContent slice={slice} />
      </div>
    </Bounded>
  );
};

export default Integrations;
