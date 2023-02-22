import { globalStyles } from 'stitches.config';
import { Routes, Route } from 'react-router-dom';
import Home from 'routes/home';
import Dashboard, {
  DashboardHome,
  DashboardJournal,
  DashboardSettings,
} from 'routes/dashboard';

const App = () => {
  globalStyles();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="journal" element={<DashboardJournal />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>
    </Routes>
  );
};

export default App;
