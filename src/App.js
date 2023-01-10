import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';
import AuthContextProvider from './contexts/AuthContext';
import ProtectedRoute from './components/routing/ProtectedRoute';

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                    <Routes>
                        {privateRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <ProtectedRoute
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <ProtectedRoute>
                                                <Page />
                                            </ProtectedRoute>
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
