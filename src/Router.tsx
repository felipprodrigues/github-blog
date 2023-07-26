import { Routes, Route } from "react-router-dom";
import { Post } from "./pages/Post";
import { Blog } from "./pages/Blog";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:postNumber" element={<Post />} />
      </Route>
    </Routes>
  );
}
