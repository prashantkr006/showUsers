import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import User from '../components/User';
import Colors from '../constants/Colors';
import {remove} from '../store/userSlice';

export default function BookmarkedUsers() {
  const selectedUsers = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleSelect = (user: any) => {
    dispatch(remove(user));
  };

  return (
    <View style={styles.container}>
      {selectedUsers.length > 0 ? (
        <>
          <TextInput placeholder="Search Here" style={styles.searchBar} />
          {selectedUsers.map((user: any) => {
            console.log(user.login);
            return (
              <User
                key={user.id}
                name={user.login}
                avatar_url={user.avatar_url}
                selected={true}
                onPress={() => handleSelect(user)}
              />
            );
          })}
        </>
      ) : (
        <View style={styles.noDataContainer}>
          <Text>No data is available load some data</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY.BODY,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    borderWidth: 0.5,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
