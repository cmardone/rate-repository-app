import { Repository } from '@/types/interfaces'

export const getRepositories = async () => {
  const response = await fetch('http://localhost:5001/api/repositories')
  if (!response.ok) return []
  const data = await response.json()
  return data.edges.map((edge: { node: Repository }) => edge.node)
}
