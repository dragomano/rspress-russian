import {
  DocLayout as BasicDocLayout,
  HomeLayout as BasicHomeLayout,
  PackageManagerTabs,
  type HomeLayoutProps,
  type DocLayoutProps,
} from '@rspress/core/theme-original';
import { NavIcon } from '@rstack-dev/doc-ui/nav-icon';
import { CssModificationProvider } from '../components/CssModificationContext';
import { CssModificationIndicator } from '../components/CssModificationIndicator';
import { CssStyleSync } from '../components/CssStyleSync';
import { SlotPreview, SlotPreviewLayout } from '../components/SlotPreview';
import { Callout, Prompt, Tag } from './components';
import { BlogBackButton } from './components/BlogBackButton';
import { HomeSections } from './components/HomeSections';
import { ToolStack } from './components/ToolStack';
import './index.css';

function HomeLayout(props: HomeLayoutProps) {
  return (
    <BasicHomeLayout
      {...props}
      afterFeatures={
        <SlotPreview name="afterFeatures">
          {props.afterFeatures}
          <HomeSections />
          <ToolStack />
        </SlotPreview>
      }
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
      <SlotPreviewLayout beforeNavTitle={<NavIcon />} />
    </CssModificationProvider>
  );
};

const DocLayout = (props: DocLayoutProps) => {
  return (
    <BasicDocLayout
      {...props}
      beforeDocContent={
        <SlotPreview name="beforeDocContent">
          <BlogBackButton />
          {props.beforeDocContent}
        </SlotPreview>
      }
    />
  );
};

export * from '@rspress/core/theme-original';
export { DocLayout, HomeLayout, Layout, Callout, Prompt, Tag };