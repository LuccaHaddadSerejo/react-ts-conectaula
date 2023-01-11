import React from "react";
import GradeFilter from "../../components/GradeFilter";
import Header from "../../components/Header";
import MainStyledContainer from "../../components/MainContainer/style";

const DashboardStudent = () => {
  return (
    <>
      <Header />
      <MainStyledContainer>
        <section>
          <div>
            <h2>Professores disponíveis</h2>
            <GradeFilter />

            <ul>{/* <CardTeacher/> */}</ul>
          </div>
          <div>
            {/* <EditProfileStudent/> */}
            {/* <EditPreferenceStudent/> */}
          </div>
        </section>
      </MainStyledContainer>
    </>
  );
};

export default DashboardStudent;
