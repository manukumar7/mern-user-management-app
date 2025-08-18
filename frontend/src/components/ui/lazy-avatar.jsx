import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "lucide-react";

const LazyAvatar = ({ src, alt, name, className, fallbackClassName }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Start loading when in view
  if (inView && !shouldLoad) {
    setShouldLoad(true);
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div ref={ref} className={className}>
      <Avatar
        className={`${className} transition-all duration-300 hover:shadow-app-md hover:scale-105`}
      >
        {shouldLoad && src && !imageError ? (
          <>
            {!imageLoaded && (
              <AvatarFallback className="bg-gradient-hero text-primary-foreground">
                <Skeleton className="w-full h-full rounded-full" />
              </AvatarFallback>
            )}
            <AvatarImage
              src={src}
              alt={alt}
              onLoad={handleImageLoad}
              onError={handleImageError}
              className={`object-cover transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </>
        ) : (
          <AvatarFallback
            className={`bg-gradient-hero text-primary-foreground font-medium hover:bg-gradient-to-br hover:from-primary hover:to-accent transition-all duration-300 ${fallbackClassName}`}
          >
            {name ? getInitials(name) : <User className="w-1/2 h-1/2" />}
          </AvatarFallback>
        )}
      </Avatar>
    </div>
  );
};

export default LazyAvatar;
