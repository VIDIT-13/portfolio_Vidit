import { useState } from "react";

const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
