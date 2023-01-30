import { Outlet, Route, Routes } from 'react-router-dom'
import { AllGear } from '../gear/AllGear'
import { GearDetails } from '../gear/GearDetails'
import { GuitarGear } from '../gear/GuitarGear'



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
        <Route index element={<AllGear />} />
        <Route path="/:gearId" element={<GearDetails />} />
        <Route path="guitars" element={<GuitarGear />} />
        <Route path="guitars/:gearId" element={<GearDetails />} />
      </Route>
    </Routes>
  )
}

