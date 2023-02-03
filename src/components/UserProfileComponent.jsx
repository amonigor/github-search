import { Anchor, Avatar, Text } from '@itwin/itwinui-react';

export const UserProfileComponent = ({ user }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Avatar
            size="x-large"
            image={<img src={user.avatar_url} alt="Igor Amon" />}
            title={user.name}
          />
          <div>
            {user.name && (
              <Text variant="title" style={{ fontWeight: 'bold' }}>
                {user.name}
              </Text>
            )}
            <Text variant="small">@{user.login}</Text>
          </div>
        </div>
        <Anchor href={user.html_url}>Access github page</Anchor>
      </div>
    </div>
  );
};
