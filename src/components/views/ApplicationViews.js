import { Outlet, Route, Routes } from 'react-router-dom'
import { AllGear } from '../gear/AllGear'


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
      </Route>
    </Routes>
  )
}