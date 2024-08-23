import type { viewPreset } from '../PanelStudyBrowserTracking/types/viewPreset';

const defaultViewPresets = [
  {
    id: 'list',
    iconName: 'icon-list-view',
    selected: false,
  },
  {
    id: 'thumbnails',
    iconName: 'icon-thumbnail-view',
    selected: true,
  },
] as viewPreset[];

export { defaultViewPresets };