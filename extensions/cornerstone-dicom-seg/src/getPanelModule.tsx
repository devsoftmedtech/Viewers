import React from 'react';

import { useAppConfig } from '@state';
import { Toolbox } from '@ohif/ui';
import PanelSegmentation from './panels/PanelSegmentation';

const getPanelModule = ({
  commandsManager,
  servicesManager,
  extensionManager,
  configuration,
  title,
}: withAppTypes) => {
  const { customizationService } = servicesManager.services;

  const wrappedPanelSegmentation = ({ configuration, getOpenStateComponent }) => {
    const [appConfig] = useAppConfig();

    return (
      <PanelSegmentation
        commandsManager={commandsManager}
        servicesManager={servicesManager}
        extensionManager={extensionManager}
        configuration={{
          ...configuration,
          disableEditing: appConfig.disableEditing,
          ...customizationService.get('segmentation.panel'),
        }}
        getOpenStateComponent={getOpenStateComponent}
      />
    );
  };

  const wrappedPanelSegmentationNoHeader = ({ configuration }) => {
    const [appConfig] = useAppConfig();

    return (
      <PanelSegmentation
        commandsManager={commandsManager}
        servicesManager={servicesManager}
        extensionManager={extensionManager}
        configuration={{
          ...configuration,
          disableEditing: appConfig.disableEditing,
          ...customizationService.get('segmentation.panel'),
        }}
      />
    );
  };

  const wrappedPanelSegmentationWithTools = ({ configuration, getOpenStateComponent }) => {
    const [appConfig] = useAppConfig();

    return (
      <>
        <Toolbox
          commandsManager={commandsManager}
          servicesManager={servicesManager}
          extensionManager={extensionManager}
          buttonSectionId="segmentationToolbox"
          title="Segmentation Tools"
          configuration={{
            ...configuration,
          }}
          getOpenStateComponent={getOpenStateComponent}
        />
        <PanelSegmentation
          commandsManager={commandsManager}
          servicesManager={servicesManager}
          extensionManager={extensionManager}
          configuration={{
            ...configuration,
            disableEditing: appConfig.disableEditing,
            ...customizationService.get('segmentation.panel'),
          }}
        />
      </>
    );
  };

  return [
    {
      name: 'panelSegmentation',
      iconName: 'tab-segmentation',
      iconLabel: 'Segmentation',
      label: 'Segmentation',
      component: wrappedPanelSegmentation,
    },
    {
      name: 'panelSegmentationWithTools',
      iconName: 'tab-segmentation',
      iconLabel: 'Segmentation',
      label: 'Segmentation',
      component: wrappedPanelSegmentationWithTools,
    },
    {
      name: 'panelSegmentationNoHeader',
      iconName: 'tab-segmentation',
      iconLabel: 'Segmentation',
      label: 'Segmentation',
      component: wrappedPanelSegmentationNoHeader,
    },
  ];
};

export default getPanelModule;
