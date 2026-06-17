import Navbar from "../components/layout/Navbar";
import CustomCursor from "../components/ui/CustomCursor";
import ScrollToTop from "../components/ui/ScrollToTop";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#070000] antialiased selection:bg-[#F34E32] selection:text-white">
      <CustomCursor />
      <Navbar />
      <main className="pt-[60px]">{children}</main>
      <ScrollToTop />
    </div>
  );
}
