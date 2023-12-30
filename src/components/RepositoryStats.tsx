import { Repository } from '@/types/interfaces'
import { View } from 'react-native'
import StyledText from './StyledText'

interface Props {
  repo: Repository
}

const parseThousands = (value: number) =>
  value > 1000 ? `${Math.round(value / 100) / 10}k` : `${value}`

const RepositoryStats = ({ repo }: Props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight="bold">
          {parseThousands(repo.stargazersCount)}
        </StyledText>
        <StyledText>Stars</StyledText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight="bold">
          {parseThousands(repo.forksCount)}
        </StyledText>
        <StyledText>Forks</StyledText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight="bold">{repo.reviewCount}</StyledText>
        <StyledText>Review</StyledText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight="bold">{repo.ratingAverage}</StyledText>
        <StyledText>Rating</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
