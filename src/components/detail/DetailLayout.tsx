import { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface DetailMetadata {
  label: string;
  value: string;
}

interface DetailLayoutProps {
  coverImage: string;
  coverAlt: string;
  badge?: ReactNode;
  title: string;
  summary: string;
  supportingText?: ReactNode;
  metadata: DetailMetadata[];
  actions?: ReactNode;
  children: ReactNode;
}

export const DetailLayout = ({
  coverImage,
  coverAlt,
  badge,
  title,
  summary,
  supportingText,
  metadata,
  actions,
  children,
}: DetailLayoutProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="overflow-hidden rounded-3xl border border-border bg-card/80 shadow-glow"
  >
    <div className="relative">
      <img
        src={coverImage}
        alt={coverAlt}
        className="w-full h-72 object-cover"
      />
    </div>

    <div className="p-10 space-y-8">
      <div className="space-y-4">
        {badge}
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg text-muted-foreground">{summary}</p>
        {supportingText}
      </div>

      <DetailMetadataGrid items={metadata} />

      {actions}

      {children}
    </div>
  </motion.div>
);

interface DetailMetadataGridProps {
  items: DetailMetadata[];
}

export const DetailMetadataGrid = ({ items }: DetailMetadataGridProps) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item) => (
      <Card
        key={item.label}
        className="border-border/80 bg-background/60 backdrop-blur"
      >
        <CardContent className="px-6 py-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {item.label}
          </p>
          <p className="text-sm font-semibold">{item.value}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

interface DetailSectionProps {
  title: string;
  children: ReactNode;
}

export const DetailSection = ({ title, children }: DetailSectionProps) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    {children}
  </div>
);

interface DetailBulletListProps {
  items: string[];
  bulletClassName?: string;
  className?: string;
}

export const DetailBulletList = ({
  items,
  bulletClassName = "bg-primary",
  className = "space-y-3 text-lg text-muted-foreground leading-relaxed",
}: DetailBulletListProps) => (
  <ul className={className}>
    {items.map((item) => (
      <li key={item} className="relative pl-6">
        <span
          aria-hidden="true"
          className={`absolute left-0 top-2 h-2 w-2 rounded-full ${bulletClassName}`}
        />
        {item}
      </li>
    ))}
  </ul>
);

interface DetailGalleryProps {
  title: string;
  images: string[];
  altPrefix: string;
}

export const DetailGallery = ({
  title,
  images,
  altPrefix,
}: DetailGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return null;
  }

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedImageIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, images.length]);

  return (
    <DetailSection title={title}>
      <div
        className={`grid gap-4 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}
      >
        {images.map((image, index) => (
          <motion.div
            key={`${image}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-2xl border border-border/60 bg-background/60 cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => openImage(index)}
          >
            <img
              src={image}
              alt={`${altPrefix} gallery item ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && closeImage()}>
        <DialogContent
          className="max-w-7xl w-full h-[90vh] p-0 bg-transparent border-none shadow-none"
        >
          {selectedImageIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[selectedImageIndex]}
                alt={`${altPrefix} gallery item ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  {selectedImageIndex > 0 && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background z-10"
                      onClick={goToPrevious}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  )}
                  {selectedImageIndex < images.length - 1 && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background z-10"
                      onClick={goToNext}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  )}
                </>
              )}

              {/* Image counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full text-sm z-10">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              )}

              {/* Close button */}
              <DialogClose asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/90 hover:bg-background z-10"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </DetailSection>
  );
};
