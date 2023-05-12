import React from "react";
import SectionWrapper from "../SectionWrapper";
import { Schedule } from "../../pages/schedule";

const ScheduleSection = () => (
  <SectionWrapper header="Schedule" subhead="">
    <div>
      <Schedule />
    </div>
  </SectionWrapper>
);

export default ScheduleSection;
