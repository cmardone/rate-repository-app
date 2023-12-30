import { Repository } from '@/types/interfaces'
import { FlatList, Text } from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }: { item: Repository }) => (
        <RepositoryItem repo={repo} />
      )}
    ></FlatList>
  )
}

export default RepositoryList
