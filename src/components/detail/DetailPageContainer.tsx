import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DetailPageContainerProps {
  children: ReactNode;
  relatedTitle: string;
  relatedLink: {
    to: string;
    label: string;
  };
  relatedContent: ReactNode;
}

const DetailPageContainer = ({
  children,
  relatedTitle,
  relatedLink,
  relatedContent,
}: DetailPageContainerProps) => (
  <div className="min-h-screen bg-gradient-subtle">
    <Navbar minimal />
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl space-y-16">
        {children}

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">{relatedTitle}</h2>
            <Link to={relatedLink.to} className="text-primary font-semibold hover:underline">
              {relatedLink.label}
            </Link>
          </div>
          {relatedContent}
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default DetailPageContainer;
