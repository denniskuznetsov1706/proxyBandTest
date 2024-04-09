import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserPosts from './components/UserPosts';
import UserAlbums from './components/UserAlbums';
import NotFound from './components/NotFound';

function App() {
    return (

        <Routes>
            <Route exact path="/" element={<UserList />} />
            <Route path="/users/:id/posts" element={<UserPosts />} />
            <Route path="/users/:id/albums" element={<UserAlbums />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    );
}

export default App;
