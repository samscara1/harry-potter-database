import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { MainPage } from './pages/MainPage/MainPage';
import { CharacterPage } from './pages/CharacterPage/CharacterPage'
import { Error } from './pages/Error/Error'

export const Main = () => {

    return ( 
        <Router>
            <Switch>
                <Route exact path='/'>
                    <MainPage />
                </Route>
                <Route exact path='/character/:id' children={<CharacterPage />} />
                <Route exact path='*'>
                    <Error />
                </Route>
            </Switch>
      </Router>
     );
}