import { Surface, Text } from '@itwin/itwinui-react';
import { UserProfileComponent } from './UserProfileComponent.jsx';

export const ResultAreaComponent = () => {
  return (
    <Surface elevation={1} style={{ marginTop: '20px', padding: '12px' }}>
      <Text variant="small">Results for &quot;your search&quot;</Text>
      <UserProfileComponent user={{}} />
    </Surface>
  );
};
