import CreateCampaign from "../epics/createCampaign/createCampaign";
import ViewCampaign from "../epics/viewCampaign/viewCampaign";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "../epics/homePage/homePage";
import Header from "../components/header/header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/create-campaign" component={CreateCampaign} />
        <Route path="/view-campaign" component={ViewCampaign} />
      </Switch>
    </Router>
  );
};
export default Routes;
