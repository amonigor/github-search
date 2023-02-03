import { Anchor, Avatar, Badge, Blockquote, Text } from '@itwin/itwinui-react';

export const UserProfileComponent = ({ user, showDetails }) => {
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

      {showDetails && (
        <>
          {user.bio && (
            <Blockquote footer={`- ${user.name || user.login}, about themself`}>
              <Text variant="body">{user.bio}</Text>
            </Blockquote>
          )}
          {user.hirebale ? (
            <Badge backgroundColor="positive">Hirebale</Badge>
          ) : (
            <Badge backgroundColor="negative">Not hirebale</Badge>
          )}
          <Text variant="subheading" style={{ marginTop: '10px' }}>
            About this user...
          </Text>
          {user.company && <Text variant="body">Work at {user.company}</Text>}
          {user.location && (
            <Text variant="body">Are located in {user.location}</Text>
          )}
          {user.blog && <Anchor href={user.blog}>Access site/blog</Anchor>}
        </>
      )}
    </div>
  );
};
