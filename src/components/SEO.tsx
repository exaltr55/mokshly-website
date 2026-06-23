import { useEffect } from 'react';

interface Props {
  title: string;
  description?: string;
}

const DEFAULT_DESCRIPTION =
  'Mokshly is a Human Sustainability Company. Human Capability Infrastructure for the AI Era.';

/** Lightweight per-page SEO — sets <title> and the most important
 *  meta tags via DOM. Avoids pulling in react-helmet for a small site. */
export default function SEO({ title, description = DEFAULT_DESCRIPTION }: Props) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMetaProperty('og:title', title);
    setMetaProperty('og:description', description);
  }, [title, description]);
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

function setMetaProperty(prop: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${prop}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', prop);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
