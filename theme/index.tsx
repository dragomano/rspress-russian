import {
  DocLayout as BasicDocLayout,
  HomeLayout as BasicHomeLayout,
  Layout as BasicLayout,
  PackageManagerTabs,
  type DocLayoutProps,
} from '@rspress/core/theme-original';
import { NavIcon } from '@rstack-dev/doc-ui/nav-icon';
import { CssModificationProvider } from '../components/CssModificationContext';
import { CssModificationIndicator } from '../components/CssModificationIndicator';
import { CssStyleSync } from '../components/CssStyleSync';
import { Callout, Tag } from './components';
import { BlogBackButton } from './components/BlogBackButton';
import './index.css';

function HomeLayout() {
  return (
    <BasicHomeLayout
      afterHeroActions={
        <div
          className="rp-doc"
          style={{ width: '100%', maxWidth: 450, margin: '-1rem 0' }}
        >
          <PackageManagerTabs command="create rspress@latest" />
        </div>
      }
    />
  );
}

const Layout = () => {
  return (
    <CssModificationProvider>
      <CssStyleSync />
      <CssModificationIndicator />
      <BasicLayout beforeNavTitle={<NavIcon />} />
    </CssModificationProvider>
  );
};

const DocLayout = (props: DocLayoutProps) => {
  return (
    <BasicDocLayout
      {...props}
      beforeDocContent={
        <>
          <BlogBackButton />
          {props.beforeDocContent}
        </>
      }
    />
  );
};

export * from '@rspress/core/theme-original';
export { DocLayout, HomeLayout, Layout, Callout, Tag };