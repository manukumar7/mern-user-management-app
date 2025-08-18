import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] animate-fade-in font-inter px-4">
      <div className="text-center p-8 bg-[#FFFFFF] rounded-lg shadow-md border border-[#E5E7EB] animate-scale-in max-w-md w-full">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-16 h-16 text-[#F97316] animate-bounce" />
        </div>

        <h1 className="text-6xl font-bold mb-2 text-[#2563EB] animate-pulse-soft">
          404
        </h1>
        <p className="text-xl text-[#6B7280] mb-2">Oops! Page not found</p>
        <p className="text-sm text-[#9CA3AF] mb-6">
          The page you are looking for might have been moved or doesn’t exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="px-5 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-md transition-smooth shadow-md hover:shadow-lg"
          >
            Return to Home
          </a>
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 rounded-md transition-smooth"
          >
            <span className="flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
