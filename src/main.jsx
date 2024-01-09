import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import InitialLoader from "./components/loader/initial-loader.jsx";
import Query from "./services/query/index.jsx";
import Router from "./router/router.jsx";
import Auth from "./services/auth/Auth.jsx";
import Theme from "./theme/theme.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={<InitialLoader />}>
        <Query>
            <Theme>
                <Auth>
                    <Router />
                </Auth>
            </Theme>
        </Query>
    </Suspense>
)
