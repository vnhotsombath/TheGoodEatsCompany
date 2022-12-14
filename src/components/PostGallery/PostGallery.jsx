import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";
import Loader from "../Loader/Loader";

export default function PostGallery({
  posts,
  isProfile,
  addLike,
  removeLike,
  loading,
  loggedUser,
  removePost,
  getPosts,
}) {
  posts.sort(function (a, b) {
    if (a.createdAt > b.createdAt) return -1;
    else if (b.createdAt > a.createdAt) return 1;
    else return 0;
  });

  return (
    <Card.Group itemsPerRow={1} stackable>
      {loading ? (
        <Segment>
          <Dimmer active inverted>
            <Loader size="small">Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      ) : null}
      {posts.map((post) => {
        return (
          <PostCard
            post={post}
            key={post._id}
            isProfile={isProfile}
            loggedUser={loggedUser}
            removeLike={removeLike}
            addLike={addLike}
            removePost={removePost}
            getPosts={getPosts}
          />
        );
      })}
    </Card.Group>
  );
}
