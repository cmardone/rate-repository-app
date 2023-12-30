import { Text, View } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-native'
import AppBar from '../components/AppBar'
import RepositoryList from '../components/RepositoryList'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/login" element={<Text>Working on it!!!</Text>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  )
}

export default Main
