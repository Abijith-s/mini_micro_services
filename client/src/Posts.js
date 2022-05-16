import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CommentCreate from "./CommentCreate";

const Posts = () => {
  const [post, setPots] = useState({});
  const fetchposts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPots(res.data);
  };
  useEffect(() => {
    fetchposts();
  }, []);

  const renderPosts = Object.values(post);
  return (
    <div className="container mt-3">
      {renderPosts?.map((e) => {
        return (
          <Card className="d-flex flex-row justify-content-center mt-3" style={{ width: "18rem"  }}>
            <Card.Body>
              <Card.Title>Posts</Card.Title>
              <Card.Text>{e.title}</Card.Text>
              <CommentCreate postId={e.id}/>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Posts;
