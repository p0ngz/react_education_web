import { Suspense, lazy } from "react";
import SkeletonIntro from "../../components/intro/SkeletonIntro.jsx";

const WhatIsReactComponent = lazy(() =>
  import("../../components/intro/WhatIsReact.jsx")
);
const WhatIsReactPage = () => {
  return (
    <Suspense fallback={<SkeletonIntro />}>
      <WhatIsReactComponent />
    </Suspense>
  );
};

export default WhatIsReactPage;
