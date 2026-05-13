import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppLayout } from './components/ui/app-layout';
import { Home } from './pages/home';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { NotFound } from './pages/not-found';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ProtectedRoute } from './features/authentication/protected-route';
import { Profile } from './pages/profile';
import { PublicOnlyRoute } from './features/authentication/public-only-route';
import { AddPost } from './pages/add-post';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <PublicOnlyRoute>
                  <Register />
                </PublicOnlyRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="posts/new"
              element={
                <ProtectedRoute>
                  <AddPost />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-right" />
    </QueryClientProvider>
  );
}

export { App };
