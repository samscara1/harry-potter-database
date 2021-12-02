import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { routes } from './routes';
import { CustomRoute } from './Route';


import { MainPage } from '../pages/MainPage/MainPage';
import { CharacterPage } from '../pages/CharacterPage/CharacterPage'
import { Error404 } from '../pages/Error404/Error404'

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

