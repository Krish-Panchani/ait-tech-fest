import React, { useState, useEffect } from 'react';
import { Skeleton } from '../ui/skeleton';

export default function Map() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      {isLoading && <Skeleton className="w-full h-[400px]" />}
      {!isLoading && (
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.60422205821!2d72.51847747477287!3d23.111579713001856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82d327b6665d%3A0x15ce36c9772a1c7b!2sAhmedabad%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1706430991172!5m2!1sen!2sin"
          onLoad={() => setIsLoading(false)}
        ></iframe>
      )}
    </div>
  );
}
