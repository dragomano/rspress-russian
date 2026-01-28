import {
  Layout as BasicLayout,
} from '@rspress/core/theme-original';
import { NavIcon } from '@rstack-dev/doc-ui/nav-icon';
import { CssModificationProvider } from '../components/CssModificationContext';
import { CssModificationIndicator } from '../components/CssModificationIndicator';
import { CssStyleSync } from '../components/CssStyleSync';

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
export { Layout };