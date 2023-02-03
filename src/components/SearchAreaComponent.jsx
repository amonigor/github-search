import {
  Fieldset,
  Input,
  InputGroup,
  ToggleSwitch,
} from '@itwin/itwinui-react';
import { SvgCheckmark } from '@itwin/itwinui-react/cjs/core/utils';
import { ResultAreaComponent } from './ResultAreaComponent';

export const SerachAreaComponent = () => {
  return (
    <>
      <Fieldset legend="Search" elevation={1}>
        <InputGroup>
          <Input
            style={{ marginBottom: '10px' }}
            placeholder="Type a username here"
          />
          <ToggleSwitch
            icon={<SvgCheckmark />}
            label="Show detailed information"
          />
          <ToggleSwitch icon={<SvgCheckmark />} label="Show repositories" />
        </InputGroup>
      </Fieldset>
      <ResultAreaComponent />
    </>
  );
};
