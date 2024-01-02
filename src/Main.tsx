import { View } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-native'
import AppBar from './components/AppBar'
import LoginPage from './pages/LoginPage'
import RepositoriesPage from './pages/RepositoriesPage'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoriesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  )
}

export default Main
