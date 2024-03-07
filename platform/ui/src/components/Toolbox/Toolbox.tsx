import React from 'react';
import { PanelSection, ToolSettings, Tooltip } from '@ohif/ui';
import classnames from 'classnames';

function Toolbox({ toolbarButtons, handleToolSelect, activeTool, toolOptions, numRows, title }) {
  return (
    <PanelSection title={title}>
      <div className="flex flex-col bg-black">
        <div className="bg-primary-dark mt-0.5 flex flex-wrap py-2">
          {toolbarButtons.map((toolDef, index) => {
            if (!toolDef) {
              return null;
            }

            const { id, Component, componentProps } = toolDef;
            const isLastRow = Math.floor(index / 4) + 1 === numRows;

            const toolClasses = `ml-1 ${isLastRow ? '' : 'mb-2'}`;
            const onClick = () => handleToolSelect(id);

            return (
              <div
                key={id}
                className={classnames({
                  [toolClasses]: true,
                  'flex flex-col items-center justify-center': true,
                })}
                onClick={onClick}
              >
                {componentProps.disabled ? (
                  <Tooltip
                    position="bottom"
                    content={
                      componentProps.label + ' - Tool not available for current Active viewport'
                    }
                  >
                    <Component {...componentProps} />
                  </Tooltip>
                ) : (
                  <Component {...componentProps} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-primary-dark h-auto px-2">
        {activeTool && toolOptions[activeTool] && (
          <ToolSettings options={toolOptions[activeTool]} />
        )}
      </div>
    </PanelSection>
  );
}

export { Toolbox };
