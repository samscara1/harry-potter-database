import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { routes } from './routes';
import { CustomRoute } from './Route';

export const Main = () => {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route, index) => (
                        <CustomRoute key={index} {...route} />
                    ))
                }
            </Switch>
      </Router>
     );
}

