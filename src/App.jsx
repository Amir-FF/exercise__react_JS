import { Suspense } from "react";
import PostList from "./components/posts/ListPosts";
// import { lazy } from "react";
import "./scss/styles.scss";
import Loading from "./components/loading/Loading";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

// const Form = lazy(() => import("./components/form/Form.jsx"));

const App = () => {
  // codes

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
      {/* <Form /> */}
    </>
  );
};

export default App;
