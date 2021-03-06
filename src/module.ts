import { PanelPlugin } from '@grafana/data';
import { ParetoOptions } from './types';
import { ParetoPanel } from './ParetoPanel';

export const plugin = new PanelPlugin<ParetoOptions>(ParetoPanel).setPanelOptions(builder => {
  return builder
    .addBooleanSwitch({
      path: 'showBottomAxis',
      name: 'Show bottom axis?',
      defaultValue: false,
    })
    .addBooleanSwitch({
      path: 'showVitalFew',
      name: 'Show vital few line?',
      defaultValue: true,
    })
    .addNumberInput({
      path: 'vitalBreakpointVal',
      name: 'Vital few value (%)',
      defaultValue: 80,
    })
    .addNumberInput({
      path: 'barPadding',
      name: 'Bar padding',
      defaultValue: 0.2,
    });
});
