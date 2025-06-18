import { Route, Outlet, Navigate } from "react-router-dom";
import { WORKS_DATA } from "../../constants/worksData";
import PAGES from "../../tmpls/Float";

function getWorkRoutes() {
  // TOB のデータ
  const workData = WORKS_DATA[0];

  return (
    <Route path='/tower-of-babel' element={<Outlet />}>
      {/* ページを動的に生成 */}
      {workData.meta.pageTypes.map((page, i) => {
        const PageComponent = PAGES[page.propertyName];
        return (
          <Route
            key={i}
            path={page.path}
            element={<PageComponent data={workData} />}
          />
        );
      })}
      <Route path='*' element={<Navigate to="/" replace />} />
    </Route>
  )
}

export default getWorkRoutes;