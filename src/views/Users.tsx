import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  SafeAreaView,
  Text,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../constants/Colors';
import User from '../components/User';
import {useDispatch, useSelector} from 'react-redux';
import {select} from '../store/userSlice';
import {fetchUsers} from '../store/userListSlice';
import {STATUS} from '../store/userListSlice';

const wait = (timeout: any) => {
  return new Promise((resolve: any) => setTimeout(resolve, timeout));
};

export default function Users() {
  const dispatch = useDispatch();
  const {data: users, status} = useSelector((state: any) => state.usersList);
  const [selected, setSelected] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loaded, setLoaded] = useState(10);
  useEffect(() => {
    dispatch(fetchUsers(loaded));
  }, []);

  const handleSelect = (user: any) => {
    dispatch(select(user));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const loadMore = (num: number) => {
    console.log('loadMore clicked', loaded);
    setLoaded(num + 10);
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <Button title="Load More" onPress={() => loadMore(loaded)} />
      </View>
    );
  };

  if (status === STATUS.LOADING) {
    return (
      <View style={styles.statusContainer}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput placeholder="Search Here" style={styles.searchBar} />
        <FlatList
          data={users}
          keyExtractor={(_, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={(item: any) => {
            return (
              <User
                name={item.item.login}
                avatar_url={item.item.avatar_url}
                selected={selected}
                onPress={() => handleSelect(item.item)}
              />
            );
          }}
          ListFooterComponent={renderFooter}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY.BODY,
  },
  searchBar: {
    borderWidth: 0.5,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
