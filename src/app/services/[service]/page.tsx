import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Optimized: Strip the first H1 from markdown to avoid duplication with the hero H1
  const contentWithoutH1 = service.content.replace(/^#\s+.+$/m, "").trim();

  return (
    <main className="min-h-screen bg-sand-50">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-6 py-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-foreground font-medium" aria-current="page">
            {service.slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pb-12 lg:pb-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6 leading-tight">
            {service.title.split(" — ")[0]}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 lg:py-24 border-t border-sand-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-stone max-w-none 
              prose-headings:font-serif prose-headings:text-charcoal
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-charcoal
              prose-img:rounded-2xl prose-img:shadow-lg">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {contentWithoutH1}
              </ReactMarkdown>
            </article>
            
            <div className="mt-16 pt-8 border-t border-sand-100 flex justify-between items-center">
              <Link 
                href="/services" 
                className="text-primary hover:text-primary/80 font-medium flex items-center transition-all group"
              >
                <ChevronRight className="w-4 h-4 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </Link>
              
              <Link 
                href="/contact" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
