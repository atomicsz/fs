import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Forgot from '../pages/Forgot'
import Products from '../pages/Products'
import Women from '../pages/Women'
import Men from '../pages/Men'
import Jewelery from '../pages/Jewelery'
import Eletronics from '../pages/Eletronics'
import Inspect from '../pages/Inspect'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainRoutes() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/reset" component={Forgot} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/women" component={Women} />
                    <Route exact path="/men" component={Men} />
                    <Route exact path="/jewelery" component={Jewelery} />
                    <Route exact path="/eletronics" component={Eletronics} />
                    <Route exact path="/products/:id" component={Inspect} />
                </Switch>
            </div>
            <Footer />
        </>
    )
}