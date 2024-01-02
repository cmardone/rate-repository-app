import { Repository } from '@/types/interfaces'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../services/graphql/queries'

const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
  const { repositories = null } = data
  // const [repositories, setRepositories] = useState<Repository[]>([])
  // const [isLoading, setIsLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   setIsLoading(true)
  //   getRepositories().then((repositories: Repository[]) => {
  //     setRepositories(repositories)
  //     setIsLoading(false)
  //   })
  // }, [])
  const repositoriesNodes = repositories
    ? repositories.edges.map((edge: { node: Repository }) => edge.node)
    : []
  return { repositories: repositoriesNodes, isLoading: loading }
}

export default useRepositories
