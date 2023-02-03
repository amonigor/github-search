import {
  Fieldset,
  Input,
  InputGroup,
  ToggleSwitch,
} from '@itwin/itwinui-react';
import { SvgCheckmark } from '@itwin/itwinui-react/cjs/core/utils';
import { useReducer, useState } from 'react';
import { ResultAreaComponent } from './ResultAreaComponent';

export const SerachAreaComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDetails, toggleDetails] = useReducer(
    (showDetails) => !showDetails,
    false
  );
  const [showRepos, toggleRepos] = useReducer((showRepos) => !showRepos, false);

  return (
    <>
      <Fieldset legend="Search" elevation={1}>
        <InputGroup>
          <Input
            style={{ marginBottom: '10px' }}
            placeholder="Type a username here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ToggleSwitch
            icon={<SvgCheckmark />}
            label="Show detailed information"
            value={showDetails}
            onChange={toggleDetails}
          />
          <ToggleSwitch
            icon={<SvgCheckmark />}
            label="Show repositories"
            value={showRepos}
            onChange={toggleRepos}
          />
        </InputGroup>
      </Fieldset>

      <ResultAreaComponent
        searchTerm={searchTerm}
        showDetails={showDetails}
        showRepos={showRepos}
      />
    </>
  );
};
