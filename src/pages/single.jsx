import React from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import Sheet from "react-modal-sheet";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { Rating } from "semantic-ui-react";

//images
import img1 from "../images/1.jpeg";

const Single = () => {
  function CommentExampleThreaded() {
    return (
      <>
        <Comment.Group threaded className="commentSheet">
          <Header as="h2" dividing>
            Comments
          </Header>
          <Rating icon="star" defaultRating={3} maxRating={4} />

          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <span>Today at 5:42PM</span>
              </Comment.Metadata>
              <Comment.Text>So interesting!</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <span>Yesterday at 12:30AM</span>
              </Comment.Metadata>
              <Comment.Text>
                <p>
                  This has been very useful for my fitness plan. Thanks as well!
                </p>
              </Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <span>Just now</span>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <span>5 days ago</span>
              </Comment.Metadata>
              <Comment.Text>This is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </>
    );
  }

  function Comments() {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open comment section</button>

        <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>{CommentExampleThreaded()}</Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop />
        </Sheet>
      </>
    );
  }

  return (
    <div className="singlePage">
      <h1>
        <b>BLOG NAME 1</b>
      </h1>
      <h2>Published at 02 August, 2022</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        sodales nulla vitae luctus elementum. Pellentesque porta metus gravida,
        malesuada justo sit amet, tincidunt orci. Curabitur efficitur metus at
        magna bibendum sodales. Pellentesque nec lacus rhoncus, volutpat nisl
        non, mollis risus. Mauris iaculis lectus nunc, eu congue ipsum sodales
        a. Sed auctor ac tellus eget dignissim. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id
        augue laoreet, pharetra mi in, finibus nunc.
      </p>
      <img className="singleImg" src={img1} alt="fitness" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        sodales nulla vitae luctus elementum. Pellentesque porta metus gravida,
        malesuada justo sit amet, tincidunt orci. Curabitur efficitur metus at
        magna bibendum sodales. Pellentesque nec lacus rhoncus, volutpat nisl
        non, mollis risus. Mauris iaculis lectus nunc, eu congue ipsum sodales
        a. Sed auctor ac tellus eget dignissim. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id
        augue laoreet, pharetra mi in, finibus nunc.
      </p>

      {/* Sticky buttons */}

      <div className="flex-container">
        <i className="fi fi-rr-heart"></i>
        <i className="fi fi-rr-comment"></i>
        <i className="fi fi-rr-star"></i>
        <i className="fi fi-rr-share"></i>
      </div>

      {Comments()}
    </div>
  );
};

export default Single;
