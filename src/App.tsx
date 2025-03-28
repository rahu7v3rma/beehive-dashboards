import { FunctionComponent, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    ProjectDashboard,
    ClientDashboard,
    Contributor,
    Community,
    Signin,
    TaskDelegation,
    QuestReview,
    QuestDetail,
    QuestDelegation,
    TechLead,
    Login,
    ContributorProfile,
    Templates,
    Bugs,
    QuestSolution
} from './pages';

import store from './redux/store';
import { RoutesEnum } from './types/navigation';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Snackbar from './shared/Snackbar';

const App: FunctionComponent = () => {
    useEffect(() => {
        const tagManagerArgs = {
            gtmId: `${process.env.REACT_APP_GTM_ID || ''}`
        };
        TagManager.initialize(tagManagerArgs);
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Snackbar />
                    <Routes>
                        <Route
                            path={RoutesEnum.PROJECT_DASHBOARD}
                            element={<ProjectDashboard />}
                        />
                        <Route
                            path={RoutesEnum.CLIENT_DASHBOARD}
                            element={<ClientDashboard />}
                        />
                        <Route path={RoutesEnum.LOGIN} element={<Login />} />
                        <Route
                            path={RoutesEnum.CONTRIBUTOR}
                            element={<Contributor />}
                        />
                        <Route
                            path={RoutesEnum.COMMUNITY}
                            element={<Community />}
                        />
                        <Route
                            path={RoutesEnum.DELEGATE_TASK}
                            element={<TaskDelegation />}
                        />
                        <Route
                            path={RoutesEnum.DELEGATE_QUEST}
                            element={<QuestDelegation />}
                        />
                        <Route
                            path={RoutesEnum.QUEST_REVIEW}
                            element={<QuestReview />}
                        />
                        <Route
                            path={RoutesEnum.QUEST_DETAIL}
                            element={<QuestDetail />}
                        />
                        <Route
                            path={RoutesEnum.TECH_LEAD}
                            element={<TechLead />}
                        />
                        <Route
                            path={RoutesEnum.CONTRIBUTOR_PROFILE}
                            element={<ContributorProfile />}
                        />
                        <Route
                            path="*"
                            element={
                                <Navigate to={RoutesEnum.PROJECT_DASHBOARD} />
                            }
                        />
                        <Route path={RoutesEnum.SignIn} element={<Signin />} />
                        <Route path={RoutesEnum.Profile} element={<Signin />} />
                        <Route
                            path={RoutesEnum.TEMPLATES}
                            element={<Templates />}
                        />
                        <Route path={RoutesEnum.BUGS} element={<Bugs />} />
                        <Route
                            path={RoutesEnum.QUEST_SOLUTION}
                            element={<QuestSolution />}
                        />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
