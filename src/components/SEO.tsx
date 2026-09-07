import { useEffect } from 'react';

interface Props {
  title: string;
  description?: string;
  /** Absolute or root-relative image for social cards. */
  image?: string;
  /** og:type — 'website' (default) or 'article'. */
  type?: 'website' | 'article';
  /** Structured data (JSON-LD) for rich results. */
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = 'https://mokshly.com';
const DEFAULT_DESCRIPTION =
  'Mokshly is a Human Capability Infrastructure Company — strengthening the foundational human capabilities people need to thrive alongside AI.';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/** Per-page SEO — sets the title, description, canonical, Open Graph,
 *  Twitter card, and optional JSON-LD via the DOM. Google renders JS, so
 *  this makes each route individually indexable and shareable. */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image,
  type = 'website',
  jsonLd,
}: Props) {
  useEffect(() => {
    const url = SITE_URL + window.location.pathname;
    const img = image ? (image.startsWith('http') ? image : SITE_URL + image) : DEFAULT_IMAGE;

    document.title = title;
    setMeta('description', description);

    setProp('og:type', type);
    setProp('og:title', title);
    setProp('og:description', description);
    setProp('og:url', url);
    setProp('og:image', img);
    setProp('og:site_name', 'Mokshly');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', img);

    setLink('canonical', url);
    setJsonLd(jsonLd);
  }, [title, description, image, type, jsonLd]);

  return null;
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setProp(prop: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${prop}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', prop);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(data?: Record<string, unknown>) {
  const id = 'seo-jsonld';
  const existing = document.getElementById(id);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  const script = existing ?? document.createElement('script');
  script.id = id;
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
}
