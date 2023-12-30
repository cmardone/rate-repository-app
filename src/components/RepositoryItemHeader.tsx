import { Repository } from '@/types/interfaces'
import { Image, StyleSheet, View } from 'react-native'
import theme from '../theme'
import StyledText from './StyledText'

interface Props {
  repo: Repository
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
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
    marginVertical: 4,
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 4,
  },
})

const RepositoryItemHeader = ({ repo }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 4,
      }}
    >
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold">{repo.fullName}</StyledText>
        <StyledText color="secondary">{repo.description}</StyledText>
        <StyledText style={styles.language}>{repo.language}</StyledText>
      </View>
    </View>
  )
}

export default RepositoryItemHeader
