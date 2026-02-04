import {
  HomeLayout as BasicHomeLayout,
  Layout as BasicLayout,
  PackageManagerTabs,
} from '@rspress/core/theme-original';
import { NavIcon } from '@rstack-dev/doc-ui/nav-icon';
import { CssModificationProvider } from '../components/CssModificationContext';
import { CssModificationIndicator } from '../components/CssModificationIndicator';
import { CssStyleSync } from '../components/CssStyleSync';
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

export * from '@rspress/core/theme-original';
export { HomeLayout, Layout };