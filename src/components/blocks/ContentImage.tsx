import Image from "next/image";
import type { ImageMeta } from "@/content/types";
import { cn } from "@/lib/utils";

export function ContentImage({
  image,
  className,
  sizes,
  priority = false,
  quality = 90,
}: {
  image: ImageMeta;
  className?: string;
  sizes: string;
  priority?: boolean;
  /** Next.js image quality (default 90 for photo-heavy pages). */
  quality?: number;
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
      quality={quality}
      priority={priority}
      className={cn("object-cover", className)}
      style={{ objectPosition }}
    />
  );
}
