import { Repository } from '@/types/interfaces'
import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import RepositoryItemHeader from './RepositoryItemHeader'
import RepositoryStats from './RepositoryStats'

interface Props {
  repo: Repository
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 4,
  },
})

const RepositoryItem = ({ repo }: Props) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemHeader repo={repo} />
      <RepositoryStats repo={repo} />
    </View>
  )
}

export default RepositoryItem
