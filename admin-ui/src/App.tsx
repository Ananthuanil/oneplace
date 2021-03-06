import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CommunityList } from "./community/CommunityList";
import { CommunityCreate } from "./community/CommunityCreate";
import { CommunityEdit } from "./community/CommunityEdit";
import { CommunityShow } from "./community/CommunityShow";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { SkillSetList } from "./skillSet/SkillSetList";
import { SkillSetCreate } from "./skillSet/SkillSetCreate";
import { SkillSetEdit } from "./skillSet/SkillSetEdit";
import { SkillSetShow } from "./skillSet/SkillSetShow";
import { CandidateList } from "./candidate/CandidateList";
import { CandidateCreate } from "./candidate/CandidateCreate";
import { CandidateEdit } from "./candidate/CandidateEdit";
import { CandidateShow } from "./candidate/CandidateShow";
import { InterviewFeedbackList } from "./interviewFeedback/InterviewFeedbackList";
import { InterviewFeedbackCreate } from "./interviewFeedback/InterviewFeedbackCreate";
import { InterviewFeedbackEdit } from "./interviewFeedback/InterviewFeedbackEdit";
import { InterviewFeedbackShow } from "./interviewFeedback/InterviewFeedbackShow";
import { InterviewList } from "./interview/InterviewList";
import { InterviewCreate } from "./interview/InterviewCreate";
import { InterviewEdit } from "./interview/InterviewEdit";
import { InterviewShow } from "./interview/InterviewShow";
import { OpportunityList } from "./opportunity/OpportunityList";
import { OpportunityCreate } from "./opportunity/OpportunityCreate";
import { OpportunityEdit } from "./opportunity/OpportunityEdit";
import { OpportunityShow } from "./opportunity/OpportunityShow";
import { PartnerList } from "./partner/PartnerList";
import { PartnerCreate } from "./partner/PartnerCreate";
import { PartnerEdit } from "./partner/PartnerEdit";
import { PartnerShow } from "./partner/PartnerShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { CommunicationFeedbackList } from "./communicationFeedback/CommunicationFeedbackList";
import { CommunicationFeedbackCreate } from "./communicationFeedback/CommunicationFeedbackCreate";
import { CommunicationFeedbackEdit } from "./communicationFeedback/CommunicationFeedbackEdit";
import { CommunicationFeedbackShow } from "./communicationFeedback/CommunicationFeedbackShow";
import { AwardList } from "./award/AwardList";
import { AwardCreate } from "./award/AwardCreate";
import { AwardEdit } from "./award/AwardEdit";
import { AwardShow } from "./award/AwardShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"One Place"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Community"
          list={CommunityList}
          edit={CommunityEdit}
          create={CommunityCreate}
          show={CommunityShow}
        />
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="SkillSet"
          list={SkillSetList}
          edit={SkillSetEdit}
          create={SkillSetCreate}
          show={SkillSetShow}
        />
        <Resource
          name="Candidate"
          list={CandidateList}
          edit={CandidateEdit}
          create={CandidateCreate}
          show={CandidateShow}
        />
        <Resource
          name="InterviewFeedback"
          list={InterviewFeedbackList}
          edit={InterviewFeedbackEdit}
          create={InterviewFeedbackCreate}
          show={InterviewFeedbackShow}
        />
        <Resource
          name="Interview"
          list={InterviewList}
          edit={InterviewEdit}
          create={InterviewCreate}
          show={InterviewShow}
        />
        <Resource
          name="Opportunity"
          list={OpportunityList}
          edit={OpportunityEdit}
          create={OpportunityCreate}
          show={OpportunityShow}
        />
        <Resource
          name="Partner"
          list={PartnerList}
          edit={PartnerEdit}
          create={PartnerCreate}
          show={PartnerShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="CommunicationFeedback"
          list={CommunicationFeedbackList}
          edit={CommunicationFeedbackEdit}
          create={CommunicationFeedbackCreate}
          show={CommunicationFeedbackShow}
        />
        <Resource
          name="Award"
          list={AwardList}
          edit={AwardEdit}
          create={AwardCreate}
          show={AwardShow}
        />
      </Admin>
    </div>
  );
};

export default App;
