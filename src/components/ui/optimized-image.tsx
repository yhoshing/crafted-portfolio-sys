import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

/**
 * 최적화된 이미지 컴포넌트
 * - 지연 로딩 (Lazy Loading)
 * - 플레이스홀더 표시
 * - 에러 처리
 * - 성능 최적화
 */
export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = "/placeholder.svg",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  useEffect(() => {
    // 우선순위가 높은 이미지는 즉시 로드
    if (priority) {
      setCurrentSrc(src);
      return;
    }

    // Intersection Observer를 사용한 지연 로딩
    const img = new Image();
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            img.onload = () => {
              setCurrentSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              setHasError(true);
              setCurrentSrc(placeholder);
            };
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const imgElement = document.querySelector(`[data-src="${src}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, priority, placeholder]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        data-src={src}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-all duration-500",
          isLoaded ? "opacity-100 scale-100" : "opacity-70 scale-105",
          hasError && "opacity-50"
        )}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setCurrentSrc(placeholder);
        }}
      />
      
      {/* 로딩 인디케이터 */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* 에러 상태 표시 */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 text-muted-foreground text-sm">
          이미지를 불러올 수 없습니다
        </div>
      )}
    </div>
  );
};
