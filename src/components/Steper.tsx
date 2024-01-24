import React from "react";
import { Stepper, Step } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";

export function DefaultStepper() {
  const { activeStep } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""} activeStep={activeStep}>
        <Step
          placeholder={""}
          onClick={() => dispatch(setActiveStepper(0))}
          className="px-8 w-fit"
        >
          Quiz List
        </Step>
        <Step
          placeholder={""}
          onClick={() => dispatch(setActiveStepper(1))}
          className="px-8 w-fit"
        >
          Add Quiz
        </Step>
      </Stepper>
    </div>
  );
}
