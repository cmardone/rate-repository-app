import { Repository } from '@/types/interfaces'
import Constants from 'expo-constants'
import { Dimensions, FlatList, Text, View } from 'react-native'
import useRepositories from '../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'

const windowHeight = Dimensions.get('window').height

const RepositoryList = () => {
  const { isLoading, repositories } = useRepositories()

  return (
    <>
      {isLoading && (
        <View
          style={{
            minHeight: windowHeight - Constants.statusBarHeight,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>IsLoading...</Text>
        </View>
      )}
      {!isLoading && repositories.length === 0 && (
        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              marginTop: 15,
            }}
          >
            There is not availables repositories!
          </Text>
        </View>
      )}
      {!isLoading && repositories.length > 0 && (
        <FlatList
          data={repositories}
          ItemSeparatorComponent={() => <Text></Text>}
          renderItem={({ item: repo }: { item: Repository }) => (
            <RepositoryItem repo={repo} />
          )}
        ></FlatList>
      )}
    </>
  )
}

export default RepositoryList
