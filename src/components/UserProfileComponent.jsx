import { Alert, Anchor, Avatar, Text } from '@itwin/itwinui-react';

export const UserProfileComponent = (props) => {
  return !props.user ? (
    <Alert type="warning" className="mt-2" style={{ marginTop: '10px' }}>
      User not found
    </Alert>
  ) : (
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
            image={
              <img
                src="https://avatars.githubusercontent.com/u/48227869?v=4"
                alt="Igor Amon"
              />
            }
            title="Igor Amon"
          />
          <div>
            <Text variant="title" style={{ fontWeight: 'bold' }}>
              Igor Amon
            </Text>
            <Text variant="small">@amonigor</Text>
          </div>
        </div>
        <Anchor href="https://www.example.com/">Access github page</Anchor>
      </div>
    </div>
  );
};
