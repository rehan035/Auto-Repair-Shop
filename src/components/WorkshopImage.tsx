import React, { useState } from 'react';
import { Wrench } from 'lucide-react';

interface WorkshopImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const WorkshopImage: React.FC<WorkshopImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-surface-container-highest via-surface-container to-surface-container-lowest flex flex-col items-center justify-center p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Wrench className="w-8 h-8 text-primary-container mb-2 opacity-80" />
        <span className="font-mono-label text-[11px] uppercase tracking-widest text-secondary">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
