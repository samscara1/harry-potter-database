import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App/App';
import { CharacterPage } from './CharacterPage/CharacterPage'
import { Error } from './Error/Error'

export const Main = () => {

    return ( 
        <Router>
            <Switch>
                <Route exact path='/'>
                    <App   />
                </Route>
                <Route exact path='/character/:id' children={<CharacterPage />} />
                <Route exact path='*'>
                    <Error />
                </Route>
            </Switch>
      </Router>
     );
}