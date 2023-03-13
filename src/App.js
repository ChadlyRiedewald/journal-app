import { globalStyles } from 'stitches.config';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'routes/home';
import Dashboard, { DashboardHome, DashboardJournal } from 'routes/dashboard';
import { useUserAuth } from './app/context';
import Settings from './routes/settings';

const App = () => {
  const { user } = useUserAuth();

  console.log(user);

  globalStyles();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="dashboard"
        element={user ? <Dashboard /> : <Navigate to="/" />}
      >
        <Route index element={<DashboardHome />} />
        <Route path="journal" element={<DashboardJournal />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
