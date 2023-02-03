import { Outlet, Route, Routes } from "react-router-dom";
import { AccessoryGear } from "../gear/AccessoryGear";
import { AmpGear } from "../gear/AmpGear";
import { GearEdit } from "../gear/EditGear";
import { GearContainer } from "../gear/GearContainer";
import { GearDetails } from "../gear/GearDetails";
import { GuitarGear } from "../gear/GuitarGear";
import { NewGearForm } from "../gear/NewGearForm";
import { PedalGear } from "../gear/PedalGear";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <></>
            <Outlet />
          </>
        }
      >
        <Route index element={<GearContainer />} />
        <Route path="edit/:gearId" element={<GearEdit />} />
        <Route path="/:gearId" element={<GearDetails />} />
        <Route path="guitars" element={<GuitarGear />} />
        <Route path="pedals" element={<PedalGear />} />
        <Route path="amps" element={<AmpGear />} />
        <Route path="accessories" element={<AccessoryGear />} />
        <Route path="new" element={<NewGearForm />} />
      </Route>
    </Routes>
  );
};
