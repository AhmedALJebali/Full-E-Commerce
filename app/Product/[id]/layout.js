
import Footer, { NewsletterSection } from "../../_components/Footer";

export default function ProductsLayout({ children }) {
  return (
    <>
      {children}
      <NewsletterSection />
      <Footer />
    </>
  );
}
