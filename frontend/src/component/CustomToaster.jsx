import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        // Default styles
        style: {
          background: "#FFFFFF",
          color: "#111827",
          border: "1px solid #E5E7EB",
          fontFamily: "Inter, Roboto, sans-serif",
          borderRadius: "0.75rem",
          padding: "12px 16px",
        },
        // Success
        success: {
          style: {
            background: "#10B981",
            color: "#FFFFFF",
          },
          iconTheme: {
            primary: "#FFFFFF",
            secondary: "#10B981",
          },
        },
        // Error
        error: {
          style: {
            background: "#DC2626",
            color: "#FFFFFF",
          },
          iconTheme: {
            primary: "#FFFFFF",
            secondary: "#DC2626",
          },
        },
        // Loading
        loading: {
          style: {
            background: "#F59E0B",
            color: "#FFFFFF",
          },
          iconTheme: {
            primary: "#FFFFFF",
            secondary: "#F59E0B",
          },
        },
      }}
    />
  );
};

export default CustomToaster;
