import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MainPage } from './pages/MainPage/MainPage';
import { CharacterPage } from './pages/CharacterPage/CharacterPage'
import { Error404 } from './pages/Error404/Error404'

export const Main = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MainPage />
                </Route>
                <Route exact path='/character/:id' children={<CharacterPage />} />
                <Route exact path='*'>
                    <Error404 />
                </Route>
            </Switch>
      </Router>
     );
}