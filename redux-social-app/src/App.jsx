import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar } from './app/Navbar';
import { PostsList, EditPostForm, AddPostForm, SinglePostPage } from './features/posts';
import { fetchUsers, UsersList, UserPage } from './features/users';
import { NotificationsList } from './features/notifications';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchUsers());

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route exact path="/posts/:postId" element={<SinglePostPage />} />
          <Route exact path="/editPost/:postId" element={<EditPostForm />} />
          <Route exact path="/users" element={<UsersList />} />
          <Route exact path="/users/:userId" element={<UserPage />} />
          <Route exact path="/notifications" element={<NotificationsList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
