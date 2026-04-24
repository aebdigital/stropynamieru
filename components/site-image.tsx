import Image, { type ImageProps } from "next/image";
import { assetUrl } from "@/lib/site";

type SiteImageProps = Omit<ImageProps, "src"> & {
  src: ImageProps["src"];
};

export function SiteImage({ src, ...props }: SiteImageProps) {
  const { alt, ...restProps } = props;
  const normalizedSrc =
    typeof src === "string" && !src.startsWith("data:") ? assetUrl(src) : src;

  return <Image src={normalizedSrc} alt={alt} {...restProps} />;
}
