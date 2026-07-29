import Image from "next/image";
import type { ImageMeta } from "@/content/types";
import { cn } from "@/lib/utils";

export function ContentImage({
  image,
  className,
  sizes,
  priority = false,
}: {
  image: ImageMeta;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const objectPosition = image.focalPoint
    ? `${image.focalPoint.x * 100}% ${image.focalPoint.y * 100}%`
    : "50% 50%";

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      style={{ objectPosition }}
    />
  );
}
