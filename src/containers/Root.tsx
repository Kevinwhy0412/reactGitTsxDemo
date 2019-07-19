import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import App from '../components/home/Home'
import SurveyList from './survey/SurveyList'
import Test from '../components/Test/Test'
import AntdTest from './antdTest/AntdTest'
import TableList from './table/table'

const Root = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Test} />
        <Route exact path="/home" component={App} />
        <Route path="/survey-list" component={SurveyList} />
        <Route path="/antdTest" component={AntdTest} />
        <Route path="/tab" component={TableList} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Root
