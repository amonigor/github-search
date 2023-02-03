import { Surface, Text, Alert } from '@itwin/itwinui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserProfileComponent } from './UserProfileComponent.jsx';

export const ResultAreaComponent = ({ searchTerm, showDetails, showRepos }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoading(true);

    if (!searchTerm) {
      setUser(null);
      setLoading(false);
      return;
    }

    const getData = setTimeout(() => {
      axios
        .get(`/users/${searchTerm}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }, 1000);

    return () => clearTimeout(getData);
  }, [searchTerm]);

  return searchTerm && !loading ? (
    <Surface elevation={1} style={{ marginTop: '20px', padding: '12px' }}>
      <Text variant="small">Results for {searchTerm}</Text>
      {user ? (
        <UserProfileComponent
          user={user}
          showDetails={showDetails}
          showRepos={showRepos}
        />
      ) : (
        <Alert type="warning" className="mt-2" style={{ marginTop: '10px' }}>
          User not found
        </Alert>
      )}
    </Surface>
  ) : (
    <></>
  );
};
