import React from "react";
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
export const CalanderToolbar = toolbar => {
  const goToBack = () => {
    // toolbar.date.setMonth(toolbar.date - 7);
    toolbar.date.setDate(toolbar.date.getDate() - 7);
    toolbar.onNavigate("prev");
  };

  const goToNext = () => {
    toolbar.date.setDate(toolbar.date.getDate() + 7);
    toolbar.onNavigate("next");
  };

  // This will be use in future for changing view from weeks to days
  // const goToCurrent = () => {
  //     const now = new Date();
  //     toolbar.date.setMonth(now.getMonth());
  //     toolbar.date.setYear(now.getFullYear());
  //     toolbar.onNavigate('current');
  // };
  const getDate = () => {
    let calanderDate = toolbar.label.split(" ");
    let calanderYear = toolbar.date.getFullYear();
    if (calanderDate.length > 4) {
      return `${toolbar.label} ${calanderYear}`;
    }
    return `${calanderDate[0]} ${calanderYear}`;
  };

  return (
    <div className="calendarToolbarCnt">
      <div className="calendarLeftArrowIcon">
        <IconButton onClick={goToBack} >
          <ArrowLeftIcon />
        </IconButton>
      </div>

      <div className="calendarDateSelectCnt">
        {" "}
        <label className="calendarDateSelect"> {getDate()}</label>
      </div>
      <div className="calendarRightArrowIcon" onClick={goToNext}>
        <IconButton >
          <ArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};
