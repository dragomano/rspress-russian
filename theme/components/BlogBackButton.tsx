import { useLang, useLocation } from '@rspress/core/runtime';
import { Link } from '@rspress/core/theme-original';

export function BlogBackButton() {
  const { pathname } = useLocation();
  const lang = useLang();

  const blogPrefix = lang === 'en' || lang === '' ? '/blog' : `/${lang}/blog`;
  const isBlogSubpage =
    pathname.startsWith('/blog/') && pathname !== '/blog/';

  if (!isBlogSubpage) {
    return null;
  }

  return (
    <div className="blog-back-button">
      <Link href={blogPrefix}>← На главную</Link>
    </div>
  );
}
