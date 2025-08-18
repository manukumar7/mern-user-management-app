import { useState, useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Camera,
  Upload,
  X,
  User,
  Image as ImageIcon,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const ImageDropzone = ({
  onImageSelect,
  currentImage,
  userName = "",
  error,
  className,
}) => {
  const [preview, setPreview] = useState(currentImage || "");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        console.error("File rejected:", rejectedFiles[0].errors);
        return;
      }

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setIsUploading(true);

        // Simulate upload delay for better UX
        setTimeout(() => {
          onImageSelect(file);

          const reader = new FileReader();
          reader.onload = (e) => {
            setPreview(e.target?.result);
            setIsUploading(false);
          };
          reader.readAsDataURL(file);
        }, 500);
      }
    },
    [onImageSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp", ".bmp", ".svg"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
    onDrop: handleDrop,
    preventDropOnDocument: true,
    noClick: false,
    noKeyboard: false,
  });

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setPreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const dropzoneClasses = cn(
    "relative group cursor-pointer transition-all duration-500 ease-out",
    "border-2 border-dashed rounded-2xl p-8",
    "hover:border-primary/60 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10",
    "hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]",
    "transform-gpu backdrop-blur-sm",
    {
      "border-primary bg-gradient-to-br from-primary/15 to-primary/25 shadow-2xl shadow-primary/30 scale-[1.02] animate-pulse":
        isDragActive,
      "border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/30 shadow-xl shadow-emerald-200 dark:shadow-emerald-800/30":
        isDragAccept,
      "border-destructive bg-gradient-to-br from-destructive/10 to-destructive/20 shadow-xl shadow-destructive/20":
        isDragReject || error,
      "border-border/50":
        !isDragActive && !isDragAccept && !isDragReject && !error,
      "animate-shake": error,
    },
    className
  );

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className={dropzoneClasses}>
        <input {...getInputProps()} ref={fileInputRef} />

        <div className="flex flex-col items-center space-y-6">
          {/* Avatar Preview */}
          <div className="relative group">
            <div
              className={cn(
                "relative w-32 h-32 rounded-full overflow-hidden",
                "shadow-2xl shadow-primary/20 group-hover:shadow-3xl group-hover:shadow-primary/30",
                "transition-all duration-500 ease-out transform-gpu",
                "group-hover:scale-110 group-hover:rotate-2",
                isUploading && "animate-pulse scale-105"
              )}
            >
              <Avatar className="w-full h-full">
                {preview ? (
                  <AvatarImage
                    src={preview}
                    alt="Profile preview"
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                ) : (
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-2xl font-bold transition-all duration-500 group-hover:scale-105">
                    {userName ? (
                      getInitials(userName)
                    ) : (
                      <User className="w-10 h-10" />
                    )}
                  </AvatarFallback>
                )}
              </Avatar>

              {/* Loading overlay */}
              {isUploading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full">
                  <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}

              {/* Success indicator */}
              {preview && !isUploading && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              )}
            </div>

            {preview && !isUploading && (
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute -top-1 -right-1 w-8 h-8 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-125 shadow-lg"
                onClick={handleRemoveImage}
              >
                <X className="w-4 h-4" />
              </Button>
            )}

            {/* Hover overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-full",
                "opacity-0 group-hover:opacity-100 transition-all duration-300",
                "flex items-center justify-center",
                isUploading && "opacity-0"
              )}
            >
              <Camera className="w-8 h-8 text-white animate-bounce" />
            </div>
          </div>

          {/* Upload Content */}
          <div className="text-center space-y-4 px-4">
            <div className="flex flex-col items-center space-y-3">
              <div
                className={cn(
                  "p-3 rounded-full bg-gradient-to-br transition-all duration-500",
                  isDragActive
                    ? "from-primary to-primary/80 scale-125 animate-bounce"
                    : "from-primary/20 to-primary/30 group-hover:from-primary/30 group-hover:to-primary/40 group-hover:scale-110"
                )}
              >
                {isDragActive ? (
                  <ImageIcon className="w-8 h-8 text-white animate-pulse" />
                ) : isUploading ? (
                  <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
                ) : (
                  <Upload className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
                )}
              </div>

              <h3
                className={cn(
                  "font-semibold text-lg transition-all duration-300",
                  isDragActive
                    ? "text-primary scale-105"
                    : "text-foreground group-hover:text-primary group-hover:scale-105"
                )}
              >
                {isDragActive
                  ? "✨ Drop image here..."
                  : isUploading
                  ? "Processing..."
                  : preview
                  ? "Image Ready!"
                  : "Upload Profile Image"}
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="inline-block animate-fade-in">
                  Drag & drop an image here, or
                </span>{" "}
                <button
                  type="button"
                  className="text-primary font-semibold hover:underline hover:scale-105 transition-all duration-200 story-link"
                  onClick={() => fileInputRef.current?.click()}
                >
                  click to browse
                </button>
              </p>

              <p className="text-xs text-muted-foreground/80 font-medium">
                📸 JPG, PNG, GIF, WebP, SVG • Max 5MB
              </p>
            </div>
          </div>

          {/* Upload Button */}
          {!isUploading && (
            <Button
              type="button"
              variant={preview ? "default" : "outline"}
              size="lg"
              className={cn(
                "transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold px-8",
                preview
                  ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/30"
                  : "hover:border-primary hover:bg-primary/5 hover:text-primary"
              )}
              onClick={() => fileInputRef.current?.click()}
            >
              <Camera className="w-5 h-5 mr-2" />
              {preview ? "🔄 Change Image" : "📁 Browse Files"}
            </Button>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-gradient-to-r from-destructive/10 to-destructive/20 border border-destructive/30 rounded-xl animate-fade-in">
          <p className="text-sm text-destructive flex items-center space-x-2 font-medium">
            <X className="w-5 h-5 animate-bounce" />
            <span>{error}</span>
          </p>
        </div>
      )}

      {/* Success Indicator */}
      {preview && !error && !isUploading && (
        <div className="p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/30 border border-emerald-200 dark:border-emerald-700 rounded-xl animate-fade-in">
          <p className="text-sm text-emerald-700 dark:text-emerald-300 flex items-center space-x-2 font-medium">
            <CheckCircle className="w-5 h-5 animate-bounce text-emerald-500" />
            <span>✨ Image ready for upload</span>
          </p>
        </div>
      )}

      {/* Upload Progress */}
      {isUploading && (
        <div className="p-4 bg-gradient-to-r from-primary/10 to-primary/20 border border-primary/30 rounded-xl animate-fade-in">
          <p className="text-sm text-primary flex items-center space-x-2 font-medium">
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            Uploading...
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageDropzone;
